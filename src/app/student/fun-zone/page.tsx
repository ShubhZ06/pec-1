"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import styles from "./fun-zone.module.css";
import Image from "next/image";
import { X } from "lucide-react";

const COMICS = [
    { title: "The Shaking Ground", image: "/comic book/earthquake.jpeg", displayTitle: "Earthquake Safety", color: "#FFD166", icon: "🏚️" },
    { title: "Fire Brigade Hero", image: "/comic book/fire.jpeg", displayTitle: "Fire Safety", color: "#EF476F", icon: "🚒" },
    { title: "Rising Waters", image: "/comic book/flood.jpeg", displayTitle: "Flood Response", color: "#118AB2", icon: "🌊" },
    { title: "Storm Watch", image: "/comic book/lightning.jpeg", displayTitle: "Lightning Safety", color: "#073B4C", text: "white", icon: "⚡" },
];

export default function FunZonePage() {
    const [selectedComic, setSelectedComic] = useState<any>(null);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Fun Zone 🎮</h1>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                    Learn while having fun! Read comics or play safety games.
                </p>
            </header>

            {/* Section 1: Comic Adventures */}
            <section className={styles.section}>
                <div className={styles.sectionTitle}>
                    <span>📚</span> Comic Adventures
                </div>
                <div className={styles.comicGrid}>
                    {COMICS.map((comic, index) => (
                        <div
                            key={index}
                            className={styles.comicCard}
                            onClick={() => setSelectedComic(comic)}
                            style={{ background: comic.color, color: comic.text || 'var(--text-main)' }}
                        >
                            <div className={styles.comicCardContent}>
                                <div className={styles.comicIcon}>{comic.icon}</div>
                                <div className={styles.comicTitle}>{comic.displayTitle}</div>
                                <div className={styles.comicMeta} style={{ opacity: 0.8 }}>{comic.title}</div>
                                <div className={styles.tapToRead}>Tap to Read</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 2: Games & Puzzles */}
            <section className={styles.section}>
                <div className={styles.sectionTitle}>
                    <span>🕹️</span> Games & Puzzles
                </div>
                <div className={styles.gamesGrid}>
                    <Card className={styles.gameCard} style={{ background: 'linear-gradient(135deg, #FF754C 0%, #FF9F82 100%)' }}>
                        <div className={styles.gameContent}>
                            <div className={styles.gameIcon}>🧩</div>
                            <h2 className={styles.gameTitle}>Puzzle Master</h2>
                            <p className={styles.gameDesc}>Solve tricky safety puzzles!</p>
                            <button style={{
                                marginTop: '1rem',
                                padding: '8px 16px',
                                background: 'white',
                                color: '#FF754C',
                                border: 'none',
                                borderRadius: '12px',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}>Play Now</button>
                        </div>
                    </Card>
                    <Card className={styles.gameCard} style={{ background: 'linear-gradient(135deg, #6C5DD3 0%, #8B80F8 100%)' }}>
                        <div className={styles.gameContent}>
                            <div className={styles.gameIcon}>🚀</div>
                            <h2 className={styles.gameTitle}>Space Dash</h2>
                            <p className={styles.gameDesc}>Race through the stars safely!</p>
                            <button style={{
                                marginTop: '1rem',
                                padding: '8px 16px',
                                background: 'white',
                                color: '#6C5DD3',
                                border: 'none',
                                borderRadius: '12px',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}>Play Now</button>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Comic Reader Modal */}
            {selectedComic && (
                <div className={styles.modalOverlay} onClick={() => setSelectedComic(null)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setSelectedComic(null)}>
                            <X size={24} />
                        </button>
                        <div className={styles.modalBody}>
                            <div className={styles.modalImageWrapper}>
                                <Image
                                    src={selectedComic.image}
                                    alt={selectedComic.title}
                                    fill
                                    className={styles.modalImage}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className={styles.modalInfo}>
                                <h2>{selectedComic.displayTitle}</h2>
                                <p>{selectedComic.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
