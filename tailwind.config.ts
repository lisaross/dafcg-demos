import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#391892',
        success: '#18DD89',
      },
      borderRadius: {
        DEFAULT: '10px',
      },
    },
  },
  plugins: [],
} satisfies Config