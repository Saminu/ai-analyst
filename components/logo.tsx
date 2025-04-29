export default function Logo({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2">
      {/* Icon: stylized cursor inside a circle */}
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M8 8L12 16L14 12L18 10L8 8Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
      </svg>

      {/* Word-mark: Data Driven Agent in Inter Extra Bold, tight -2% letter-spacing */}
      <span className="font-extrabold tracking-[-0.02em] text-text-main">
        Data Driven Agent
      </span>
    </div>
  );
}
