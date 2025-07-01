import React, { useEffect, useState } from 'react';

const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 300, height: 300 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(hover: hover)').matches) {
      const updateCursorPosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      };

      const handleMouseEnter = () => {
        setIsVisible(true);
      };

      const handleMouseLeave = () => {
        setIsVisible(false);
      };

      const handleInteractiveElement = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        
        // Check if mouse is over interactive element
        if (
          target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.closest('a') || 
          target.closest('button')
        ) {
          setSize({ width: 100, height: 100 });
        } else {
          setSize({ width: 300, height: 300 });
        }
      };

      window.addEventListener('mousemove', updateCursorPosition);
      window.addEventListener('mousemove', handleInteractiveElement);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        window.removeEventListener('mousemove', updateCursorPosition);
        window.removeEventListener('mousemove', handleInteractiveElement);
        document.removeEventListener('mouseenter', handleMouseEnter);
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="cursor-glow"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        opacity: isVisible ? 1 : 0
      }}
    />
  );
};

export default CursorGlow;