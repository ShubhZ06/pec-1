import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    onClick?: () => void;
}

export default function Card({ children, className = '', title, onClick }: CardProps) {
    return (
        <div className={`${styles.card} ${className}`} onClick={onClick}>
            {title && <h3 className={styles.title}>{title}</h3>}
            {children}
        </div>
    );
}
