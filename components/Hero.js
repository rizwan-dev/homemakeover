export default function Hero({
  title,
  subtitle,
  breadcrumbs = [],
  backgroundImage = ''
}) {
  return (
    <section className="relative text-white py-20 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark" />

      {/* Optional background image with tint */}
      {backgroundImage ? (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
        </div>
      ) : null}

      {/* Subtle pattern (SVG grid) */}
      <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Accent glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="mb-6 text-sm text-white/80">
            {breadcrumbs.map((bc, idx) => (
              <span key={idx}>
                {bc.href ? (
                  <a href={bc.href} className="hover:text-white/95 transition-colors">
                    {bc.label}
                  </a>
                ) : (
                  <span className="text-white/60">{bc.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && <span className="mx-2 text-white/50">/</span>}
              </span>
            ))}
          </nav>
        )}

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/85 max-w-3xl">{subtitle}</p>
        )}
      </div>
    </section>
  )
}


