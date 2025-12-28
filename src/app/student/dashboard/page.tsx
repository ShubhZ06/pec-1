"use client";
import styles from "./dashboard.module.css";
import { Search, Bell, Settings, Shield, Award, Clock, Flame, Zap, Beaker, Map, Activity, Calendar, AlertTriangle, Rocket } from "lucide-react";

import Image from "next/image";

export default function RobotDashboard() {
    return (
        <div className={styles.container}>

            {/* --- Left Column --- */}
            <div className={styles.leftCol}>

                {/* Stat Cards */}
                {/* Stat Cards */}
                <div className={styles.statsGrid}>
                    <div className={styles.statCard} style={{ background: '#D1FAE5', color: '#065F46' }}> {/* Emerald 100/800 */}
                        <span className={styles.statLabel}>Safety Badges</span>
                        <span className={styles.statValue}>5</span>
                        <div style={{ alignSelf: 'flex-end', opacity: 0.8 }}><Shield size={32} /></div>
                    </div>
                    <div className={styles.statCard} style={{ background: '#FFEDD5', color: '#9A3412' }}> {/* Orange 100/800 */}
                        <span className={styles.statLabel}>Drills Completed</span>
                        <span className={styles.statValue}>12</span>
                        <div style={{ alignSelf: 'flex-end', opacity: 0.8 }}><Award size={32} /></div>
                    </div>
                    <div className={styles.statCard} style={{ background: '#E9D5FF', color: '#6B21A8' }}> {/* Purple 100/800 */}
                        <span className={styles.statLabel}>Training Hours</span>
                        <span className={styles.statValue}>40</span>
                        <div style={{ alignSelf: 'flex-end', opacity: 0.8 }}><Clock size={32} /></div>
                    </div>
                </div>

                {/* Learnings Today */}
                <div className={`${styles.widget} ${styles.learningsWidget}`}>
                    <div className={styles.widgetTitle}>Learnings Today</div>
                    <div className={styles.progressLabel}>
                        <span>Daily Safety Goal</span>
                        <span>3.5/5 Hrs</span>
                    </div>
                    <div className={styles.learningBar}>
                        <div className={styles.learningFill} style={{ width: '70%' }}></div>
                    </div>
                </div>

                {/* Business Analytics List */}
                <div className={styles.courseList}>
                    <h3 className={styles.widgetTitle}>Active Courses</h3>
                    <div className={styles.courseItem}>
                        <CircularProgress value={78} color="#FF754C" />
                        <div>
                            <div style={{ fontWeight: 700 }}>Earthquake Preparedness</div>
                            <div style={{ fontSize: '0.85rem', color: '#808191' }}>24 Lessons • 3 hrs left</div>
                        </div>
                    </div>
                    <div className={styles.courseItem}>
                        <CircularProgress value={45} color="#6C5DD3" />
                        <div>
                            <div style={{ fontWeight: 700 }}>Home Fire Safety</div>
                            <div style={{ fontSize: '0.85rem', color: '#808191' }}>12 Lessons • 5 hrs left</div>
                        </div>
                    </div>
                </div>

            </div>

            {/* --- Center Column --- */}
            <div className={styles.centerCol}>
                {/* Robot Progress Hero */}
                <div className={styles.robotCard}>
                    <div className={styles.robotContent}>
                        <h2 className={styles.robotTitle}>Keep it up, Rohan! <Rocket size={28} style={{ display: 'inline', verticalAlign: 'middle' }} /></h2>
                        <div className={styles.robotTags}>
                            <span className={styles.robotTag}>First Aid</span>
                            <span className={styles.robotTag}>Evacuation</span>
                            <span className={styles.robotTag}>Rescue</span>
                        </div>

                        <div className={styles.bigProgress}>
                            <div style={{ fontSize: '0.9rem', marginBottom: '8px', fontWeight: 700, opacity: 0.8 }}>Weekly Progress</div>
                            <div className={styles.bigProgressVal}>78%</div>
                        </div>
                    </div>

                    {/* Robot Mascot */}
                    <div className={styles.robotMascot}>
                        <Image
                            src="/mascot.png"
                            alt="Mascot"
                            width={220}
                            height={220}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>


                {/* Quiz Widget */}
                <div className={`${styles.widget} ${styles.quizWidget}`}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', opacity: 0.9 }}>
                        <span style={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '1px' }}>QUICK QUIZ</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Activity size={16} /> 00:24</span>
                    </div>
                    <h3 className={styles.quizQuestion}>What is the first step during an earthquake?</h3>
                    <input type="text" placeholder="Type your answer..." className={styles.quizInput} />
                </div>

            </div>

            {/* --- Right Column --- */}
            <div className={styles.rightCol}>

                {/* Calendar Strip */}
                <div className={`${styles.widget} ${styles.calendarStrip}`}>
                    <Day day="M" />
                    <Day day="T" active />
                    <Day day="W" />
                    <Day day="T" />
                    <Day day="F" />
                </div>

                {/* Vertical Colorful Cards */}
                <div className={styles.scheduleCards}>
                    <div className={styles.vCard} style={{ background: '#F87171' }}><Flame size={24} /></div>
                    <div className={styles.vCard} style={{ background: '#FBBF24' }}><Zap size={24} /></div>
                    <div className={styles.vCard} style={{ background: '#34D399' }}><Beaker size={24} /></div>
                    <div className={styles.vCard} style={{ background: '#60A5FA' }}><Map size={24} /></div>
                </div>

                {/* Timeline */}
                <div className={`${styles.widget} ${styles.timeline}`}>
                    <h3 className={styles.widgetTitle}>My Schedule</h3>

                    <div className={styles.timeItem}>
                        <div className={styles.timeSlot}>09:00</div>
                        <div className={styles.timeEvent} style={{ background: '#D1FAE5', color: '#065F46' }}>
                            <div style={{ fontWeight: 700 }}>Fire Drill Simulation</div>
                            <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Evacuation Routes</div>
                        </div>
                    </div>

                    <div className={styles.timeItem}>
                        <div className={styles.timeSlot}>11:30</div>
                        <div className={styles.timeEvent} style={{ background: '#E9D5FF', color: '#6B21A8' }}>
                            <div style={{ fontWeight: 700 }}>First Aid Workshop</div>
                            <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>CPR Basics</div>
                        </div>
                    </div>

                    <div className={styles.timeItem}>
                        <div className={styles.timeSlot}>14:00</div>
                        <div className={styles.timeEvent}>
                            <div style={{ fontWeight: 700 }}>Hazard Spotting</div>
                            <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Interactive Session</div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

function Day({ day, active }: { day: string, active?: boolean }) {
    return (
        <div className={`${styles.calDay} ${active ? styles.active : ''}`}>
            <span>{day}</span>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'currentColor' }}></div>
        </div>
    )
}

function CircularProgress({ value, color }: { value: number, color: string }) {
    const radius = 18;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div className={styles.courseProgress}>
            <svg className={styles.circularChart} viewBox="0 0 40 40">
                <path className={styles.circleBg} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className={styles.circle} strokeDasharray={`${value}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" stroke={color} />
            </svg>
            <span style={{ position: 'absolute', color: color, fontSize: '0.7rem' }}>{value}%</span>
        </div>
    )
}
