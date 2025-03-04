import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary',
  size = 'medium',
  onClick
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`;
  
  if (href) {
    return (
      <Link href={href}>
        <a className={className}>{children}</a>
      </Link>
    );
  }
  
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
} 