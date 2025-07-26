module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // black - sophisticated foundation
        secondary: "#1a1a1a", // gray-900 - subtle depth variation
        accent: "#d4af37", // yellow-600 - premium moments
        background: "#ffffff", // white - clean canvas
        surface: "#f8f8f8", // gray-50 - gentle content separation
        "text-primary": "#000000", // black - maximum readability
        "text-secondary": "#666666", // gray-500 - supporting information
        success: "#2d5a27", // green-800 - positive confirmation
        warning: "#8b6914", // yellow-700 - gentle attention
        error: "#8b2635", // red-800 - helpful correction
        border: "#e5e5e5", // gray-200 - minimal separation
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        subtle: '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'lg': '0.5rem',
      },
    },
  },
  plugins: [],
}