export function NeuralBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <defs>
          <pattern
            id="neural-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="1.5" fill="#e0f2fe" opacity="0.5" />
            <circle cx="80" cy="40" r="1" fill="#bae6fd" opacity="0.3" />
            <circle cx="50" cy="70" r="1.2" fill="#7dd3fc" opacity="0.4" />
            <line
              x1="20"
              y1="20"
              x2="80"
              y2="40"
              stroke="#0ea5e9"
              strokeWidth="0.5"
              opacity="0.2"
            />
            <line
              x1="80"
              y1="40"
              x2="50"
              y2="70"
              stroke="#0284c7"
              strokeWidth="0.3"
              opacity="0.15"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-pattern)" />
      </svg>
    </div>
  )
}