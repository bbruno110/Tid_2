import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes:{
        'rotation-l':{
          '0%':{transform: 'perspective(900px) rotateY(0deg);opacity: 1;'},
          '100%':{transform: 'perspective(900px) rotateY(-180deg); opacity: 1;'}
        },
        'rotation-r':{
          '0%':{transform: 'perspective(900px) rotateY(-180deg); opacity: 1;'},
          '100%':{transform: 'perspective(900px) rotateY(0deg); opacity: 1;'}
        }
      },
      animation:{'rotation-l':'rotation-l 0.2s linear alternate','rotation-r':'rotation-r 0.2s linear alternate' }
    },
    fontFamily:{
      Montserrat:["Montserrat", "sans-serif"]
    }
  },
  plugins: [],
}
export default config
