'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const PopupEnquiryForm = dynamic(() => import('../PopupEnquiryForm'), { ssr: false });
import styles from './Hero.module.css';
import Link from 'next/link';


export default function Hero() {
  const [chartData, setChartData] = useState([]);
  const [activeNode, setActiveNode] = useState(0);
  const [floatingPoints, setFloatingPoints] = useState([]);
  const [showConnections, setShowConnections] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Responsive: disable floating points and connections on mobile
    const checkScreen = () => {
      if (typeof window !== 'undefined') {
        setShowConnections(window.matchMedia('(min-width: 769px)').matches);
      }
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);

    const points = Array.from({ length: 20 }, (_, i) => ({
      x: i * 50,
      y: 150 + Math.sin(i * 0.5) * 50 + Math.random() * 30,
    }));
    setChartData(points);

    const floating = Array.from({ length: 15 }, (_, i) => ({
      cx: Math.random() * 1200,
      cy: Math.random() * 800,
      r: Math.random() * 3 + 1,
      fill: i % 2 === 0 ? '#06b6d4' : '#8b5cf6',
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setFloatingPoints(floating);

    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 6);
    }, 2000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkScreen);
    };
  }, []);

  const pathData = chartData
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
    .join(' ');

  const tools = [
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: 'python',
    },
    {
      name: 'TensorFlow',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      color: 'tensorflow',
    },
    {
      name: 'Pandas',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
      color: 'pandas',
    },
    {
      name: 'Scikit-learn',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
      color: 'scikit',
    },
    {
      name: 'PyTorch',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
      color: 'pytorch',
    },
    {
      name: 'SQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      color: 'sql',
    },
  ];

  // duplicated for seamless marquee
  const marqueeTools = [...tools, ...tools];

  const stats = [
    { number: '1000+', label: 'Students' },
    { number: '50+', label: 'Courses' },
    { number: '95%', label: 'Success Rate' },
  ];

  return (
    <section className={styles.hero} aria-label="Data Science Hero Section">
      {/* Background */}
      <div className={styles.backgroundImage} aria-hidden="true" />
      <div className={styles.backgroundOverlay} aria-hidden="true" />

      {/* SVG visualizations */}
      {showConnections && (
        <svg
          className={styles.visualizationSvg}
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Left nodes */}
          <g className={styles.pulseLeft}>
            {[0, 1, 2, 3].map((i) => (
              <g key={`left-${i}`}>
                <circle
                  cx="100"
                  cy={150 + i * 120}
                  r={activeNode === i ? '8' : '6'}
                  fill="#06b6d4"
                  opacity={activeNode === i ? '1' : '0.5'}
                  filter="url(#glow)"
                />
                <circle
                  cx="100"
                  cy={150 + i * 120}
                  r={activeNode === i ? '16' : '12'}
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="1"
                  opacity="0.3"
                />
              </g>
            ))}
          </g>

          {/* Right nodes */}
          <g className={styles.pulseRight}>
            {[0, 1, 2, 3].map((i) => (
              <g key={`right-${i}`}>
                <circle
                  cx="1100"
                  cy={150 + i * 120}
                  r={activeNode === i + 2 ? '8' : '6'}
                  fill="#8b5cf6"
                  opacity={activeNode === i + 2 ? '1' : '0.5'}
                  filter="url(#glow)"
                />
                <circle
                  cx="1100"
                  cy={150 + i * 120}
                  r={activeNode === i + 2 ? '16' : '12'}
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="1"
                  opacity="0.3"
                />
              </g>
            ))}
          </g>

          {/* Connections */}
          {[0, 1, 2, 3].map((i) =>
            [0, 1, 2, 3].map((j) => (
              <line
                key={`line-${i}-${j}`}
                x1="100"
                y1={150 + i * 120}
                x2="1100"
                y2={150 + j * 120}
                stroke="url(#lineGrad)"
                strokeWidth="0.5"
                className={
                  activeNode === i || activeNode === j + 2
                    ? styles.activeLine
                    : styles.inactiveLine
                }
              />
            )),
          )}

          {/* Floating points */}
          {floatingPoints.map((point, i) => (
            <circle
              key={`float-${i}`}
              cx={point.cx}
              cy={point.cy}
              r={point.r}
              fill={point.fill}
              opacity="0.4"
              className={styles.floatingPoint}
              style={{
                animationDuration: `${point.duration}s`,
                animationDelay: `${point.delay}s`,
              }}
            />
          ))}
        </svg>
      )}

      {/* Decorative images */}
      <div className={styles.decorativeImages} aria-hidden="true">
        <img
          src="/uploads/Data Analysis.png"
          alt=""
          className={styles.leftImage}
          role="presentation"
        />
        <img
          src="/uploads/data scinece.png"
          alt=""
          className={styles.rightImage}
          role="presentation"
        />
      </div>

      {/* Main content */}
      <div className={styles.content}>
        <header className={styles.headline}>
          <h1 className={styles.title}>
            <span className={styles.gradient}>Master</span>
            <span className={styles.white}> Data Science</span>
          </h1>
          <h2 className={styles.subtitle}>
            <span className={styles.highlightCyan}>AI</span>,{' '}
            <span className={styles.highlightBlue}>Machine Learning</span>, and{' '}
            <span className={styles.highlightPurple}>Data Analytics</span>
          </h2>
        </header>

        <p className={styles.description}>
          Launch your career with practical Data Analytics & AI training aligned
          to industry needs. Gain job-ready skills in SQL, Python, Power BI,
          Excel and Machine Learning through real-world projects.
          </p>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '1.2rem 0' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '1.2rem', fontSize: 14, fontWeight: 500 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00ff5e', display: 'inline-block', marginRight: 4 }} />
                Online
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff0000', display: 'inline-block', marginRight: 4 }} />
                Offline
              </span>
            </span>
          </div>
        

        <nav className={styles.ctaButtons} aria-label="Primary actions">
          <Link
            href="/course"
            className={styles.buttonPrimary}
            aria-label="Explore Our Courses"
          >
            <span className={styles.buttonTitle}>Explore Our Courses</span>
            <span className={styles.modes}>
              {/* <span className={styles.mode}>
                <span className={`${styles.dot} ${styles.greenDot}`} />
                Online
              </span>
              <span className={styles.mode}>
                <span className={`${styles.dot} ${styles.redDot}`} />
                Offline
              </span> */}
            </span>
          </Link>
          <button
            className={styles.buttonSecondary}
            aria-label="Talk to a Career Expert"
            onClick={() => setShowPopup(true)}
          >
            Talk to a Career Expert
          </button>
          {showPopup && (
            <PopupEnquiryForm open={showPopup} onClose={() => setShowPopup(false)} />
          )}
        </nav>

        {/* Tech Stack – infinite marquee */}
        <section className={styles.techStack} aria-label="Tech Stack">
          <p className={styles.techLabel}>Master These Tools</p>

          <div className={styles.toolsMarquee}>
            <div className={styles.toolsTrack}>
              {marqueeTools.map((tool, i) => (
                <div
                  key={`${tool.name}-${i}`}
                  className={`${styles.toolCard} ${styles[tool.color]} ${styles.toolBox}`}
                >
                  <span className={styles.toolIcon}>
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className={styles.toolImg}
                    />
                  </span>
                  <span className={styles.toolName}>{tool.name}</span>
                </div>
              ))}
            </div>
            <div className={styles.toolsFadeLeft} />
            <div className={styles.toolsFadeRight} />
          </div>
        </section>

        <section className={styles.statsContainer} aria-label="Key Statistics">
          {stats.map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
