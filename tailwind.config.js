import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1100px',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    // Theme colors come from daisyUI (https://daisyui.com/docs/themes/).
    // Switched at runtime via data-theme on <html> — see ThemePicker.
    themes: [
      'dark',
      'night',
      'synthwave',
      'dracula',
      'sunset',
      'dim',
      'light',
      'corporate',
      'retro',
      'nord',
    ],
    darkTheme: 'dark',
    logs: false,
  },
}
