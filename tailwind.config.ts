import { Config } from 'tailwindcss';

export default <Config>{
  content: ['app.vue', 'components/**/*.{vue,js,ts}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      // sans: ['Montserrat', 'system-ui'],
      sans: ['Roboto', 'system-ui'],
      serif: ['ui-serif', 'Roboto'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['Roboto']
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      colors: {
        primary: {
          50: '#E5F8FF',
          100: '#C7F0FF',
          200: '#8FE1FF',
          300: '#57D2FF',
          400: '#1FC3FF',
          500: '#00AAE8',
          600: '#0087B8',
          700: '#00658A',
          800: '#00435C',
          900: '#00222E',
          950: '#001319'
        },
        surface: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b'
        }
      }
    }
  },
  plugins: []
};
