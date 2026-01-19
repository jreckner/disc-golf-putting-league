import { heroui } from "@heroui/theme"

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      zIndex: {
        base: 0,
        mid: 10,
        top: 40,
        priority: 50,
      },
      gridTemplateColumns: {
        workflow: 'repeat(32, minmax(0, 1fr))',
      },
      minWidth: {
        'modal-sm': '32rem',
        'modal-md': '48rem',
        'modal-lg': '64rem',
      },
      maxWidth: {
        'modal-sm': '32rem',
        'modal-md': '48rem',
        'modal-lg': '64rem',
      },
      colors: {
        primary: {
          DEFAULT: '#00C425',
          50: '#CEFFCE',
          100: '#A1FFA1',
          200: '#72FD72',
          300: '#3AF23A',
          400: '#00C425',
          500: '#008A44',
          600: '#006446',
          700: '#034D36',
          800: '#012D20',
          900: '#011711',
        },
        secondary: {
          DEFAULT: '#1C1B1F',
        },
        tertiary: {
          DEFAULT: '#323137',
        },
        black: {
          DEFAULT: '#323137',
          50: '#EBEAED',
          100: '#D6D5D9',
          200: '#ABAAB3',
          300: '#817F8D',
          400: '#595762',
          500: '#323137',
          600: '#2B2A2F',
          700: '#232327',
          800: '#1C1B1F',
          900: '#151417',
        },
        gray: {
          DEFAULT: '#858C99',
          50: '#FFFFFF',
          100: '#F4F5F6',
          200: '#D8DBDF',
          300: '#BDC0C7',
          400: '#A1A6B0',
          500: '#858C99',
          600: '#6B7280',
          700: '#545A64',
          800: '#3D4148',
          900: '#25282D',
        },
        red: {
          DEFAULT: '#D13429',
          50: '#F1BEBB',
          100: '#EDAAA6',
          200: '#E5827B',
          300: '#DC5951',
          400: '#D13429',
          500: '#A62921',
          600: '#7B1E19',
          700: '#511410',
          800: '#260908',
          900: '#000000',
        },
        green: {
          DEFAULT: '#00C425',
          50: '#CEFFCE',
          100: '#A1FFA1',
          200: '#72FD72',
          300: '#3AF23A',
          400: '#00C425',
          500: '#008A44',
          600: '#006446',
          700: '#034D36',
          800: '#012D20',
          900: '#011711',
        },
        blue: {
          DEFAULT: '#3C699C',
          50: '#D0DEED',
          100: '#BED1E6',
          200: '#99B7D8',
          300: '#749CCA',
          400: '#5082BC',
          500: '#3C699C',
          600: '#2E5077',
          700: '#203752',
          800: '#121F2E',
          900: '#030609',
        },
        yellow: {
          DEFAULT: '#DBCC49',
          50: '#F8F6DD',
          100: '#F4F0C8',
          200: '#EBE49E',
          300: '#E3D873',
          400: '#DBCC49',
          500: '#C8B828',
          600: '#9D9120',
          700: '#736A17',
          800: '#48430F',
          900: '#1E1C06',
        },
        purple: {
          DEFAULT: '#9159BC',
          50: '#EFE0FA',
          100: '#E5D4F2',
          200: '#D9C6E8',
          300: '#C1A2D9',
          400: '#A97DCB',
          500: '#9159BC',
          600: '#7741A1',
          700: '#5C327D',
          800: '#412458',
          900: '#271534',
        },
        orange: {
          DEFAULT: '#D27F32',
          50: '#FFE4CA',
          100: '#FFDAB8',
          200: '#FFC691',
          300: '#F4AB67',
          400: '#E8974C',
          500: '#D27F32',
          600: '#B66D2A',
          700: '#8A5320',
          800: '#6F3D0F',
          900: '#4E2908',
        },
        light: {
          bg: {
            primary: '#F4F5F6', // grey['100']
            secondary: '#FFFFFF', // gray['50']
            tertiary: '#D8DBDF', // gray['200']
          },
          fg: {
            primary: '#25282D', // gray['900']
            secondary: '#858C99', // gray['500']
            tertiary: '#D8DBDF', // gray['200']
          },
        },
        dark: {
          bg: {
            primary: '#1C1B1F', // black['800']
            secondary: '#323137', // black['500']
            tertiary: '#151417', // black['900']
          },
          fg: {
            primary: '#EBEAED', // black['50']
            secondary: '#817F8D', // black['300']
            tertiary: '#323137', // black['500']
          },
        },
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    animation: {
      spring: 'spring 300ms ease-out',
      'fade-in': 'fade-in 250ms ease-in-out',
      'highlight-row': 'highlight-row 2500ms ease-in-out',
    },
  },
  plugins: [heroui({
    prefix: "starter", // prefix for themes variables
    addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
    defaultTheme: "light", // default theme from the themes object
    defaultExtendTheme: "light", // default theme to extend on custom themes
    layout: {
      dividerWeight: "1px",
      disabledOpacity: "0.6",
      fontSize: {
        tiny: "0.75rem", // text-tiny
        small: "0.875rem", // text-small
        medium: "1rem", // text-medium
        large: "1.125rem", // text-large
      },
      lineHeight: {
        tiny: "1rem", // text-tiny
        small: "1.25rem", // text-small
        medium: "1.5rem", // text-medium
        large: "1.75rem", // text-large
      },
      radius: {
        small: "8px", // rounded-small
        medium: "12px", // rounded-medium
        large: "14px", // rounded-large
      },
      borderWidth: {
        small: "1px", // border-small
        medium: "2px", // border-medium (default)
        large: "3px", // border-large
      },
    }, // common layout tokens (applied to all themes)
    themes: {
      light: {
        layout: {}, // light theme layout tokens
        colors: {
          background: '#F4F5F6',
          foreground: '#25282D',
          focus: '#3AF23A',
          overlay: '#FFFFFF',
          success: '#21A62E',
          warning: '#D1B41D',
          danger: '#A62921',
          primary: {
            DEFAULT: '#00C425',
            50: '#CEFFCE',
            100: '#A1FFA1',
            200: '#72FD72',
            300: '#3AF23A',
            400: '#00C425',
            500: '#008A44',
            600: '#006446',
            700: '#034D36',
            800: '#012D20',
            900: '#011711',
          },
          secondary: {
            DEFAULT: '#00C425',
          },
        }, // light theme colors
      },
      dark: {
        layout: {}, // dark theme layout tokens
        colors: {
          background: '#1C1B1F',
          foreground: '#888888',
          focus: '#3AF23A',
          overlay: '#FFFFFF',
          success: '#21A62E',
          warning: '#D1B41D',
          danger: '#A62921',
          primary: {
            DEFAULT: '#00C425',
            50: '#CEFFCE',
            100: '#A1FFA1',
            200: '#72FD72',
            300: '#3AF23A',
            400: '#00C425',
            500: '#008A44',
            600: '#006446',
            700: '#034D36',
            800: '#012D20',
            900: '#011711',
          },
          secondary: {
            DEFAULT: '#00C425',
          },
        }, // dark theme colors
      },
      // ... custom themes
    },
  })],
}
