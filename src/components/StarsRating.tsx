export default function StarsRating() {
  return (
    <svg 
      viewBox="0 0 140 24" 
      preserveAspectRatio="none" 
      width="140" 
      height="24" 
      fill="currentColor"
      className="w-[140px] h-6"
      aria-hidden="true"
    >
      {/* 5 stars */}
      {[...Array(5)].map((_, i) => (
        <g key={i} transform={`translate(${i * 28}, 0)`}>
          <path 
            d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 16.77l-6.18 2.25L7 12.14 2 7.27l6.91-1.01L12 0z" 
            fill="#ffedd8"
          />
        </g>
      ))}
    </svg>
  );
}

