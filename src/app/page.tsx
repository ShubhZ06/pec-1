import Link from "next/link";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🎓</span>
          <span className={styles.logoText}>KidzLearn</span>
        </div>
        <Link href="/auth">
          <Button variant="secondary" size="sm">Login</Button>
        </Link>
      </header>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Learning is now <br /> <span className={styles.highlight}>Super Fun!</span></h1>
          <p className={styles.subtitle}>
            Explore VR labs, play games, and master new skills.
            Join thousands of happy students today!
          </p>
          <div className={styles.actions}>
            <Link href="/auth">
              <Button size="lg" variant="primary">Get Started</Button>
            </Link>
          </div>
        </div>

        <div className={styles.heroImage}>
          {/* Placeholder for fun illustration */}
          <div className={styles.blob}>
            <span style={{ fontSize: '5rem' }}>🚀</span>
          </div>
          <div className={`${styles.blob} ${styles.blob2}`}>
            <span style={{ fontSize: '5rem' }}>🎨</span>
          </div>
        </div>
      </div>
    </main>
  );
}
