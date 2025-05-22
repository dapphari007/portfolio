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
            filter: "hue-rotate(70deg) brightness(1.2) contrast(1.1)",
            opacity: 0.9
          }}
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
        
        {/* Blue-white gradient overlay */}
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: "radial-gradient(circle at center, rgba(100, 149, 237, 0.1) 0%, rgba(0, 0, 50, 0.3) 70%)",
            mixBlendMode: "screen"
          }}
        />
      </div>

      <HeroContent />
    </div>
  );
};
