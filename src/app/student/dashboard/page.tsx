"use client";
import Card from "@/components/ui/Card";
import styles from "./student.module.css";
import { Play, TrendingUp, Clock, Star, Trophy, Target } from "lucide-react";
import Link from "next/link";

export default function StudentDashboard() {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1 className={styles.greeting}>Hello, <span className={styles.name}>Alex!</span> 👋</h1>
                    <p className={styles.subtext}>Ready to learn something new today?</p>
                </div>
                <div className={styles.streak}>
                    <span className={styles.streakIcon}>🔥</span>
                    <span>12 Day Streak!</span>
                </div>
            </header>

            <div className={styles.bentoGrid}>
                {/* Main Progress Card */}
                <Card className={`${styles.card} ${styles.progressCard}`}>
                    <div className={styles.progressContent}>
                        <div>
                            <h2 className={styles.cardTitle}>Daily Progress</h2>
                            <div className={styles.stats}>
                                <div className={styles.statItem}>
                                    <Trophy size={20} className={styles.iconYellow} />
                                    <span>5 Certificates</span>
                                </div>
                                <div className={styles.statItem}>
                                    <Target size={20} className={styles.iconBlue} />
                                    <span>12 Courses</span>
                                </div>
                            </div>
                            <div className={styles.track}>
                                <div className={styles.trackLabel}>
                                    <span>Learnings today</span>
                                    <span>58% / 40min</span>
                                </div>
                                <div className={styles.progressBar}>
                                    <div className={styles.progressFill} style={{ width: '58%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.mascot}>
                            <span style={{ fontSize: '5rem' }}>🤖</span>
                        </div>
                    </div>
                </Card>

                {/* Quick Lesson */}
                <Card className={`${styles.card} ${styles.lessonCard}`} title="Continue Learning">
                    <div className={styles.lessonInfo}>
                        <div className={styles.lessonIcon}>🧬</div>
                        <div>
                            <h4 className={styles.lessonTitle}>Biology Basics</h4>
                            <p className={styles.lessonSub}>Chapter 3: Cells</p>
                        </div>
                        <button className={styles.playBtn}>
                            <Play size={20} fill="currentColor" />
                        </button>
                    </div>
                </Card>

                {/* Schedule */}
                <Card className={`${styles.card} ${styles.scheduleCard}`} title="My Schedule">
                    <div className={styles.scheduleList}>
                        <div className={styles.scheduleItem}>
                            <div className={`${styles.dot} ${styles.dotGreen}`}></div>
                            <div className={styles.time}>10:00 AM</div>
                            <div className={styles.subject}>Math Class</div>
                        </div>
                        <div className={styles.scheduleItem}>
                            <div className={`${styles.dot} ${styles.dotPink}`}></div>
                            <div className={styles.time}>01:00 PM</div>
                            <div className={styles.subject}>Science Lab</div>
                        </div>
                        <div className={styles.scheduleItem}>
                            <div className={`${styles.dot} ${styles.dotBlue}`}></div>
                            <div className={styles.time}>03:00 PM</div>
                            <div className={styles.subject}>Art Workshop</div>
                        </div>
                    </div>
                </Card>

                {/* Fun Zone Teaser */}
                <Link href="/dashboard/student/fun-zone" className={`${styles.card} ${styles.funCard}`}>
                    <div className={styles.funContent}>
                        <h3>Fun Zone</h3>
                        <p>Play & Learn</p>
                        <GamepadIcon />
                    </div>
                </Link>

                {/* VR Labs Teaser */}
                <Link href="/dashboard/student/vr-labs" className={`${styles.card} ${styles.vrCard}`}>
                    <div className={styles.vrContent}>
                        <h3>VR Labs</h3>
                        <p>Explore 3D Worlds</p>
                        <div className={styles.vrIcon}>🥽</div>
                    </div>
                </Link>
            </div>
        </main>
    );
}

function GamepadIcon() {
    return <div style={{ fontSize: '2.5rem', marginTop: 'auto' }}>🎮</div>
}
