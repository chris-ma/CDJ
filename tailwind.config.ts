import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        signal: {
          green: 'var(--color-signal-green)',
          'green-bg': 'var(--color-signal-green-bg)',
          'green-border': 'var(--color-signal-green-border)',
          amber: 'var(--color-signal-amber)',
          'amber-bg': 'var(--color-signal-amber-bg)',
          'amber-border': 'var(--color-signal-amber-border)',
          red: 'var(--color-signal-red)',
          'red-bg': 'var(--color-signal-red-bg)',
          'red-border': 'var(--color-signal-red-border)',
          grey: 'var(--color-signal-grey)',
          'grey-bg': 'var(--color-signal-grey-bg)',
          'grey-border': 'var(--color-signal-grey-border)',
        },
        bg: {
          primary: 'var(--color-bg-primary)',
          surface: 'var(--color-bg-surface)',
          subtle: 'var(--color-bg-subtle)',
        },
        border: 'var(--color-border)',
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          teal: 'var(--color-accent-teal)',
        },
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },
      spacing: {
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        6: 'var(--space-6)',
        8: 'var(--space-8)',
        12: 'var(--space-12)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        overlay: 'var(--shadow-overlay)',
      },
      transitionDuration: {
        fast: 'var(--duration-fast)',
        base: 'var(--duration-base)',
        slow: 'var(--duration-slow)',
      },
    },
  },
} satisfies Config
