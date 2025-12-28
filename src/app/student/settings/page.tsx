"use client";
import { User, Bell, Shield, Camera, Save, LogOut } from "lucide-react";
import styles from "./settings.module.css";
import { useState } from "react";

export default function SettingsPage() {
    const [notifications, setNotifications] = useState({
        email: true,
        push: true,
        updates: false
    });

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Account Settings</h1>
                <p className={styles.subtitle}>Manage your profile and preferences</p>
            </header>

            {/* Profile Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <User size={24} /> Public Profile
                </h2>

                <div className={styles.profileHeader}>
                    <div className={styles.avatarContainer}>
                        <div className={styles.avatar}></div> {/* Placeholder */}
                        <div className={styles.uploadBtn}>
                            <Camera size={16} />
                        </div>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Len</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Student • Level 12</p>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={`${styles.formGroup} ${styles.col}`}>
                        <label className={styles.label}>First Name</label>
                        <input type="text" defaultValue="Len" className={styles.input} />
                    </div>
                    <div className={`${styles.formGroup} ${styles.col}`}>
                        <label className={styles.label}>Last Name</label>
                        <input type="text" defaultValue="" className={styles.input} />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Bio</label>
                    <textarea rows={3} className={styles.input} defaultValue="Ready to learn! 🚀" style={{ resize: 'vertical' }} />
                </div>
            </section>

            {/* Notifications */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Bell size={24} /> Notifications
                </h2>

                <div className={styles.toggleItem}>
                    <div className={styles.toggleInfo}>
                        <h4>Email Notifications</h4>
                        <p>Receive daily summaries and drill alerts</p>
                    </div>
                    <label className={styles.switch}>
                        <input type="checkbox" checked={notifications.email} onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })} />
                        <span className={styles.slider}></span>
                    </label>
                </div>

                <div className={styles.toggleItem}>
                    <div className={styles.toggleInfo}>
                        <h4>Push Notifications</h4>
                        <p>Get instant alerts on your device</p>
                    </div>
                    <label className={styles.switch}>
                        <input type="checkbox" checked={notifications.push} onChange={(e) => setNotifications({ ...notifications, push: e.target.checked })} />
                        <span className={styles.slider}></span>
                    </label>
                </div>
            </section>

            {/* Security */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Shield size={24} /> Security
                </h2>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Email Address</label>
                    <input type="email" defaultValue="len@student.com" className={styles.input} />
                </div>

                <div className={styles.row}>
                    <div className={styles.col}>
                        <label className={styles.label}>New Password</label>
                        <input type="password" placeholder="••••••••" className={styles.input} />
                    </div>
                    <div className={styles.col} style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                            Leave blank to keep current password
                        </p>
                    </div>
                </div>
            </section>

            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <button className={styles.btnGhost}>
                    <LogOut size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Log Out
                </button>
                <button className={styles.btnPrimary} style={{ marginLeft: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Save size={18} />
                    Save Changes
                </button>
            </div>
        </div>
    );
}
