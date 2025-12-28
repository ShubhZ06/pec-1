"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, User, Settings, Gamepad2, FlaskConical, LayoutDashboard } from 'lucide-react';
import styles from './Sidebar.module.css';

const ROLE_LINKS = {
    student: [
        { name: 'Dashboard', href: '/student/dashboard', icon: LayoutDashboard },
        { name: 'Courses', href: '/student/courses', icon: BookOpen },
        { name: 'Fun Zone', href: '/student/fun-zone', icon: Gamepad2 },
        { name: 'VR Labs', href: '/student/vr-labs', icon: FlaskConical },
    ],
    teacher: [
        { name: 'Dashboard', href: '/teacher/dashboard', icon: LayoutDashboard },
        { name: 'Students', href: '/teacher/students', icon: User },
    ],
    parent: [
        { name: 'Dashboard', href: '/parent/dashboard', icon: LayoutDashboard },
    ],
    admin: [
        { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Settings', href: '/admin/settings', icon: Settings },
    ]
};

export default function Sidebar({ role = 'student' }: { role?: keyof typeof ROLE_LINKS }) {
    const pathname = usePathname();
    const links = ROLE_LINKS[role];

    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <div className={styles.logoIcon}>🛡️</div>
                <span className={styles.logoText}>SurakshaSetu</span>
            </div>

            <nav className={styles.nav}>
                <div className={styles.navSectionTitle}>MENU</div>
                {links.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.link} ${isActive ? styles.active : ''}`}
                        >
                            <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                            <span className={styles.linkText}>{link.name}</span>
                        </Link>
                    );
                })}

                {/* Additional Links for demo purposes per reference */}
                <div className={styles.navSectionTitle}>LIBRARY</div>
                <Link href="#" className={styles.link}>
                    <BookOpen size={22} />
                    <span>My Saved</span>
                </Link>
                <Link href="#" className={styles.link}>
                    <Settings size={22} />
                    <span>Settings</span>
                </Link>
            </nav>

            <Link href="/auth" style={{ textDecoration: 'none' }}>
                <div className={styles.userProfile}>
                    <div className={styles.avatar}>👤</div>
                    <div className={styles.userInfo}>
                        <p className={styles.userName}>Log Out</p>
                    </div>
                </div>
            </Link>
        </aside>
    );
}
