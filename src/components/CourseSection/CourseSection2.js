"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./CourseSection2.module.css";
import { courses } from "@/data/courses";

const CourseSection2 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState([]);
  const [selectedDuration, setSelectedDuration] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [activeTab, setActiveTab] = useState("popular");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const sidebarSearchRef = useRef(null);

  const filteredCourses = useMemo(() => {
    let filtered = [...courses];
    const q = searchQuery.toLowerCase();

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter((course) =>
        course.title.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.topics.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Level filter
    if (selectedLevel.length > 0) {
      filtered = filtered.filter((course) =>
        selectedLevel.includes(course.level)
      );
    }

    // Duration filter
    if (selectedDuration.length > 0) {
      filtered = filtered.filter((course) =>
        selectedDuration.includes(course.duration)
      );
    }

    // Tab filter
    if (activeTab !== "popular") {
      filtered = filtered.filter((course) => course.level === activeTab);
    }

    // Sort by duration: 12, 6, 3 months
    const durationOrder = { '12 months': 1, '6 months': 2, '3 months': 3 };
    filtered.sort((a, b) => {
      const aOrder = durationOrder[a.duration?.toLowerCase()] || 99;
      const bOrder = durationOrder[b.duration?.toLowerCase()] || 99;
      if (aOrder !== bOrder) return aOrder - bOrder;
      // fallback to newest
      return b.id - a.id;
    });

    // If sortBy is rating, sort by rating within duration group
    if (sortBy === "rating") {
      filtered.sort((a, b) => {
        const aOrder = durationOrder[a.duration?.toLowerCase()] || 99;
        const bOrder = durationOrder[b.duration?.toLowerCase()] || 99;
        if (aOrder !== bOrder) return aOrder - bOrder;
        return b.rating - a.rating;
      });
    }

    return filtered;
  }, [searchQuery, selectedLevel, selectedDuration, selectedPrice, sortBy, activeTab]);

  const handleLevelToggle = (level) => {
    setSelectedLevel((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const handleDurationToggle = (dur) => {
    setSelectedDuration((prev) =>
      prev.includes(dur) ? prev.filter((d) => d !== dur) : [...prev, dur]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLevel([]);
    setSelectedDuration([]);
    setSelectedPrice("all");
    setSortBy("newest");
    setActiveTab("popular");
    if (sidebarSearchRef.current) {
      sidebarSearchRef.current.value = "";
    }
  };

  const hasActiveFilters =
    searchQuery ||
    selectedLevel.length > 0 ||
    selectedDuration.length > 0 ||
    selectedPrice !== "all" ||
    activeTab !== "popular";

  return (
    <section className={styles.courseSection}>
      <div className={styles.pageContainer}>
        {/* Sidebar - Desktop */}
        <aside className={`${styles.sidebar} ${isMobileFilterOpen ? styles.sidebarOpen : ""}`}>
          <div className={styles.sidebarHeader}>
            <button 
              className={styles.closeSidebar}
              onClick={() => setIsMobileFilterOpen(false)}
              aria-label="Close filters"
            >
              ✕
            </button>
          </div>

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Search</h3>
            <div className={styles.sidebarSearchWrapper}>
              <input
                ref={sidebarSearchRef}
                type="text"
                placeholder="Search courses"
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.sidebarSearchInput}
              />
            </div>
          </div>

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Category</h3>
            <label className={styles.toggleLabel}>
              <input
                type="checkbox"
                checked={selectedLevel.includes("diploma")}
                onChange={() => handleLevelToggle("diploma")}
                className={styles.toggleInput}
                aria-label="Toggle Diploma"
              />
              <span className={styles.toggleSlider} />
              <span className={styles.checkboxText}>Diploma</span>
            </label>
            <label className={styles.toggleLabel}>
              <input
                type="checkbox"
                checked={selectedLevel.includes("advanced")}
                onChange={() => handleLevelToggle("advanced")}
                className={styles.toggleInput}
                aria-label="Toggle Advanced"
              />
              <span className={styles.toggleSlider} />
              <span className={styles.checkboxText}>Advanced</span>
            </label>
            <label className={styles.toggleLabel}>
              <input
                type="checkbox"
                checked={selectedLevel.includes("certificate")}
                onChange={() => handleLevelToggle("certificate")}
                className={styles.toggleInput}
                aria-label="Toggle Certification"
              />
              <span className={styles.toggleSlider} />
              <span className={styles.checkboxText}>Certification</span>
            </label>
          </div>

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Duration</h3>
            <label className={styles.toggleLabel}>
              <input
                type="checkbox"
                checked={selectedDuration.includes("3 months")}
                onChange={() => handleDurationToggle("3 months")}
                className={styles.toggleInput}
                aria-label="Toggle 3 months"
              />
              <span className={styles.toggleSlider} />
              <span className={styles.checkboxText}>3 months</span>
            </label>
            {/* <label className={styles.toggleLabel}>
              <input
                type="checkbox"
                checked={selectedDuration.includes("3-4 months")}
                onChange={() => handleDurationToggle("3-4 months")}
                className={styles.toggleInput}
                aria-label="Toggle 3-4 months"
              />
              <span className={styles.toggleSlider} />
              <span className={styles.checkboxText}>3-4 months</span>
            </label> */}
            <label className={styles.toggleLabel}>
              <input
                type="checkbox"
                checked={selectedDuration.includes("6 months")}
                onChange={() => handleDurationToggle("6 months")}
                className={styles.toggleInput}
                aria-label="Toggle 6 months"
              />
              <span className={styles.toggleSlider} />
              <span className={styles.checkboxText}>6 months</span>
            </label>
            <label className={styles.toggleLabel}>
              <input
                type="checkbox"
                checked={selectedDuration.includes("12 months")}
                onChange={() => handleDurationToggle("12 months")}
                className={styles.toggleInput}
                aria-label="Toggle 12 months"
              />
              <span className={styles.toggleSlider} />
              <span className={styles.checkboxText}>12 months</span>
            </label>
          </div>

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Price</h3>
            <div className={styles.selectWrapper}>
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className={styles.priceSelect}
              >
                <option value="all">All prices</option>
                <option value="low">Under ₹50,000</option>
                <option value="mid">₹50,000 - ₹1,00,000</option>
                <option value="high">Above ₹1,00,000</option>
              </select>
            </div>
          </div>

          <label className={styles.toggleLabel}>
            <input
              type="checkbox"
              checked={sortBy === "newest"}
              onChange={() => setSortBy(sortBy === "newest" ? "rating" : "newest")}
              className={styles.toggleInput}
              aria-label="Toggle newest first"
            />
            <span className={styles.toggleSlider} />
            <span className={styles.checkboxText}>Newest first</span>
          </label>

          {hasActiveFilters && (
            <button onClick={clearFilters} className={styles.clearFiltersBtn}>
              Clear filters
            </button>
          )}
        </aside>

        {/* Overlay for mobile */}
        {isMobileFilterOpen && (
          <div 
            className={styles.overlay} 
            onClick={() => setIsMobileFilterOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className={styles.mainContent}>
          {/* Header with Filter Button */}
          <div className={styles.contentHeader}>
            <div className={styles.headerTop}>
              <div>
                <h1 className={styles.mainTitle}>AI & Data Science Courses</h1>
                <p className={styles.mainSubtitle}>
                  Explore our curated IT and software programs — from short certifications to full diplomas.
                </p>
              </div>
              <button 
                className={styles.filterButton}
                onClick={() => setIsMobileFilterOpen(true)}
              >
                Filters
              </button>
            </div>

            <div className={styles.mainSearchContainer}>
              <svg className={styles.mainSearchIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4.35-4.35"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Search for a course"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.mainSearchInput}
              />
            </div>
          </div>

          {/* Tabs */}
          <div className={styles.tabsContainer}>
            <button
              className={`${styles.tab} ${activeTab === "popular" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("popular")}
            >
              Popular
            </button>
            <button
              className={`${styles.tab} ${activeTab === "diploma" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("diploma")}
            >
              Diploma
            </button>
            <button
              className={`${styles.tab} ${activeTab === "advanced" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("advanced")}
            >
              Advanced
            </button>
            <button
              className={`${styles.tab} ${activeTab === "certificate" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("certificate")}
            >
              Certification
            </button>
          </div>

          {/* Card Grid (Responsive 3/2/1 columns) */}
          <div className={styles.courseGridStatic}>
            {/* Show diploma courses first, then certificates */}
            {[...filteredCourses.filter(c => c.level === "diploma"), ...filteredCourses.filter(c => c.level !== "diploma")].map((course) => (
              <Link 
                key={course.id} 
                href={`/course/${course.id}`} 
                className={styles.courseCard}
              >
                <div className={styles.courseImage}>
                  <img src={course.image} alt={course.title} />
                  {course.level === "diploma" && (
                    <span className={styles.bestsellerBadge}>BESTSELLER</span>
                  )}
                </div>

                <div className={styles.cardContent}>

                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <p className={styles.instructorName}>NIDADS Academy</p>

                  <div className={styles.courseMetaRow}>
                    <div className={styles.ratingBox}>
                      <span className={styles.ratingStar}>★</span>
                      <span className={styles.ratingValue}>{course.rating}</span>
                    </div>
                    <span className={styles.studentCount}>
                      ({course.students.toLocaleString()})
                    </span>
                    <span className={styles.courseDuration}>{course.duration}</span>
                  </div>

                  {/* Redesigned card bottom row: tag and full-width CTA */}
                  <div className={styles.cardActionsRow}>
                    <span className={styles.cardTag}>{course.level === "diploma" ? "Diploma" : "Certificate"}</span>
                  </div>
                  <button className={styles.cardCtaBtnFull} tabIndex={0} aria-label={`View details for ${course.title}`}>View Details</button>
                </div>
              </Link>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className={styles.noResults}>
              <h3>No courses found</h3>
              <p>Try adjusting your filters or search query.</p>
              <button onClick={clearFilters} className={styles.clearFiltersBtn}>
                Clear all filters
              </button>
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default CourseSection2;