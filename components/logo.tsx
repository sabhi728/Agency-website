interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export default function Logo({ width = 220, height = 50, className = "" }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 240 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMinYMid meet"
    >
      {/* Background Circle */}
      <circle cx="25" cy="25" r="23" fill="#673ee5" />

      <path d="M20 35L30 15L40 35H35L30 25L25 35H20Z" fill="white" />
<path d="M25 25H35V30H25V25Z" fill="white" />


      {/* Lightning Bolt */}
      <path d="M22 18L18 25H24L20 32" stroke="#673ee5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* RechargeZy Text - Using text element for better readability */}
      <text x="60" y="35" fontSize="22" fontWeight="bold" fontFamily="Arial, sans-serif" fill="#673ee5">
        Agency Website
      </text>
    </svg>
  )
}

