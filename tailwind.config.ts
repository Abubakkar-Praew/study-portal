import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        'light-blue': '#E8F1FF',
        'lighter-blue': '#DBEAFE',
        'text-dark': '#1F2937',
        'text-gray': '#6B7280',
        'border-light': '#BFDBFE',
        'border-gray': '#E5E7EB',
        'bg-gray-light': '#F9FAFB',
      },
    },
  },
};

export default config;
