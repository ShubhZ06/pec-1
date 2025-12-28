"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Filter, Play, Info, Check } from "lucide-react";
import styles from "./courses.module.css";
import Image from "next/image";

// Mock Data
const MODULES = [
    { id: 1, title: 'Earthquake 101', category: 'Simulation', duration: '15:00', color: '#4338CA', icon: '🏚️', desc: 'Learn to identify subtle workplace hazards.' },
    { id: 2, title: 'Fire Safety', category: 'Lecture', duration: '22:30', color: '#D946EF', icon: '🔥', desc: 'Effective communication strategies during emergency.' },
    { id: 3, title: 'First Aid Kit', category: 'Simulation', duration: '10:00', color: '#3B82F6', icon: '🩹', desc: 'Essential first aid skills for every student.' },
    { id: 4, title: 'Flood Response', category: 'Quiz', duration: '08:00', color: '#F59E0B', icon: '🌊', desc: 'Test your knowledge on flood evacuation routes.' },
];

const CATEGORIES = ["All Modules", "Video Lectures", "Quizzes", "Saved"];

export default function LibraryPage() {
    const [activeCat, setActiveCat] = useState("All Modules");

    return (
        <div className={styles.container}>
            {/* Main Content */}
            <main>
                <div className={styles.header}>
                    <h1 className={styles.title}>Library</h1>
                    <div className={styles.searchBar}>
                        <Search size={20} />
                        <input type="text" placeholder="Search modules, topics..." className={styles.searchInput} />
                        <Filter size={20} style={{ cursor: 'pointer' }} />
                    </div>
                </div>

                {/* Hero Card */}
                {/* Categories */}
                <div className={styles.categories}>
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            className={`${styles.category} ${activeCat === cat ? styles.active : ''}`}
                            onClick={() => setActiveCat(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Modules Grid */}
                <div className={styles.sectionTitle}>Recently Added</div>
                <div className={styles.modulesGrid}>
                    {MODULES.map(module => (
                        <Link href={`/student/courses/${module.id}`} key={module.id} style={{ textDecoration: 'none' }}>
                            <div className={styles.moduleCard}>
                                <div className={styles.moduleHeader} style={{ background: module.color }}>
                                    <div className={styles.durationBadge}>{module.category}</div>
                                    <div className={styles.moduleIcon}>{module.icon}</div>
                                    <div className={styles.durationBadge}>{module.duration}</div>
                                </div>
                                <div className={styles.moduleBody}>
                                    <h3 className={styles.moduleTitle}>{module.title}</h3>
                                    <p className={styles.moduleDesc}>{module.desc}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            {/* Right Widgets Sidebar */}
            <aside className={styles.widgets}>

                {/* Profile Widget */}
                <div className={styles.widgetCard}>
                    <div className={styles.profileWidget}>
                        <div className={styles.profileAvatar}></div> {/* Image could go here */}
                        <div>
                            <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>Alex Morgan</div>
                            <div className={styles.levelLabel}>Level 12 <span className={styles.levelValue}>Explorer</span></div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.points}>1,240</div>
                        <div className={styles.pointsLabel}>POINTS</div>
                    </div>
                    <div style={{ background: '#F8F9FA', borderRadius: '12px', padding: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, marginBottom: '6px' }}>
                            <span>WEEKLY GOAL</span>
                            <span style={{ color: 'var(--primary)' }}>3/5 Modules</span>
                        </div>
                        <div style={{ height: '6px', background: '#E0E0E0', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{ width: '60%', background: 'var(--primary)', height: '100%' }}></div>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '8px', textAlign: 'center' }}>
                            Complete 2 more to earn a badge!
                        </div>
                    </div>
                </div>

                {/* Activity Streak */}
                <div className={styles.widgetCard}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4 style={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                            🔥 Activity Streak
                        </h4>
                        <span style={{ background: '#EBF8F2', color: '#2B5228', padding: '4px 8px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700 }}>Active</span>
                    </div>

                    <div className={styles.streakDays}>
                        <StreakDay day="M" checked />
                        <StreakDay day="T" checked />
                        <StreakDay day="W" checked />
                        <StreakDay day="T" />
                        <StreakDay day="F" checked />
                        <StreakDay day="S" checked />
                        <StreakDay day="S" isToday />
                    </div>
                    <p style={{ fontSize: '0.8rem', textAlign: 'center', marginTop: '1rem', color: 'var(--text-muted)' }}>
                        You're on a 5-day streak! Keep it up!
                    </p>
                </div>

                {/* Categories/Folders Widget */}
                <div className={styles.widgetCard}>
                    <h4 style={{ fontWeight: 700, marginBottom: '1rem' }}>Categories</h4>
                    <div className={styles.categoryList}>
                        <CategoryItem icon="💼" name="Safety Protocols" count={12} color="#E0F2FE" iconColor="#0284C7" />
                        <CategoryItem icon="🛠️" name="Technical Skills" count={8} color="#FEF3C7" iconColor="#D97706" />
                        <CategoryItem icon="💬" name="Soft Skills" count="New" color="#F3E8FF" iconColor="#9333EA" />
                    </div>
                </div>

            </aside>
        </div>
    );
}

function StreakDay({ day, checked, isToday }: { day: string, checked?: boolean, isToday?: boolean }) {
    return (
        <div className={styles.streakDay}>
            <div className={`${styles.checkCircle} ${checked ? styles.checked : ''}`} style={{ position: 'relative' }}>
                {checked && <Check size={16} strokeWidth={3} />}
                {isToday && <div style={{ position: 'absolute', top: -2, right: -2, width: 6, height: 6, background: 'red', borderRadius: '50%' }}></div>}
            </div>
            <div className={styles.dayLabel}>{day}</div>
        </div>
    );
}

function CategoryItem({ icon, name, count, color, iconColor }: any) {
    return (
        <div className={styles.catItem}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className={styles.catIcon} style={{ background: color, color: iconColor }}>{icon}</div>
                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{name}</span>
            </div>
            <div className={styles.catCount}>{count}</div>
        </div>
    );
}
