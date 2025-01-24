/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      gray: {
        DEFAULT: '#7A839F', // Custom default gray
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827', // A dark gray matching your design
      },
      black: '#000000',
      blue: {
        DEFAULT: '#031039', // Your base blue color
        50: '#EBF2FF',
        100: '#D7E3FE',
        200: '#AFC8FE',
        300: '#7AA9FD',
        400: '#488CFC',
        500: '#2368FA',
        600: '#1D53D9', // Main brand blue
        700: '#1640A6',
        800: '#0F2D75',
        900: '#091B48',
      },
      yellow: {
        50: '#FFFAEB',
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#FCD34D',
        400: '#FBBF24',
        500: '#F59E0B',
        600: '#D97706',
        700: '#B45309',
        800: '#92400E',
        900: '#78350F',
      },
      white: '#FFFFFF',
    },
  },
  plugins: [],
};
