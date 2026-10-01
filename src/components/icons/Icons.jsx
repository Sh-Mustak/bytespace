export const StarIcon = (props) => (
  <svg viewBox="0 0 20 20" fill="#ffb800" {...props}>
    <path d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L10 14.9 4.4 18l1.4-6.2L1 7.5l6.4-.6L10 1z" />
  </svg>
)

export const BeginnerIcon = (props) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <path d="M3 15l4-8 4 8M4.5 12h5M11 15V6l6 4.5-6 3.6" />
  </svg>
)

const stroke = { fill: 'none', stroke: '#141ac2', strokeWidth: 1.8 }

export const DesignIcon = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M4 20l3-1 10-10-2-2L5 17l-1 3zM14.5 5.5l2 2 2-2-2-2-2 2z" />
  </svg>
)
export const DevelopmentIcon = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M8 16L4 12l4-4M16 8l4 4-4 4" />
  </svg>
)
export const ITIcon = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <rect x="3" y="5" width="18" height="12" rx="1.5" />
    <path d="M8 21h8M12 17v4" />
  </svg>
)
export const BusinessIcon = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <rect x="3" y="8" width="18" height="11" rx="1.5" />
    <path d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2" />
  </svg>
)
export const MarketingIcon = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M3 10v4h4l6 4V6l-6 4H3zM16 9a4 4 0 010 6" />
  </svg>
)
export const PhotographyIcon = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <circle cx="12" cy="13.5" r="3.5" />
    <path d="M8 7l1.5-2.5h5L16 7" />
  </svg>
)

export const categoryIcons = {
  Design: DesignIcon,
  Development: DevelopmentIcon,
  'IT & Software': ITIcon,
  Business: BusinessIcon,
  Marketing: MarketingIcon,
  Photography: PhotographyIcon
}

export const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.66 15.4 3.57 14.2 3.57c-2.4 0-4 1.46-4 4.15v2.17H7.5v3.1h2.7V21h3.3z" />
  </svg>
)
export const GoogleIcon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="#4285F4" d="M22 12.2c0-.7-.06-1.4-.18-2.05H12v3.9h5.6a4.8 4.8 0 01-2.08 3.15v2.6h3.36C20.86 17.9 22 15.3 22 12.2z" />
    <path fill="#34A853" d="M12 22c2.8 0 5.15-.93 6.87-2.5l-3.36-2.6c-.93.62-2.13.99-3.51.99-2.7 0-4.99-1.82-5.8-4.27H2.73v2.68A10 10 0 0012 22z" />
    <path fill="#FBBC05" d="M6.2 13.62A6 6 0 015.9 12c0-.56.1-1.1.3-1.62V7.7H2.73A10 10 0 002 12c0 1.6.38 3.12 1.05 4.42l3.15-2.8z" />
    <path fill="#EA4335" d="M12 6.1c1.53 0 2.9.53 3.98 1.55l2.98-2.98C17.14 2.99 14.8 2 12 2A10 10 0 002.73 7.7l3.47 2.68C7.01 7.92 9.3 6.1 12 6.1z" />
  </svg>
)
