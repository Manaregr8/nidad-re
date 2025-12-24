"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { courses } from "@/data/courses";
import styles from "./Hero3.module.css";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Hero3() {
  const [isMobile, setIsMobile] = useState(false);

  // always only first 6 courses
  const displayedCourses = courses.slice(0, 6);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(max-width:767px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const renderCard = (course) => (
    <article key={course.id} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={course.image}
          alt={course.title}
          className={styles.courseImage}
        />
        <div className={styles.instituteLogo}>
          <img
            src={course.instituteLogo || "/uploads/Nidads-2.png"}
            alt={course.instituteName || "Institute"}
            className={styles.logoImg}
          />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.instituteTag}>
          {course.instituteName || "Institute"}
        </div>

        <h3 className={styles.courseTitle}>{course.title}</h3>

        <div className={styles.metaInfo}>
          <div className={styles.metaItem}>
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path
                d="M12 6v6l4 2"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>{course.duration || "06 Months"}</span>
          </div>

          <div className={styles.metaItem}>
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <rect
                x="2"
                y="3"
                width="20"
                height="18"
                rx="2"
                strokeWidth="2"
              />
              <path
                d="M8 21v-3a2 2 0 012-2h4a2 2 0 012 2v3"
                strokeWidth="2"
              />
              <circle cx="12" cy="10" r="3" strokeWidth="2" />
            </svg>
            <span>{course.mode || "Hybrid"}</span>
          </div>
        </div>

        {course.batchStartDate && (
          <div className={styles.batchInfo}>
            <span className={styles.batchLabel}>Batch Starts on</span>
            <span className={styles.batchDate}>
              {formatDate(course.batchStartDate)}
            </span>
          </div>
        )}

        {course.qualifierTestDate && (
          <div className={styles.batchInfo}>
            <span className={styles.batchLabel}>Qualifier Test Date</span>
            <span className={styles.batchDate}>
              {formatDate(course.qualifierTestDate)}
            </span>
          </div>
        )}

        <Link href={`/course/${course.id}`} className={styles.learnMore}>
          Learn More
          <svg
            className={styles.arrow}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M5 12h14M12 5l7 7-7 7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </article>
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Popular & Trending Courses</h2>
        </div>

        {/* Desktop / tablet: normal grid */}
        {!isMobile && (
          <div className={styles.grid}>
            {displayedCourses.map((course) => renderCard(course))}
          </div>
        )}

        {/* Mobile: infinite swipe carousel */}
        {isMobile && (
          <div className={styles.mobileCarousel}>
            <Swiper
              modules={[Autoplay]}
              loop={true}
              slidesPerView={1.05}
              centeredSlides={true}
              spaceBetween={16}
              autoplay={{
                delay: 3500, // slow speed
                disableOnInteraction: false,
              }}
            >
              {displayedCourses.map((course) => (
                <SwiperSlide key={course.id}>
                  {renderCard(course)}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Load More button removed */}

        <div className={styles.ctaWrapper}>
          <Link href="/course" className={styles.ctaBtn}>
            Explore All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}

































































































// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import Link from 'next/link';
// import { courses } from '@/data/courses';
// import styles from './Hero3.module.css';

// export default function Hero3() {
//   const trackRef = useRef(null);
//   const wrapRef = useRef(null);
//   const [current, setCurrent] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   // Use real course data
//   // Only show first 5 courses with 12 Months duration
//   const slides = courses
//     .map((course) => ({
//       id: course.id,
//       title: course.title,
//       desc: course.description,
//       bg: course.image,
//       thumb: course.image,
//       detailUrl: `/course/${course.id}`
//     }))
//     .slice(0, 5);

//   useEffect(() => {
//     const checkMobile = () =>
//       setIsMobile(window.matchMedia('(max-width:767px)').matches);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   useEffect(() => {
//     const handleKeydown = (e) => {
//       if (['ArrowRight', 'ArrowDown'].includes(e.key)) go(1);
//       if (['ArrowLeft', 'ArrowUp'].includes(e.key)) go(-1);
//     };
//     window.addEventListener('keydown', handleKeydown);
//     return () => window.removeEventListener('keydown', handleKeydown);
//   }, [current]);

//   useEffect(() => {
//     center(current);
//   }, [current, isMobile]);

//   const center = (i) => {
//     if (!wrapRef.current || !trackRef.current) return;
//     const cards = trackRef.current.children;
//     const card = cards[i];
//     if (!card) return;

//     const axis = isMobile ? 'top' : 'left';
//     const size = isMobile ? 'clientHeight' : 'clientWidth';
//     const start = isMobile ? card.offsetTop : card.offsetLeft;

//     wrapRef.current.scrollTo({
//       [axis]: start - (wrapRef.current[size] / 2 - card[size] / 2),
//       behavior: 'smooth'
//     });
//   };

//   const activate = (i) => {
//     if (i === current || i < 0 || i >= slides.length) return;
//     setCurrent(i);
//     setTimeout(() => center(i), 50);
//   };

//   const go = (step) => {
//     const newIndex = Math.min(
//       Math.max(current + step, 0),
//       slides.length - 1
//     );
//     activate(newIndex);
//   };

//   const handleTouchStart = useRef({ x: 0, y: 0 });

//   const onTouchStart = (e) => {
//     handleTouchStart.current = {
//       x: e.touches[0].clientX,
//       y: e.touches[0].clientY
//     };
//   };

//   const onTouchEnd = (e) => {
//     const dx = e.changedTouches[0].clientX - handleTouchStart.current.x;
//     const dy = e.changedTouches[0].clientY - handleTouchStart.current.y;
//     if (isMobile ? Math.abs(dy) > 60 : Math.abs(dx) > 60) {
//       go((isMobile ? dy : dx) > 0 ? -1 : 1);
//     }
//   };

//   return (
//     <section className={styles.section}>
//       <div className={styles.head}>
//         <h2>Top Courses That Shape Your Future</h2>

//         <div className={styles.controls}>
//           <button
//             className={styles.navBtn}
//             onClick={() => go(-1)}
//             disabled={current === 0}
//             aria-label="Previous"
//           >
//             ‹
//           </button>
//           <button
//             className={styles.navBtn}
//             onClick={() => go(1)}
//             disabled={current === slides.length - 1}
//             aria-label="Next"
//           >
//             ›
//           </button>
//         </div>
//       </div>

//       <div className={styles.slider} ref={wrapRef}>
//         <div
//           className={styles.track}
//           ref={trackRef}
//           onTouchStart={onTouchStart}
//           onTouchEnd={onTouchEnd}
//         >
//           {slides.map((slide, index) => (
//             <article
//               key={slide.id}
//               className={styles.projectCard}
//               data-active={index === current ? 'true' : undefined}
//               onMouseEnter={() => {
//                 if (window.matchMedia('(hover:hover)').matches) {
//                   activate(index);
//                 }
//               }}
//               onClick={() => activate(index)}
//             >
//               <img
//                 className={styles.projectCardBg}
//                 src={slide.bg}
//                 alt=""
//               />
//               <div className={styles.projectCardContent}>
//                 <img
//                   className={styles.projectCardThumb}
//                   src={slide.thumb}
//                   alt={slide.title}
//                 />
//                 <div>
//                   <h3 className={styles.projectCardTitle}>
//                     {slide.title}
//                   </h3>
//                   <p className={styles.projectCardDesc}>{slide.desc}</p>
//                   <Link href={slide.detailUrl} className={styles.projectCardBtn}>
//                     Details
//                   </Link>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>

//       {!isMobile && (
//         <div className={styles.dots}>
//           {slides.map((_, index) => (
//             <span
//               key={index}
//               className={`${styles.dot} ${
//                 index === current ? styles.active : ''
//               }`}
//               onClick={() => activate(index)}
//             />
//           ))}
//         </div>
//       )}

//       {/* CTA at end of section */}
//        <div className={styles.ctaWrapper}>
//   <Link href="/course" className={styles.ctaBtn}>
//     Explore all courses
//   </Link>
// </div>

//     </section>
//   );
// }
