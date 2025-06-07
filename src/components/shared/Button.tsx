import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  download?: boolean;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className = '',
  onClick,
  type = 'button',
  href,
  download,
  target,
  rel,
}) => {
  const baseClasses = 'font-medium rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 focus:ring-blue-500',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        download={download}
        target={target}
        rel={rel}
      >
        {Icon && <Icon className="mr-2\" size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />}
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {Icon && <Icon className="mr-2\" size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />}
      {children}
    </button>
  );
};

export default Button;