export default function WhatsAppButton() {
  const phoneNumber = '919031263531' // WhatsApp format without '+'
  const prefilled = encodeURIComponent(
    "Hi Home Makeover, I'd like to discuss my interior/painting project."
  )

  return (
    <div className="fixed right-3 md:right-4 top-1/2 -translate-y-1/2 z-50">
      <a
        href={`https://wa.me/${phoneNumber}?text=${prefilled}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group block"
      >
        <div className="relative">
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/20" />
          {/* Button */}
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#25D366] via-[#20be5a] to-[#1aae4f] text-white shadow-lg ring-2 ring-white/90 ring-offset-2 ring-offset-[#25D366]/20 hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center">
            {/* WhatsApp logo (inline SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-6 h-6 md:w-7 md:h-7"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M19.11 17.26c-.29-.15-1.68-.83-1.94-.93c-.26-.1-.45-.15-.64.15c-.19.29-.74.93-.91 1.12c-.17.19-.34.22-.63.07c-.29-.15-1.21-.45-2.3-1.45c-.85-.76-1.42-1.7-1.58-1.99c-.16-.29-.02-.45.12-.6c.13-.13.29-.34.43-.51c.14-.17.19-.29.29-.48c.1-.19.05-.36-.02-.51c-.07-.15-.64-1.55-.88-2.12c-.23-.55-.47-.48-.64-.49l-.54-.01c-.19 0-.51.07-.78.36c-.26.29-1 1-1 2.44c0 1.43 1.03 2.81 1.17 3.01c.14.19 2.02 3.09 4.89 4.33c.68.29 1.21.46 1.62.59c.68.22 1.29.19 1.77.12c.54-.08 1.68-.69 1.92-1.36c.24-.67.24-1.24.17-1.36c-.07-.12-.26-.19-.55-.34zM16.03 4C9.94 4 5 8.94 5 15.03c0 1.95.51 3.77 1.4 5.36L5 28l7.8-2.05a11.03 11.03 0 0 0 3.23.48C22.94 26.43 28 21.49 28 15.4C28 9.31 22.12 4 16.03 4zm0 20.18c-1.66 0-3.2-.45-4.54-1.23l-.33-.2l-4.63 1.22l1.24-4.51l-.22-.35A9.4 9.4 0 1 1 25.43 15.4c0 5.18-4.22 8.78-9.4 8.78z"
              />
            </svg>
            {/* Inner highlight */}
            <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 blur-sm" />
          </div>
          {/* Hover label */}
          <div className="absolute right-[calc(100%+8px)] top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition bg-primary text-white text-xs md:text-sm px-3 py-1.5 rounded-full shadow-md">
            Chat on WhatsApp
          </div>
        </div>
      </a>
    </div>
  )
}


