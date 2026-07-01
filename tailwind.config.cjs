/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
	  extend: {
		backgroundImage: {
		  hero: "url('/assets/imgs/hero_2.webp')",
		},
		keyframes: {
		  glow: {
			'0%': { opacity: 0 },
			'50%': { textShadow: '0 0 10px #ffffff' },
			'100%': { opacity: 1, textShadow: 'none' },
		  },
		  pulseBrass: {
			'0%, 100%': { opacity: 1 },
			'50%': { opacity: 0.5 },
		  },
		},
		animation: {
		  glow: 'glow 3s ease-in-out',
		  glow_fast: 'glow 1s ease-in-out',
		  pulseBrass: 'pulseBrass 2.2s ease-in-out infinite',
		},
		screens: {
		  xs: "480px",
		  xss: "360px",
		},
		fontFamily: {
		  header: ['Poppins', 'sans-serif'],
		  subheading: ['Manrope', 'sans-serif'],
		  body: ['Manrope', 'sans-serif'],
		  // New — used by the redesigned HomeSections components
		  display: ['"Space Grotesk"', 'sans-serif'],
		  mono: ['"JetBrains Mono"', 'monospace'],
		},
		colors: {
		  green: '#22c55e', // Updated from #38A169 to #22c55e for more vibrancy
		  "soft-white": "#F8FAFC",
		  "light-gray": "#F3F4F6",
          // Dark elite theme (kept — still used on other pages)
          elite: {
            black: '#000000',
            surface: '#0A0A0A',
            card: '#111111',
            border: '#1A1A1A',
            muted: '#A0A0A0',
            cyan: '#00E5FF',
            'cyan-dim': '#00B8D4',
          },
          // ServiJoy "Field Instrument" theme — used by the redesigned HomeSections
          sj: {
            bg: '#14151A',
            surface: '#1B1D23',
            card: '#212329',
            'card-hi': '#262832',
            line: '#33363F',
            muted: '#8B8F9C',
            ink: '#F5F4F0',
            brass: '#D9A441',
            'brass-dim': '#8A6A2C',
            verdigris: '#4FAE9B',
          },
          // New brand colors - Updated for rebranding
          brand: {
            green: '#22c55e',
            blue: '#3b82f6',
            violet: '#8b5cf6', // Renamed from purple to violet for consistency
          },
		  sidebar: {
			DEFAULT: 'hsl(var(--sidebar-background))',
			foreground: 'hsl(var(--sidebar-foreground))',
			primary: 'hsl(var(--sidebar-primary))',
			'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
			accent: 'hsl(var(--sidebar-accent))',
			'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
			border: 'hsl(var(--sidebar-border))',
			ring: 'hsl(var(--sidebar-ring))',
		  },
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
	  },
	},
	plugins: [require("daisyui"),
		require('tailwind-scrollbar'),
		require("tailwindcss-animate")],
	daisyui: {
	  themes: [
		{
		  servijoy: {
			"primary": "#22c55e", // Updated from #38A169
			"primary-focus": "#16a34a",
			"primary-content": "#ffffff",
			"secondary": "#3b82f6", // Changed to blue
			"accent": "#8b5cf6", // Added violet as accent
			"neutral": "#1f2937",
			"base-100": "#F8FAFC",
			"info": "#3ABFF8",
			"success": "#22c55e", // Updated to match primary
			"warning": "#f59e0b", // Updated to amber-500
			"error": "#ef4444", // Updated to red-500
		  },
		},
	  ],
	},
  };