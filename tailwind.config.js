/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05070d',
        panel: '#0a101b',
        line: 'rgba(147, 197, 253, 0.18)',
        cyan: '#41e9ff',
        cobalt: '#3b82f6',
      },
      boxShadow: {
        glow: '0 0 45px rgba(65, 233, 255, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
