'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ImgSlider.module.css';

export default function ImgSlider() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Community images - replace with your actual image paths
  const images = [
    '/uploads/center/6.webp',
    '/uploads/center/IMG_4081.webp',
    '/uploads/center/IMG_4078.webp',
    '/uploads/center/IMG_4076.webp',
    '/uploads/center/IMG_4072.webp',
    '/uploads/center/IMG_4071.webp',
    '/uploads/center/IMG_4066.webp',
    '/uploads/center/7.webp',
  ];

  // Duplicate images for infinite loop effect
  const allImages = [...images, ...images, ...images];

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let animationId;
    let scrollSpeed = 1;

    const autoScroll = () => {
      if (!isDragging && slider) {
        slider.scrollLeft += scrollSpeed;

        // Reset scroll position for infinite loop
        const maxScroll = slider.scrollWidth / 3;
        if (slider.scrollLeft >= maxScroll) {
          slider.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isDragging]);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    scrollRef.current.style.cursor = 'grab';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    scrollRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Be A Part Of Our Thriving Community</h2>
        
        <div
          ref={scrollRef}
          className={styles.slider}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          <div className={styles.track}>
            {allImages.map((image, index) => (
              <div key={index} className={styles.slide}>
                <img
                  src={image}
                  alt={`Community ${(index % images.length) + 1}`}
                  className={styles.image}
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}