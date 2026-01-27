import React, { useEffect, useState } from 'react';
import './Preloader.css';

interface PreloaderProps {
  onLoadingComplete?: () => void;
  minDisplayTime?: number;
}

const Preloader: React.FC<PreloaderProps> = ({ 
  onLoadingComplete, 
  minDisplayTime = 2000 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, minDisplayTime);

    return () => clearTimeout(timer);
  }, [minDisplayTime, onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        {/* Animated DB Logo */}
        <div className="logo-container">
          {/* Outer rotating circle */}
          <div className="circle-outer"></div>
          
          {/* Middle pulsing circle */}
          <div className="circle-middle"></div>
          
          {/* DB Letters Container */}
          <div className="letters-container">
            <div className="db-letters">
              {/* D Letter */}
              <span className="letter-d">D</span>
              {/* B Letter */}
              <span className="letter-b">B</span>
            </div>
          </div>
          
          {/* Animated dots */}
          <div className="loading-dots">
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="loading-text">
          <p className="brand-name">
            Design<span className="ampersand">&</span>Build<span className="hq">HQ</span>
          </p>
          <p className="loading-status">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;