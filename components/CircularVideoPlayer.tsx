import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/components/CircularVideoPlayer.module.scss";

interface CircularVideoPlayerProps {
  videoUrl: string;
  thumbnailUrl: string;
  caption?: string;
}

const CircularVideoPlayer: React.FC<CircularVideoPlayerProps> = ({
  videoUrl,
  thumbnailUrl,
  caption = "Watch video"
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [audioLevels, setAudioLevels] = useState<number[]>([0, 0, 0, 0, 0]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const sourceCreatedRef = useRef<boolean>(false);

  // Initialize audio analyzer
  useEffect(() => {
    // Only set up the event listener if the video element exists
    if (!videoRef.current) return;

    const initAudioAnalyzer = () => {
      // Skip if we've already created a source for this video element
      // or if the video element is no longer available
      if (sourceCreatedRef.current || !videoRef.current) return;
      
      try {
        if (!audioContextRef.current && window.AudioContext) {
          audioContextRef.current = new AudioContext();
          analyserRef.current = audioContextRef.current.createAnalyser();
          analyserRef.current.fftSize = 32;
          
          // We've already checked that videoRef.current exists, but TypeScript
          // needs an additional check here to be sure it's not null
          if (videoRef.current) {
            const source = audioContextRef.current.createMediaElementSource(videoRef.current);
            source.connect(analyserRef.current);
            analyserRef.current.connect(audioContextRef.current.destination);
            sourceCreatedRef.current = true;
          }
        }
      } catch (error) {
        console.error("Error initializing audio analyzer:", error);
      }
    };

    // Only initialize when the video starts playing
    const videoElement = videoRef.current;
    videoElement.addEventListener('play', initAudioAnalyzer);
    
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('play', initAudioAnalyzer);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Update audio visualization
  useEffect(() => {
    if (!isPlaying || !analyserRef.current) return;

    const updateAudioVisualization = () => {
      if (!analyserRef.current) return;
      
      const bufferLength = analyserRef.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyserRef.current.getByteFrequencyData(dataArray);
      
      // Simplify to 5 levels for visualization
      const levels = [
        dataArray[1] / 255,
        dataArray[2] / 255,
        dataArray[3] / 255,
        dataArray[4] / 255,
        dataArray[5] / 255
      ];
      
      setAudioLevels(levels);
      animationFrameRef.current = requestAnimationFrame(updateAudioVisualization);
    };

    updateAudioVisualization();
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying]);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      // Resume AudioContext if it was suspended
      if (audioContextRef.current?.state === 'suspended') {
        audioContextRef.current.resume();
      }
      videoRef.current.play().catch(error => {
        console.error("Error playing video:", error);
      });
    }
    
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    
    if (isMuted) {
      videoRef.current.volume = volume;
    } else {
      videoRef.current.volume = 0;
    }
    
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div 
      className={styles.circularVideoContainer}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.videoWrapper}>
        <video 
          ref={videoRef}
          className={styles.circularVideo}
          loop
          playsInline
          poster={thumbnailUrl}
          onEnded={handleVideoEnd}
          preload="metadata"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Play/Pause Button */}
        <motion.button 
          className={styles.playButton}
          onClick={togglePlayPause}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={isPlaying ? { opacity: 0.5, scale: 0.9 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
              <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
            </svg>
          ) : (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
            </svg>
          )}
        </motion.button>
        
        {/* Audio Controls */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div 
              className={styles.audioControls}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Volume Button */}
              <motion.button
                className={styles.volumeButton}
                onClick={toggleMute}
                onMouseEnter={() => setShowVolumeSlider(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="currentColor" />
                    <path d="M23 9L17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M17 9L23 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="currentColor" />
                    <path d="M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4774 14.5924 15.54 15.53" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.07 5.93C20.9447 7.80528 21.9979 10.3447 21.9979 13C21.9979 15.6553 20.9447 18.1947 19.07 20.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </motion.button>
              
              {/* Volume Slider */}
              <AnimatePresence>
                {showVolumeSlider && (
                  <motion.div 
                    className={styles.volumeSliderContainer}
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 80 }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={() => setShowVolumeSlider(false)}
                  >
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={handleVolumeChange}
                      className={styles.volumeSlider}
                      aria-label="Volume"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Audio Visualization */}
              <div className={styles.audioVisualization}>
                {audioLevels.map((level, index) => (
                  <motion.div
                    key={index}
                    className={styles.audioBar}
                    animate={{
                      height: `${Math.max(3, level * 20)}px`,
                      opacity: level < 0.1 ? 0.3 : 1
                    }}
                    transition={{ duration: 0.1 }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Scanline Effect */}
        <div className={styles.scanline}></div>
        
        {/* Terminal Glitch Effect */}
        <div className={styles.glitchEffect}></div>
      </div>
      
      {caption && (
        <div className={styles.videoCaption}>
          <span>{caption}</span>
        </div>
      )}
    </motion.div>
  );
};

export default CircularVideoPlayer; 