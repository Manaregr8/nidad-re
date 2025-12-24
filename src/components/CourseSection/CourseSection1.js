"use client";
import React, { useEffect, useState } from "react";
import styles from "./CourseSection1.module.css";

const techIcons = [
  { name: "Python", color: "#3b82f6", type: "python" },
  { name: "TensorFlow", color: "#ff6f00", type: "tf" },
  { name: "Pandas", color: "#e91e63", type: "pandas" },
  { name: "SQL", color: "#00897b", type: "sql" },
  { name: "PyTorch", color: "#ee4c2c", type: "pytorch" },
  { name: "Jupyter", color: "#f37626", type: "jupyter" },
];

const renderTechIconSvg = (type, color) => {
  switch (type) {
    case "python":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="8" height="8" rx="2" ry="2" fill={color} />
          <rect x="13" y="13" width="8" height="8" rx="2" ry="2" fill={color} />
          <circle cx="8" cy="7" r="1" fill="#ffffff" />
          <circle cx="16" cy="17" r="1" fill="#ffffff" />
        </svg>
      );
    case "tf":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 5h8v3H9v11H6V8H4z" fill={color} />
          <path
            d="M12 5h8v3h-3v11h-3V8h-2z"
            fill={color}
            opacity="0.8"
          />
        </svg>
      );
    case "pandas":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="6" y="3" width="3" height="18" rx="1.5" fill={color} />
          <rect x="15" y="3" width="3" height="18" rx="1.5" fill={color} />
          <circle cx="8" cy="6" r="1.2" fill="#ffffff" />
          <circle cx="17" cy="10" r="1.2" fill="#ffffff" />
        </svg>
      );
    case "sql":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
          <ellipse cx="12" cy="5" rx="7" ry="3" fill={color} />
          <path
            d="M5 5v9c0 1.7 3.1 3 7 3s7-1.3 7-3V5"
            fill="none"
            stroke={color}
            strokeWidth="1.5"
          />
          <path
            d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3"
            fill="none"
            stroke={color}
            strokeWidth="1.5"
          />
        </svg>
      );
    case "pytorch":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 4l2.5 2.5a6 6 0 11-4.24 1.76"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="4" r="1.4" fill={color} />
        </svg>
      );
    case "jupyter":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
          <ellipse cx="12" cy="12" rx="7" ry="4" fill={color} />
          <path
            d="M6 7c1.5-1.5 3.7-2.5 6-2.5s4.5 1 6 2.5"
            fill="none"
            stroke={color}
            strokeWidth="1.4"
          />
          <path
            d="M6 17c1.5 1.5 3.7 2.5 6 2.5s4.5-1 6-2.5"
            fill="none"
            stroke={color}
            strokeWidth="1.4"
          />
          <circle cx="7" cy="5" r="1" fill={color} />
          <circle cx="17" cy="19" r="1" fill={color} />
        </svg>
      );
    default:
      return null;
  }
};

const CourseSection1 = () => {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const points = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
    setDataPoints(points);
  }, []);

  return (
    <section className={styles.introSection}>
      {/* Animated Background Elements */}
      {/* Removed floating graphs and background for a cleaner, responsive layout */}

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.badge}>
              <span className={styles.badgePulse}>●</span>
              Welcome to NIDAD
            </div>
            <h1 className={styles.title}>
              Transform Your Future with
              <span className={styles.highlight}> Data Science &amp; AI</span>
            </h1>
            <p className={styles.description}>
              At NIDAD, we empower professionals and aspiring data scientists with cutting-edge
              courses in Data Science, Artificial Intelligence, and Analytics. Our comprehensive
              programs are designed to make you industry-ready.
            </p>

            {/* Enhanced Stats with Icons */}
          <div className={styles.stats}>
  {/* Students Trained */}
  <div className={styles.statItem}>
    <div className={styles.statIcon}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 18v-1c0-2.2 3.6-4 8-4s8 1.8 8 4v1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    </div>
    <h3>10000+</h3>
    <p>Students Trained</p>
  </div>

  {/* Placement Rate */}
  <div className={styles.statItem}>
    <div className={styles.statIcon}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 16l4-4 4 3 6-7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 20H4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
    <h3>95%</h3>
    <p>Placement Rate</p>
  </div>

  {/* Industry Partners */}
  <div className={styles.statItem}>
    <div className={styles.statIcon}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path
          d="M8 12l2 2 6-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    </div>
    <h3>50+</h3>
    <p>Industry Partners</p>
  </div>
</div>


            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>
                <span>Explore Courses</span>
                <span className={styles.btnArrow}>→</span>
              </button>
              <button className={styles.secondaryBtn}>
                <span>Download Brochure</span>
              </button>
            </div>
          </div>

          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <img
                src="/uploads/Shagun4-removebg-preview (1).png"
                alt="Expert Instructor"
                className={styles.teacherImage}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.instructorInfo}>
                  <h4>miss. Shagun</h4>
                  <p>Lead Instructor, Data Science</p>
                  <div className={styles.credentials}>
                    <div className={styles.credentials}>

  <span className={styles.credentialItem}>
    <svg
      className={styles.credentialIcon}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="7"
        y="6"
        width="10"
        height="4"
        rx="1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="4"
        y="9"
        width="16"
        height="11"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M10 13h4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
    15+ Years Experience
  </span>
</div>

                  </div>
                </div>
              </div>

              {/* Glowing Ring Effect */}
              <div className={styles.glowRing}></div>
            </div>

            {/* Floating Tech Icons - Right Side (with SVGs) */}
            <div className={styles.floatingIconsRight}>
              {techIcons.map((tech, index) => (
                <div
                  key={tech.name}
                  className={styles.floatingTechIcon}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <span className={styles.techIconSymbol}>
                    {renderTechIconSvg(tech.type, tech.color)}
                  </span>
                  <span className={styles.techIconName} style={{ color: tech.color }}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection1;
