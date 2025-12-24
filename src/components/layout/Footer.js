import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.innerGlow} />

      <div className={styles.topRow}>
        {/* Brand + tagline + social */}
        <div className={styles.brandBlock}>
          <div className={styles.brandLogoRow}>
            <img
              src="/uploads/Nidads-2.png"
              alt="Nidad Academy"
              className={styles.brandLogoImg}
            />
            <div>
              <h3 className={styles.brandName}>Nidad Institute</h3>
              <p className={styles.brandTagline}>
                Operate smarter. Learn job‑ready skills.
              </p>
            </div>
          </div>

          <p className={styles.brandDescription}>
            Nidad Institute empowers learners with practical, industry-relevant skills for the modern workplace. Join our community and transform your career journey.
          </p>
          <div className={styles.socialRow}>
            <a href="#" aria-label="Twitter" className={styles.socialIcon}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp" className={styles.socialIcon}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12.04 2.01C6.54 2.01 2.09 6.45 2.09 11.94c0 2.09.61 4.02 1.77 5.71L2 22l4.5-1.79a10.01 10.01 0 005.54 1.63h.01c5.5 0 9.95-4.44 9.95-9.93 0-2.66-1.04-5.16-2.93-7.04A9.91 9.91 0 0012.04 2zm0 1.8c2.2 0 4.26.86 5.81 2.4a8.03 8.03 0 012.36 5.73c0 4.46-3.64 8.09-8.1 8.09-1.4 0-2.77-.36-3.98-1.06l-.28-.16-2.67 1.06.57-2.83-.18-.29a7.98 7.98 0 01-1.24-4.3c0-4.45 3.63-8.09 8.11-8.09zm-3.1 3.27c-.16 0-.41.06-.63.3-.22.24-.83.81-.83 1.98 0 1.16.86 2.28.98 2.44.12.16 1.63 2.6 4.01 3.54 1.98.78 2.38.7 2.81.66.43-.04 1.39-.57 1.59-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28-.24-.12-1.39-.68-1.6-.75-.21-.08-.36-.12-.51.12-.15.24-.59.75-.72.9-.13.16-.27.18-.5.06-.24-.12-1.01-.37-1.93-1.18-.71-.63-1.19-1.4-1.33-1.64-.14-.24-.01-.36.11-.48.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.51-1.23-.7-1.68-.18-.44-.37-.38-.53-.39z" />
              </svg>
            </a>
            <a href="#" aria-label="Website" className={styles.socialIcon}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.023a15.342 15.342 0 00-1.25-5.191A8.027 8.027 0 0119.931 11zM12 4c.89 0 2.275 1.657 2.933 5H9.067C9.725 5.657 11.11 4 12 4zM8.342 5.809A15.342 15.342 0 007.092 11H5.069a8.027 8.027 0 013.273-5.191zM4.069 13h2.023a15.342 15.342 0 001.25 5.191A8.027 8.027 0 014.069 13zM12 20c-.89 0-2.275-1.657-2.933-5h5.866C14.275 18.343 12.89 20 12 20zm3.658-1.809A15.342 15.342 0 0016.908 13h2.023a8.027 8.027 0 01-3.273 5.191z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className={styles.linksBlock}>
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Product</h4>
            <div className={styles.columnUnderline} />
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}>Why Nidad</a></li>
              <li><a href="#" className={styles.link}>Core Programs</a></li>
              <li><a href="#" className={styles.link}>FAQ</a></li>
              <li><a href="#" className={styles.link}>Comparison</a></li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Community</h4>
            <div className={styles.columnUnderline} />
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}>Twitter (X)</a></li>
              <li><a href="#" className={styles.link}>Telegram</a></li>
              <li><a href="#" className={styles.link}>YouTube</a></li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Legal</h4>
            <div className={styles.columnUnderline} />
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}>Privacy Policy</a></li>
              <li><a href="#" className={styles.link}>Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Separator line */}
      <div className={styles.separator} />

      {/* Bottom bar */}
      <div className={styles.bottomRow}>
        <span className={styles.bottomText}>
          © {new Date().getFullYear()} Nidad Institute. All rights reserved.
        </span>
        <div className={styles.bottomRight}>
          <span className={styles.bottomText}>Made with zero doubt</span>
          <span className={styles.statusDot} />
          <span className={styles.statusLabel}>Hybrid</span>
        </div>
      </div>
    </footer>
  );
}
