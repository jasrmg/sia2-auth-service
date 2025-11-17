const Logo = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shield Background */}
      <path
        d="M100 25 L35 55 L35 95 Q35 135 100 175 Q165 135 165 95 L165 55 Z"
        fill="#388bfd"
        opacity="0.15"
      />

      {/* Shield Outline */}
      <path
        d="M100 25 L35 55 L35 95 Q35 135 100 175 Q165 135 165 95 L165 55 Z"
        stroke="#388bfd"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Inner Shield Glow */}
      <path
        d="M100 35 L45 60 L45 95 Q45 130 100 165 Q155 130 155 95 L155 60 Z"
        fill="none"
        stroke="#388bfd"
        strokeWidth="2"
        opacity="0.4"
      />

      {/* Lock Body */}
      <rect x="78" y="100" width="44" height="42" rx="4" fill="#2ea043" />

      {/* Lock Shackle */}
      <path
        d="M88 100 L88 85 Q88 70 100 70 Q112 70 112 85 L112 100"
        stroke="#2ea043"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />

      {/* Keyhole Circle */}
      <circle cx="100" cy="115" r="5" fill="#f0f6fc" />

      {/* Keyhole Slot */}
      <path d="M100 120 L97 130 L103 130 Z" fill="#f0f6fc" />

      {/* Top Star/Badge (optional security symbol) */}
      <circle cx="100" cy="50" r="8" fill="#2ea043" opacity="0.8" />
      <path
        d="M100 45 L101.5 48.5 L105 48.5 L102 51 L103.5 55 L100 52.5 L96.5 55 L98 51 L95 48.5 L98.5 48.5 Z"
        fill="#f0f6fc"
      />
    </svg>
  );
};

export default Logo;
