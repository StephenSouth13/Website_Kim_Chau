import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0 transform translate-y-8';
    
    switch (animation) {
      case 'fadeInUp':
        return 'opacity-100 transform translate-y-0 transition-all duration-700 ease-out';
      case 'fadeInLeft':
        return 'opacity-100 transform translate-x-0 transition-all duration-700 ease-out';
      case 'fadeInRight':
        return 'opacity-100 transform translate-x-0 transition-all duration-700 ease-out';
      case 'fadeIn':
        return 'opacity-100 transition-opacity duration-700 ease-out';
      case 'scaleIn':
        return 'opacity-100 transform scale-100 transition-all duration-700 ease-out';
      default:
        return 'opacity-100 transform translate-y-0 transition-all duration-700 ease-out';
    }
  };

  const getInitialClass = () => {
    switch (animation) {
      case 'fadeInLeft':
        return 'opacity-0 transform -translate-x-8';
      case 'fadeInRight':
        return 'opacity-0 transform translate-x-8';
      case 'fadeIn':
        return 'opacity-0';
      case 'scaleIn':
        return 'opacity-0 transform scale-95';
      default:
        return 'opacity-0 transform translate-y-8';
    }
  };

  return (
    <div
      ref={ref}
      className={`${getInitialClass()} ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;