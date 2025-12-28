"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BookOpen, Settings, Bell, Gamepad2, FlaskConical, Calendar, User } from 'lucide-react';
import styles from './Navbar.module.css';

const ROLE_LINKS = {
    student: [
        { name: 'Dashboard', href: '/student/dashboard', icon: LayoutDashboard },
        { name: 'Courses', href: '/student/courses', icon: BookOpen },
        { name: 'Fun Zone', href: '/student/fun-zone', icon: Gamepad2 },
        { name: 'VR Labs', href: '/student/vr-labs', icon: FlaskConical },
        { name: 'Settings', href: '/student/settings', icon: Settings },
    ],
    teacher: [
        { name: 'Dashboard', href: '/teacher/dashboard', icon: LayoutDashboard },
        { name: 'Students', href: '/teacher/students', icon: User },
        { name: 'Settings', href: '/teacher/settings', icon: Settings },
    ],
    parent: [
        { name: 'Dashboard', href: '/parent/dashboard', icon: LayoutDashboard },
        { name: 'Settings', href: '/parent/settings', icon: Settings },
    ],
    admin: [
        { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Settings', href: '/admin/settings', icon: Settings },
    ]
};

export default function Navbar({ role = 'student' }: { role?: keyof typeof ROLE_LINKS }) {
    const pathname = usePathname();
    const links = ROLE_LINKS[role];

    return (
        <nav className={styles.navbar}>
            <div className={styles.branding}>
                {/* Logo Image */}
                <img src="/logo.png" alt="Suraksha Setu" width={40} height={40} style={{ objectFit: 'contain' }} />
                <span className={styles.brandName}>Suraksha Setu</span>
            </div>

            <div className={styles.navLinks}>
                {links.map(link => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                        <Link key={link.name} href={link.href} className={`${styles.link} ${isActive ? styles.active : ''}`}>
                            <div className={isActive ? styles.activeIcon : ''}>
                                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                            </div>
                            <span>{link.name}</span>
                        </Link>
                    );
                })}
            </div>

            <div className={styles.rightSection}>
                <div style={{ width: 100, height: 4, background: '#F0F0F3', borderRadius: 2 }}>
                    <div style={{ width: '60%', background: 'black', height: '100%', borderRadius: 2 }}></div>
                </div>

                <div className={styles.userSection}>
                    <span className={styles.greeting}>Hello {role.charAt(0).toUpperCase() + role.slice(1)}</span>
                    <div className={styles.avatar}>
                        {/* Placeholder for avatar image */}
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)' }}></div>
                    </div>
                </div>

                <div className={styles.iconButton}>
                    <Calendar size={20} />
                </div>
                <div className={styles.iconButton}>
                    <Bell size={20} />
                    <span className={styles.badge}></span>
                </div>
            </div>
        </nav>
    );
}
