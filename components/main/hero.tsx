"use client";

import { HeroContent } from "@/components/sub/hero-content";
import { useRef } from "react";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative flex flex-col h-full w-full">
      {/* Blue-white wormhole video effect */}
      <div className="absolute top-0 left-0 w-full h-full -z-20 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover"
          style={{ 
            filter: "brightness(0.8) contrast(1.1)",
            opacity: 0.7
          }}
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
        
        {/* Removed blue-white gradient overlay */}
      </div>

      <HeroContent />
    </div>
  );
};
