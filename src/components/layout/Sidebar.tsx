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
                <div className={styles.logoIcon}>🎓</div>
                <span>KidzLearn</span>
            </div>

            <nav className={styles.nav}>
                {links.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.link} ${isActive ? styles.active : ''}`}
                        >
                            <Icon size={24} />
                            <span className={styles.linkText}>{link.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className={styles.userProfile}>
                <div className={styles.avatar}>👤</div>
                <div className={styles.userInfo}>
                    <p className={styles.userName}>Hello User</p>
                    <p className={styles.userRole}>{role.charAt(0).toUpperCase() + role.slice(1)}</p>
                </div>
            </div>
        </aside>
    );
}
