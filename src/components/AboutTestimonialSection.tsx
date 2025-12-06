"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import StarsRating from "./StarsRating";

const testimonials = [
  {
    image: "https://framerusercontent.com/images/k1w6CkeYYhZ0xnEJWDY7WKgFY.png?scale-down-to=2048",
    quote: "Pizzata completely redefined my expectations of pizza. Every slice was a perfect balance of freshness, flavor, and artistry. The ambiance was incredible, and service was top-notch!",
    author: "Carl S."
  },
  {
    image: "https://framerusercontent.com/images/5uPh2acbZEkkChFlmOXDwGL0Rhc.jpg",
    quote: "From the classic Margherita to the specialty pies, everything at Pizzata was perfection. The flavors were bold, authentic, and absolutely delicious. The atmosphere was warm and inviting—this place is a must-visit!",
    author: "Sarah L."
  },
  {
    image: "https://framerusercontent.com/images/mtArzpz2k5YFj97p0xiR6vI7QYU.jpg",
    quote: "Pizzata is more than just a restaurant—it's an experience. The pizza was melt-in-your-mouth good, and the Italian-inspired dishes were packed with unique and delicious flavors. Can't wait for my next visit!",
    author: "Dina H."
  }
];

export default function AboutTestimonialSection() {
  // Separate states for mobile and desktop
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLUListElement>(null);
  const desktopScrollRef = useRef<HTMLUListElement>(null);
  
  // Touch/swipe state for desktop
  const [desktopTouchStart, setDesktopTouchStart] = useState(0);
  const [desktopTouchEnd, setDesktopTouchEnd] = useState(0);
  const [desktopMouseStart, setDesktopMouseStart] = useState(0);
  const [desktopMouseEnd, setDesktopMouseEnd] = useState(0);
  const [isDesktopDragging, setIsDesktopDragging] = useState(false);
  const minSwipeDistance = 50;

  // Mobile scroll functions
  const scrollToSlide = (index: number) => {
    if (mobileScrollRef.current) {
      const slideWidth = mobileScrollRef.current.clientWidth;
      mobileScrollRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleMobileScroll = () => {
    if (mobileScrollRef.current) {
      const scrollLeft = mobileScrollRef.current.scrollLeft;
      const slideWidth = mobileScrollRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);
      if (newIndex !== mobileIndex && newIndex >= 0 && newIndex < testimonials.length) {
        setMobileIndex(newIndex);
      }
    }
  };

  // Desktop scroll functions
  const scrollToDesktopSlide = (index: number) => {
    if (desktopScrollRef.current) {
      const slideWidth = desktopScrollRef.current.clientWidth;
      desktopScrollRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleDesktopScroll = () => {
    if (desktopScrollRef.current) {
      const scrollLeft = desktopScrollRef.current.scrollLeft;
      const slideWidth = desktopScrollRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);
      if (newIndex !== desktopIndex && newIndex >= 0 && newIndex < testimonials.length) {
        setDesktopIndex(newIndex);
      }
    }
  };

  // Desktop touch/swipe handlers
  const onDesktopTouchStart = (e: React.TouchEvent) => {
    setDesktopTouchEnd(0);
    setDesktopTouchStart(e.targetTouches[0].clientX);
  };

  const onDesktopTouchMove = (e: React.TouchEvent) => {
    setDesktopTouchEnd(e.targetTouches[0].clientX);
  };

  const onDesktopTouchEnd = () => {
    if (!desktopTouchStart || !desktopTouchEnd) return;
    const distance = desktopTouchStart - desktopTouchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextDesktopSlide();
    } else if (isRightSwipe) {
      prevDesktopSlide();
    }
  };

  // Desktop mouse drag handlers
  const onDesktopMouseDown = (e: React.MouseEvent) => {
    setIsDesktopDragging(true);
    setDesktopMouseStart(e.clientX);
    setDesktopMouseEnd(e.clientX);
  };

  const onDesktopMouseMove = (e: React.MouseEvent) => {
    if (isDesktopDragging) {
      setDesktopMouseEnd(e.clientX);
    }
  };

  const onDesktopMouseUp = () => {
    if (!isDesktopDragging) return;
    setIsDesktopDragging(false);
    
    if (!desktopMouseStart || !desktopMouseEnd) return;
    const distance = desktopMouseStart - desktopMouseEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextDesktopSlide();
    } else if (isRightSwipe) {
      prevDesktopSlide();
    }
    
    // Reset
    setDesktopMouseStart(0);
    setDesktopMouseEnd(0);
  };

  useEffect(() => {
    const mobileCarousel = mobileScrollRef.current;
    if (mobileCarousel) {
      mobileCarousel.addEventListener('scroll', handleMobileScroll);
      handleMobileScroll(); // Initialize
      return () => mobileCarousel.removeEventListener('scroll', handleMobileScroll);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const desktopCarousel = desktopScrollRef.current;
    if (desktopCarousel) {
      desktopCarousel.addEventListener('scroll', handleDesktopScroll);
      handleDesktopScroll(); // Initialize
      return () => desktopCarousel.removeEventListener('scroll', handleDesktopScroll);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Desktop navigation functions
  const nextDesktopSlide = () => {
    const next = (desktopIndex + 1) % testimonials.length;
    setDesktopIndex(next);
    scrollToDesktopSlide(next);
  };

  const prevDesktopSlide = () => {
    const next = (desktopIndex - 1 + testimonials.length) % testimonials.length;
    setDesktopIndex(next);
    scrollToDesktopSlide(next);
  };

  return (
    <section className="w-full flex flex-col items-center gap-8 sm:gap-10 bg-[#0c0a10] pt-12 sm:pt-16 md:pt-20 pb-0 px-0">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 sm:gap-5 max-w-[600px] w-full px-5">
        {/* Stars */}
        <div className="flex justify-center">
          <StarsRating />
        </div>
        
        {/* Title */}
        <p 
          className="text-[#ffedd8] text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[44px] sm:leading-[52px] md:leading-[60px] lg:leading-[68px] tracking-[-0.03em] font-normal text-center font-forum"
          style={{ fontFamily: 'var(--font-forum), sans-serif' }}
        >
          WORDS OF LOVE
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full h-[70vh] sm:h-[75vh] md:h-screen overflow-hidden">
        {/* Mobile: Scroll-snap Carousel - Matching Framer Design */}
        <section
          aria-roledescription="carousel"
          className="relative z-10 md:hidden"
          style={{
            display: 'flex',
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            position: 'relative',
            padding: 0
          }}
        >
          <ul
            ref={mobileScrollRef}
            className="framer--carousel"
            data-show-scrollbar="false"
            aria-atomic="false"
            aria-live="polite"
            style={{
              padding: 0,
              margin: 0,
              listStyle: 'none',
              position: 'relative',
              display: 'flex',
              flex: '1 1 100%',
              width: '100%',
              height: '100%',
              gap: 0,
              alignItems: 'center',
              flexDirection: 'row',
              overflow: 'auto hidden',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              borderRadius: 0
            } as React.CSSProperties}
          >
            {testimonials.map((testimonial, index) => (
              <li
                key={index}
                aria-label={`${index + 1} of ${testimonials.length}`}
                aria-hidden={index !== mobileIndex}
                style={{
                  scrollSnapAlign: 'center',
                  flexShrink: 0,
                  scrollSnapStop: 'always',
                  width: 'calc(100% + 0px)',
                  height: 'calc(100% + 0px)'
                }}
              >
                <div style={{ width: '100%', height: '100%' }}>
                  <div 
                    style={{
                      height: '100%',
                      width: '100%',
                      opacity: 1
                    }}
                    className="relative"
                  >
                    {/* Background Image */}
                    <div 
                      style={{
                        position: 'absolute',
                        borderRadius: 'inherit',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                      }}
                    >
                      <Image
                        src={testimonial.image}
                        alt={`Testimonial ${index + 1}`}
                        fill
                        className="object-cover"
                        quality={90}
                        sizes="390px"
                        style={{
                          display: 'block',
                          width: '100%',
                          height: '100%',
                          borderRadius: 'inherit',
                          objectPosition: 'center center',
                          objectFit: 'cover'
                        }}
                      />
                    </div>

                    {/* Fade Gradient */}
                    <div 
                      style={{
                        background: 'linear-gradient(180deg, rgba(12, 10, 16, 0) 0%, rgb(12, 10, 16) 100%)',
                        opacity: 1,
                        position: 'absolute',
                        inset: 0,
                        zIndex: 0
                      }}
                    />

                    {/* Content */}
                    <div 
                      style={{
                        alignContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        gap: '16px',
                        height: '100%',
                        justifyContent: 'flex-end',
                        overflow: 'hidden',
                        padding: '0 0 40px',
                        position: 'relative',
                        width: '100%',
                        zIndex: 10
                      }}
                    >
                      <div 
                        style={{
                          alignContent: 'center',
                          alignItems: 'center',
                          display: 'flex',
                          flex: 'none',
                          flexDirection: 'column',
                          flexWrap: 'nowrap',
                          gap: '24px',
                          height: 'min-content',
                          justifyContent: 'center',
                          maxWidth: '750px',
                          overflow: 'hidden',
                          padding: '0 20px',
                          position: 'relative',
                          width: '100%'
                        }}
                      >
                        {/* Quote */}
                        <h3 
                          className="text-[#ffedd8] font-normal text-center font-forum"
                          style={{ 
                            fontFamily: 'var(--font-forum), sans-serif',
                            fontSize: '34px',
                            fontWeight: 400,
                            letterSpacing: '0em',
                            lineHeight: '36px',
                            textAlign: 'left',
                            textTransform: 'capitalize',
                            margin: 0,
                            padding: 0,
                            flex: 'none',
                            height: 'auto',
                            position: 'relative',
                            whiteSpace: 'pre-wrap',
                            width: '100%',
                            wordBreak: 'break-word',
                            wordWrap: 'break-word'
                          }}
                        >
                          &quot;{testimonial.quote}&quot;
                        </h3>
                        
                        {/* Author */}
                        <p 
                          className="text-[#ffedd8] font-medium text-center"
                          style={{ 
                            fontFamily: 'var(--font-inter), sans-serif',
                            fontSize: '16px',
                            fontWeight: 500,
                            letterSpacing: '0.01em',
                            lineHeight: '24px',
                            textAlign: 'left',
                            margin: 0,
                            padding: 0,
                            flex: 'none',
                            height: 'auto',
                            position: 'relative',
                            whiteSpace: 'pre-wrap',
                            width: '100%',
                            wordBreak: 'break-word',
                            wordWrap: 'break-word'
                          }}
                        >
                          {testimonial.author}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Carousel Controls - Mobile Only - Hidden on Desktop */}
          <fieldset
            aria-label="Carousel pagination controls"
            className="framer--carousel-controls"
            data-show-mouse-controls="false"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              border: 0,
              padding: '20px',
              margin: 0,
              flexDirection: 'row'
            }}
          >
            {/* Hidden navigation buttons for mobile */}
            <button 
              type="button" 
              aria-label="Previous"
              tabIndex={0}
              style={{ 
                border: 'none',
                display: 'none',
                placeContent: 'center',
                placeItems: 'center',
                overflow: 'hidden',
                background: 'rgba(0, 0, 0, 0.2)',
                margin: 0,
                padding: 0,
                width: '40px',
                height: '40px',
                borderRadius: '40px',
                cursor: 'default',
                opacity: 0,
                pointerEvents: 'none',
                transform: 'none'
              }}
            />

            <button 
              type="button" 
              aria-label="Next"
              tabIndex={0}
              style={{ 
                border: 'none',
                display: 'none',
                placeContent: 'center',
                placeItems: 'center',
                overflow: 'hidden',
                background: 'rgba(0, 0, 0, 0.2)',
                margin: 0,
                padding: 0,
                width: '40px',
                height: '40px',
                borderRadius: '40px',
                cursor: 'pointer',
                opacity: 1,
                pointerEvents: 'auto',
                transform: 'none'
              }}
            />

            {/* Dot Indicators Container - Mobile Only */}
            <div
              className="md:hidden"
              style={{
                display: 'flex',
                placeContent: 'center',
                placeItems: 'center',
                overflow: 'hidden',
                position: 'absolute',
                pointerEvents: 'auto',
                left: '50%',
                top: 'unset',
                transform: 'translateX(-50%)',
                flexDirection: 'row',
                bottom: '10px',
                borderRadius: '50px',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(4px)'
              }}
            >
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Scroll to page ${index + 1}`}
                  type="button"
                  onClick={() => {
                    setMobileIndex(index);
                    scrollToSlide(index);
                  }}
                  style={{
                    border: 'none',
                    display: 'flex',
                    placeContent: 'center',
                    placeItems: 'center',
                    overflow: 'hidden',
                    background: 'transparent',
                    cursor: 'pointer',
                    margin: 0,
                    padding: index === 0 
                      ? '10px 5px 10px 10px'
                      : index === testimonials.length - 1
                      ? '10px 10px 10px 5px'
                      : '10px 5px'
                  }}
                >
                  <div
                    style={{
                      borderRadius: '50%',
                      background: 'rgb(255, 255, 255)',
                      cursor: 'pointer',
                      border: 'none',
                      placeContent: 'center',
                      placeItems: 'center',
                      padding: 0,
                      width: '10px',
                      height: '10px',
                      opacity: index === mobileIndex ? 1 : 0.5
                    }}
                  />
                </button>
              ))}
            </div>
          </fieldset>
        </section>

        {/* Desktop: Scroll-snap Carousel - Matching Framer Design */}
        <section
          aria-roledescription="carousel"
          className="hidden md:flex"
          style={{
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            position: 'relative',
            padding: 0
          }}
        >
          <ul
            ref={desktopScrollRef}
            className="framer--carousel"
            data-show-scrollbar="false"
            aria-atomic="false"
            aria-live="polite"
            onTouchStart={onDesktopTouchStart}
            onTouchMove={onDesktopTouchMove}
            onTouchEnd={onDesktopTouchEnd}
            onMouseDown={onDesktopMouseDown}
            onMouseMove={onDesktopMouseMove}
            onMouseUp={onDesktopMouseUp}
            onMouseLeave={onDesktopMouseUp}
            style={{
              padding: 0,
              margin: 0,
              listStyle: 'none',
              position: 'relative',
              display: 'flex',
              flex: '1 1 100%',
              width: '100%',
              height: '100%',
              gap: 0,
              alignItems: 'center',
              flexDirection: 'row',
              overflow: 'auto hidden',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              borderRadius: 0,
              cursor: isDesktopDragging ? 'grabbing' : 'grab',
              userSelect: 'none'
            } as React.CSSProperties}
          >
            {testimonials.map((testimonial, index) => (
              <li
                key={index}
                aria-label={`${index + 1} of ${testimonials.length}`}
                aria-hidden={index !== desktopIndex}
                style={{
                  scrollSnapAlign: 'center',
                  flexShrink: 0,
                  scrollSnapStop: 'always',
                  width: 'calc(100% - 0px)',
                  height: 'calc(100% - 0px)'
                }}
              >
                <div style={{ width: '100%', height: '100%' }}>
                  <div 
                    style={{
                      height: '100%',
                      width: '100%',
                      opacity: 1
                    }}
                    className="relative"
                  >
                    {/* Background Image */}
                    <div 
                      style={{
                        position: 'absolute',
                        borderRadius: 'inherit',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                      }}
                    >
                      <Image
                        src={testimonial.image}
                        alt={`Testimonial ${index + 1}`}
                        fill
                        className="object-cover"
                        quality={90}
                        sizes="1200px"
                        style={{
                          display: 'block',
                          width: '100%',
                          height: '100%',
                          borderRadius: 'inherit',
                          objectPosition: 'center center',
                          objectFit: 'cover'
                        }}
                      />
                    </div>

                    {/* Fade Gradient */}
                    <div 
                      style={{
                        background: 'linear-gradient(180deg, rgba(12, 10, 16, 0) 0%, rgb(12, 10, 16) 100%)',
                        opacity: 1,
                        position: 'absolute',
                        inset: 0,
                        zIndex: 0
                      }}
                    />

                    {/* Content */}
                    <div 
                      style={{
                        alignContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        gap: '16px',
                        height: '100%',
                        justifyContent: 'flex-end',
                        overflow: 'hidden',
                        padding: '0 0 40px',
                        position: 'relative',
                        width: '100%',
                        zIndex: 10
                      }}
                    >
                      <div 
                        style={{
                          alignContent: 'center',
                          alignItems: 'center',
                          display: 'flex',
                          flex: 'none',
                          flexDirection: 'column',
                          flexWrap: 'nowrap',
                          gap: '24px',
                          height: 'min-content',
                          justifyContent: 'center',
                          maxWidth: '750px',
                          overflow: 'hidden',
                          padding: '0 20px',
                          position: 'relative',
                          width: '100%'
                        }}
                      >
                        {/* Quote */}
                        <h3 
                          className="text-[#ffedd8] font-normal text-center font-forum"
                          style={{ 
                            fontFamily: 'var(--font-forum), sans-serif',
                            fontSize: '34px',
                            fontWeight: 400,
                            letterSpacing: '0em',
                            lineHeight: '36px',
                            textAlign: 'left',
                            textTransform: 'capitalize',
                            margin: 0,
                            padding: 0,
                            flex: 'none',
                            height: 'auto',
                            position: 'relative',
                            whiteSpace: 'pre-wrap',
                            width: '100%',
                            wordBreak: 'break-word',
                            wordWrap: 'break-word'
                          }}
                        >
                          &quot;{testimonial.quote}&quot;
                        </h3>
                        
                        {/* Author */}
                        <p 
                          className="text-[#ffedd8] font-medium text-center"
                          style={{ 
                            fontFamily: 'var(--font-inter), sans-serif',
                            fontSize: '16px',
                            fontWeight: 500,
                            letterSpacing: '0.01em',
                            lineHeight: '24px',
                            textAlign: 'left',
                            margin: 0,
                            padding: 0,
                            flex: 'none',
                            height: 'auto',
                            position: 'relative',
                            whiteSpace: 'pre-wrap',
                            width: '100%',
                            wordBreak: 'break-word',
                            wordWrap: 'break-word'
                          }}
                        >
                          {testimonial.author}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Navigation Buttons - Desktop Only */}
          <fieldset
            aria-label="Carousel pagination controls"
            className="framer--carousel-controls"
            data-show-mouse-controls="true"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none',
              border: 0,
              padding: '20px',
              margin: 0,
              flexDirection: 'row',
              zIndex: 50
            }}
          >
            <button
              type="button"
              onClick={prevDesktopSlide}
              aria-label="Previous"
              tabIndex={0}
              className="flex items-center justify-center transition-all hover:bg-black/30"
              style={{
                border: 'none',
                display: 'flex',
                placeContent: 'center',
                placeItems: 'center',
                overflow: 'hidden',
                background: 'rgba(0, 0, 0, 0.2)',
                margin: 0,
                padding: 0,
                width: '40px',
                height: '40px',
                borderRadius: '40px',
                cursor: 'pointer',
                opacity: 1,
                pointerEvents: 'auto',
                transform: 'none'
              }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="flex-shrink-0">
                <path d="M24 12L16 20L24 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button
              type="button"
              onClick={nextDesktopSlide}
              aria-label="Next"
              tabIndex={0}
              className="flex items-center justify-center transition-all hover:bg-black/30"
              style={{
                border: 'none',
                display: 'flex',
                placeContent: 'center',
                placeItems: 'center',
                overflow: 'hidden',
                background: 'rgba(0, 0, 0, 0.2)',
                margin: 0,
                padding: 0,
                width: '40px',
                height: '40px',
                borderRadius: '40px',
                cursor: 'pointer',
                opacity: 1,
                pointerEvents: 'auto',
                transform: 'none',
                willChange: 'transform'
              }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="flex-shrink-0">
                <path d="M16 12L24 20L16 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </fieldset>
        </section>
      </div>
    </section>
  );
}
