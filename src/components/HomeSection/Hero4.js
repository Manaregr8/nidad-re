'use client';
import { useState, useEffect } from 'react';
import styles from './Hero4.module.css';

export default function Hero4() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount - FIXED: Changed from useState to useEffect
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const processes = [
    {
      id: 1,
      title: 'Python Programming Fundamentals',
      image: '/uploads/center/6.webp',
      size: ''
    },
    {
      id: 2,
      // title: 'Data Analysis with Pandas & NumPy',
      image: '/uploads/center/IMG_4078.webp',
      size: 'large'
    },
    {
      id: 3,
      title: 'Statistical Analysis & Probability',
      image: '/uploads/center/IMG_4072.webp',
      size: 'medium'
    },
    {
      id: 4,
      title: 'Machine Learning Algorithms',
      image: '/uploads/center/IMG_4071.webp',
      size: 'large'
    },
    {
      id: 5,
      title: 'Data Visualization with Matplotlib & Seaborn',
      image: '/uploads/center/IMG_4081.webp',
      size: 'medium'
    },
    {
      id: 6,
      title: 'Computer Vision & Image Recognition',
      image: '/uploads/center/6.webp',
      size: ''
    },
    
  ];

  const displayedProcesses = (isMobile && !showAll) ? processes.slice(0, 3) : processes;

  return (
    <section className={styles.section}>
      <h1 className={styles.mainTitle}>
        Corporate-Style <span className={styles.personaText}>Learning Experience</span>
      </h1>
      
      <p className={styles.description}>
        Our training replicates a real professional analytics environment, not a traditional classroom. You’ll work in advanced labs using industry-standard tools like Python, R, SQL, and leading BI platforms on high-end systems. Each module is designed as a live business project, following agile workflows with clear goals, timelines, and continuous mentor feedback. Through real-world case studies such as sales forecasting, customer churn, and financial analysis, you gain hands-on, job-ready experience. Dedicated one-on-one mentors guide you throughout, providing support similar to an experienced industry team lead.
      </p>

      <div className={styles.grid}>
        {displayedProcesses.map((process) => (
          <div
            key={process.id}
            className={`${styles.item} ${process.size ? styles[`item--${process.size}`] : ''}`}
            style={{ backgroundImage: `url(${process.image})` }}
          >
            <div className={styles.itemDetails}>
              {process.title}
            </div>
          </div>
        ))}
      </div>

      {isMobile && !showAll && processes.length > 3 && (
        <button 
          className={styles.seeMoreBtn}
          onClick={() => setShowAll(true)}
        >
          See More
        </button>
      )}
    </section>
  );
}