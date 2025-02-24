import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const SplitText = ({
  text = '',
  className = '',
  delay = 0.1, // Framer Motion uses seconds instead of milliseconds
  animationFrom = { opacity: 0, y: 40 },
  animationTo = { opacity: 1, y: 0 },
  easing = [0.33, 1, 0.68, 1], // easeOutCubic equivalent in Framer Motion
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const words = text.split(' ').map(word => word.split(''));
  const letters = words.flat();
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [threshold, rootMargin]);
  
  const handleAnimationComplete = () => {
    animatedCount.current += 1;
    if (animatedCount.current === letters.length && onLetterAnimationComplete) {
      onLetterAnimationComplete();
    }
  };
  
  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline ${className}`}
      style={{ textAlign, whiteSpace: 'normal', wordWrap: 'break-word' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.map((letter, letterIndex) => {
            const index = words
              .slice(0, wordIndex)
              .reduce((acc, w) => acc + w.length, 0) + letterIndex;
            
            return (
              <motion.span
                key={index}
                initial={animationFrom}
                animate={inView ? animationTo : animationFrom}
                transition={{
                  duration: 0.6,
                  ease: easing,
                  delay: index * delay,
                }}
                onAnimationComplete={handleAnimationComplete}
                className="inline-block transform transition-opacity will-change-transform"
              >
                {letter}
              </motion.span>
            );
          })}
          <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
        </span>
      ))}
    </p>
  );
};

export default SplitText;