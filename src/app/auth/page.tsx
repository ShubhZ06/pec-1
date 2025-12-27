"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';
import styles from './auth.module.css';

const ROLES = ['student', 'teacher', 'parent', 'admin'];

export default function AuthPage() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);
    const [selectedRole, setSelectedRole] = useState('student');

    const handleAuth = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock Auth: Redirect to dashboard based on role
        router.push(`/${selectedRole}/dashboard`);
    };

    return (
        <main className={styles.container}>
            <Card className={styles.authCard}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{isLogin ? 'Welcome Back!' : 'Join the Fun!'}</h1>
                    <p className={styles.subtitle}>Select your role to continue</p>
                </div>

                <div className={styles.roleSelector}>
                    {ROLES.map((role) => (
                        <button
                            key={role}
                            className={`${styles.roleBtn} ${selectedRole === role ? styles.activeRole : ''}`}
                            onClick={() => setSelectedRole(role)}
                        >
                            {role.charAt(0).toUpperCase() + role.slice(1)}
                        </button>
                    ))}
                </div>

                <form onSubmit={handleAuth} className={styles.form}>
                    <Input
                        type="email"
                        placeholder="Email Address"
                        label="Email"
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        label="Password"
                        required
                    />

                    <Button type="submit" size="lg" className={styles.submitBtn}>
                        {isLogin ? 'Login' : 'Sign Up'}
                    </Button>
                </form>

                <p className={styles.switchText}>
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button
                        className={styles.switchBtn}
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                </p>
            </Card>
        </main>
    );
}
