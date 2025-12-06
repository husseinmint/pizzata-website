"use client";

interface InfiniteSliderProps {
  children: React.ReactNode;
  direction?: "left" | "right";
}

export default function InfiniteSlider({ children, direction = "left" }: InfiniteSliderProps) {
  const animationClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right";
  
  return (
    <div className="relative w-full overflow-hidden">
      <div className={`flex gap-4 ${animationClass}`} style={{ willChange: 'transform' }}>
        {/* First set of children */}
        <div className="flex gap-4 shrink-0">
          {children}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-4 shrink-0">
          {children}
        </div>
      </div>
    </div>
  );
}

