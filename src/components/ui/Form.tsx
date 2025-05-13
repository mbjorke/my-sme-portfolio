import React, { ReactNode } from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  validator?: (formData: any, errors: any) => any; // Add validator prop
  className?: string; // Allow custom class names
}

export const Form: React.FC<FormProps> = ({ children, validator, className, ...props }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const errors = validator ? validator(formData, {}) : {};
    // Handle submission logic here, including error handling
  };

  return (
    <form className={`flex flex-col gap-4 ${className}`} onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
};
