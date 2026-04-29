import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#7c3aed',
        accent: '#06b6d4',
        success: '#16a34a',
        warning: '#f59e0b'
      },
      borderRadius: { '2xl': '1.25rem' },
      boxShadow: { premium: '0 20px 45px -20px rgba(0,0,0,0.35)' }
    }
  },
  plugins: []
};

export default config;
