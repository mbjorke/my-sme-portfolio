'use client';
import React, { ReactNode, createContext, useContext, useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

type FormErrors = Record<string, string>;

// FormField interface is not used in this file

// Define a more specific type for form values
type FormValues = {
  [key: string]: string | number | boolean | null | undefined;
};

interface FormContextType {
  errors: FormErrors;
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  setFieldError: (name: string, message: string) => void;
  clearFieldError: (name: string) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

interface FormProps
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit' | 'onError'> {
  children: ReactNode;
  initialValues?: FormValues;
  validate?: (values: FormValues) => FormErrors | Promise<FormErrors>;
  onSubmit: (values: FormValues) => void | Promise<void>;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  className?: string;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
}

export const Form: React.FC<FormProps> = ({
  children,
  validate,
  onSubmit,
  onSuccess,
  onError,
  className = '',
  validateOnChange = false,
  validateOnBlur = true,
  ...props
}) => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<FormErrors>({});

  const getFormValues = (form: HTMLFormElement): FormValues => {
    const formData = new FormData(form);
    const values: Record<string, unknown> = {};

    formData.forEach((value, key) => {
      // Convert FormDataEntryValue to string or keep as is if it's a File
      values[key] = value instanceof File ? value : value.toString();
    });

    return values as FormValues;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (!(event.target instanceof HTMLFormElement)) return;
    event.preventDefault();
    setFormState('submitting');

    const values = getFormValues(event.target);

    try {
      // Run validation if provided
      if (validate) {
        const validationErrors = await validate(values);

        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          setFormState('error');
          return;
        }
      }

      // Submit the form
      await onSubmit(values);
      setFormState('success');
      onSuccess?.();
    } catch (error) {
      console.error('Form submission error:', error);
      setFormState('error');
      onError?.(error instanceof Error ? error : new Error('Form submission failed'));
    }
  };

  const handleChange = validateOnChange
    ? async (e: React.FormEvent<HTMLFormElement>) => {
        if (!(e.target instanceof HTMLFormElement)) return;
        if (validate) {
          const values = getFormValues(e.target);
          const validationErrors = await validate(values);
          setErrors((prev) => ({
            ...prev,
            ...validationErrors,
          }));
        }
      }
    : undefined;

  const handleBlur = validateOnBlur
    ? async (e: React.FocusEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        const form = target.closest('form');
        if (!form) return;

        const name = (target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement).name;
        if (!name) return;

        if (validate) {
          const values = getFormValues(form);
          const validationErrors = await validate(values);
          setErrors((prev) => ({
            ...prev,
            [name]: validationErrors[name] || '',
          }));
        }
      }
    : undefined;

  const contextValue: FormContextType = {
    errors,
    isSubmitting: formState === 'submitting',
    isSuccess: formState === 'success',
    isError: formState === 'error',
    setFieldError: (name, message) => {
      setErrors((prev) => ({
        ...prev,
        [name]: message,
      }));
    },
    clearFieldError: (name) => {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    },
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form
        className={`flex flex-col gap-4 ${className}`}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onBlur={handleBlur}
        aria-live="polite"
        {...props}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};
