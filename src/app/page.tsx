import Link from "next/link";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🛡️</span>
          <span className={styles.logoText}>SurakshaSetu</span>
        </div>
        <Link href="/auth">
          <Button variant="secondary" size="sm">Login</Button>
        </Link>
      </header>

      {/* Main Bento Grid */}
      <div className={styles.bentoGrid}>

        {/* Hero Card - Large dominant card */}
        <div className={styles.heroCard}>
          <div className={styles.heroBlob}></div>
          <div className={styles.heroBlob2}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Be Smart. Be Safe.<br />
              <span className={styles.highlight}>Be Ready!</span>
            </h1>
            <p className={styles.subtitle}>
              The fun way to master disaster preparedness! Join thousands of students becoming Safety Heroes.
            </p>
            <div className={styles.actions}>
              <Link href="/auth">
                <Button size="lg" variant="primary">Start Training 🚀</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Info/Stats Card - Vertical colored card */}
        <div className={styles.infoCard}>
          <div>
            <h3 className={styles.infoTitle}>Safety Level</h3>
            <p className={styles.infoLabel}>Join the squad!</p>
          </div>
          <div className={styles.infoStat}>Pro 🏆</div>
          <p style={{ opacity: 0.8 }}>Schools trust us.</p>
        </div>

        {/* Feature 1: Drills */}
        <div className={`${styles.featureCard} ${styles.cardPink}`}>
          <div className={styles.featureIcon}>🔥</div>
          <h3 className={styles.featureTitle}>Fire Safety</h3>
          <p className={styles.featureDesc}>Virtual drills that feel real.</p>
        </div>

        {/* Feature 2: SOS */}
        <div className={`${styles.featureCard} ${styles.cardBlue}`}>
          <div className={styles.featureIcon}>🚨</div>
          <h3 className={styles.featureTitle}>SOS Alert</h3>
          <p className={styles.featureDesc}>One tap emergency help.</p>
        </div>

        {/* Feature 3: Wide Card */}
        <div className={`${styles.featureCard} ${styles.featureWide}`}>
          <div className={styles.featureIcon}>🎮</div>
          <div>
            <h3 className={styles.featureTitle}>Gamified Learning</h3>
            <p className={styles.featureDesc}>Earn badges, unlock levels, and compete with friends while learning survival skills.</p>
          </div>
        </div>

        {/* Feature 4: VR */}
        <div className={`${styles.featureCard} ${styles.cardPurple}`}>
          <div className={styles.featureIcon}>👓</div>
          <h3 className={styles.featureTitle}>VR Labs</h3>
          <p className={styles.featureDesc}>Immersive 3D training.</p>
        </div>

        {/* Feature 5: Parents */}
        <div className={`${styles.featureCard} ${styles.cardYellow}`}>
          <div className={styles.featureIcon}>👨‍👩‍👧</div>
          <h3 className={styles.featureTitle}>For Parents</h3>
          <p className={styles.featureDesc}>Track progress & safety.</p>
        </div>

        {/* Footer Card */}
        <footer className={styles.footerCard}>
          <div className={styles.footerContent}>
            <div>
              <div className={styles.logo} style={{ marginBottom: '1rem', color: 'white' }}>
                <span className={styles.logoIcon}>🛡️</span>
                <span>SurakshaSetu</span>
              </div>
              <p style={{ opacity: 0.7, maxWidth: '300px' }}>
                Empowering the next generation with the skills to face any disaster with confidence.
              </p>
            </div>

            <div className={styles.footerLinks}>
              <div className={styles.footerColumn}>
                <h4>Platform</h4>
                <ul>
                  <li><Link href="#">Features</Link></li>
                  <li><Link href="#">Schools</Link></li>
                  <li><Link href="#">Pricing</Link></li>
                </ul>
              </div>
              <div className={styles.footerColumn}>
                <h4>Socials</h4>
                <ul>
                  <li><Link href="#">Instagram</Link></li>
                  <li><Link href="#">Twitter</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} SurakshaSetu. Stay safe!</p>
          </div>
        </footer>

      </div>
    </main>
  );
}
