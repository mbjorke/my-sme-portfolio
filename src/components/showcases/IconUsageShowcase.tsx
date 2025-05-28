import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

type IconVariant = 'social' | 'contact' | 'action';

interface IconExample {
  name: string;
  icon: React.ReactNode;
  variant: IconVariant;
  className?: string;
  href?: string;
}

export function IconUsageShowcase() {
  const iconExamples: IconExample[] = [
    {
      name: 'GitHub',
      icon: <SiGithub size={24} />,
      variant: 'social',
      href: 'https://github.com/username',
    },
    {
      name: 'LinkedIn',
      icon: <SiLinkedin size={24} />,
      variant: 'social',
      href: 'https://linkedin.com/in/username',
    },
    {
      name: 'Email',
      icon: <FiMail size={20} />,
      variant: 'contact',
      href: 'mailto:example@example.com',
    },
    {
      name: 'Phone',
      icon: <FiPhone size={20} />,
      variant: 'contact',
      href: 'tel:+1234567890',
    },
    {
      name: 'Location',
      icon: <FiMapPin size={20} />,
      variant: 'contact',
      className: 'flex items-center space-x-2',
    },
    {
      name: 'External Link',
      icon: <span>→</span>,
      variant: 'action',
      className: 'inline ml-1',
    },
  ];

  const getVariantClasses = (variant: IconVariant) => {
    switch (variant) {
      case 'social':
        return 'text-gray-600 hover:text-primary transition-colors';
      case 'contact':
        return 'flex items-center space-x-3 group hover:text-primary transition-colors';
      case 'action':
        return 'inline-flex items-center';
      default:
        return '';
    }
  };

  const renderIconExample = (example: IconExample) => {
    const content = (
      <>
        <span className={example.variant === 'social' ? 'text-primary' : ''}>{example.icon}</span>
        {example.variant === 'contact' && <span>{example.name}</span>}
        {example.variant === 'action' && <span className="ml-1">{example.name}</span>}
      </>
    );

    if (example.href) {
      return (
        <a
          key={example.name}
          href={example.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${getVariantClasses(example.variant)} ${example.className || ''}`}
          aria-label={`${example.name} link`}
        >
          {content}
        </a>
      );
    }

    return (
      <div
        key={example.name}
        className={`${getVariantClasses(example.variant)} ${example.className || ''}`}
      >
        {content}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Social Icons</h3>
        <div className="flex flex-wrap gap-4 p-4 border rounded-lg">
          {iconExamples
            .filter((icon) => icon.variant === 'social')
            .map((icon) => renderIconExample(icon))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Contact Icons</h3>
        <div className="space-y-4 p-4 border rounded-lg">
          {iconExamples
            .filter((icon) => icon.variant === 'contact')
            .map((icon) => renderIconExample(icon))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Action Icons</h3>
        <div className="p-4 border rounded-lg">
          <button className="flex items-center text-primary hover:underline">
            View more {renderIconExample(iconExamples.find((icon) => icon.variant === 'action')!)}
          </button>
        </div>
      </div>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="font-medium mb-2">Usage Example</h3>
        <pre className="bg-background p-4 rounded text-sm overflow-x-auto">
          {`// Social Icon
<Link
  href="https://github.com/username"
  target="_blank"
  rel="noopener noreferrer"
  className="flex justify-center items-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-110"
  aria-label="GitHub profile"
>
  <SiGithub size={24} className="text-primary" />
</Link>

// Contact Icon
<div className="flex items-center space-x-3 group hover:text-primary transition-colors">
  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
    <FiPhone size={20} />
  </div>
  <span>+123 456 7890</span>
</div>`}
        </pre>
      </div>
    </div>
  );
}
