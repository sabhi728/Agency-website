interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export default function Logo({ width = 180, height = 50, className = "" }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle */}
      <circle cx="25" cy="25" r="23" fill="#673ee5" />

      {/* Stylized 'R' */}
      <path d="M15 15H30C32.7614 15 35 17.2386 35 20V20C35 22.7614 32.7614 25 30 25H15V15Z" fill="white" />
      <path d="M15 25H25L35 35H25L15 25Z" fill="white" />

      {/* Lightning Bolt */}
      <path d="M27 18L23 25H29L25 32" stroke="#673ee5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* RechargeZy Text */}
      <text x="60" y="35" fontSize="24" fontWeight="bold" fill="#673ee5">
        RechargeZy
      </text>
    </svg>
  )
}

