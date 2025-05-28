'use client';
import React from 'react';
import {
  useForm,
  FormProvider,
  UseFormReturn,
  FieldValues,
  SubmitHandler,
  UseFormProps,
  useFormContext,
  useController,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { cn } from '@/lib/utils';

type FormProps<TFormValues extends FieldValues> = {
  children: ((methods: UseFormReturn<TFormValues>) => React.ReactNode) | React.ReactNode;
  onSubmit: SubmitHandler<TFormValues>;
  className?: string;
  schema?: z.ZodType<TFormValues>;
  options?: UseFormProps<TFormValues>;
} & Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>;

export function Form<TFormValues extends FieldValues>({
  children,
  onSubmit,
  className,
  schema,
  options,
  ...props
}: FormProps<TFormValues>) {
  const methods = useForm<TFormValues>({
    ...(schema && { resolver: zodResolver(schema) }),
    ...options,
  });

  return (
    <FormProvider {...methods}>
      <form
        className={cn('flex flex-col gap-4', className)}
        onSubmit={methods.handleSubmit(onSubmit)}
        {...props}
      >
        {typeof children === 'function' ? children(methods) : children}
      </form>
    </FormProvider>
  );
}

type FieldProps = {
  id: string;
  name: string;
  value: string | number | readonly string[] | undefined;
  disabled?: boolean;
  onBlur: React.FocusEventHandler<HTMLElement>;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string) => void;
  ref: React.RefCallback<HTMLElement>;
};

type FormFieldProps<TFieldValues extends FieldValues> = {
  name: keyof TFieldValues;
  label?: string;
  description?: string;
  className?: string;
  children: (field: FieldProps) => React.ReactNode;
};

export function FormField<TFieldValues extends FieldValues>({
  name,
  label,
  description,
  className,
  children,
}: FormFieldProps<TFieldValues>) {
  const { field, fieldState } = useController({
    name: name as string,
  });

  const id = React.useId();

  return (
    <div className={cn('space-y-2', className)}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
      {children({
        id,
        name: field.name,
        value: field.value ?? '',
        disabled: field.disabled,
        onBlur: field.onBlur,
        onChange: (
          e:
            | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            | string
            | number
            | readonly string[],
        ) => {
          // Handle both direct value assignment and event objects
          const value = e && typeof e === 'object' && 'target' in e ? e.target.value : e;
          field.onChange(value);
        },
        ref: field.ref,
      })}
      {fieldState.error && (
        <p className="text-sm font-medium text-destructive">
          {fieldState.error.message?.toString()}
        </p>
      )}
    </div>
  );
}

// Re-export useful hooks
export { useFormContext };
export type { FieldValues, UseFormReturn } from 'react-hook-form';
