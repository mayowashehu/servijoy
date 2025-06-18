/**
 * ServiJoy Rebranding Strategy
 * 
 * This file contains the new brand identity guidelines for ServiJoy's comprehensive rebranding.
 * It defines the color palette, typography, logo specifications, and design principles
 * to be implemented across the platform.
 */

// New Color Palette with enhanced gradients
export const colors = {
  primary: {
    light: '#4ade80', // green-400
    main: '#22c55e', // green-500
    dark: '#16a34a', // green-600
    gradient: 'linear-gradient(135deg, #22c55e, #16a34a)'
  },
  secondary: {
    light: '#60a5fa', // blue-400
    main: '#3b82f6', // blue-500
    dark: '#2563eb', // blue-600
    gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)'
  },
  accent: {
    light: '#c4b5fd', // violet-300
    main: '#a78bfa', // violet-400
    dark: '#8b5cf6', // violet-500
    gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)'
  },
  success: {
    light: '#4ade80', // green-400
    main: '#22c55e', // green-500
    dark: '#16a34a', // green-600
    gradient: 'linear-gradient(135deg, #22c55e, #16a34a)'
  },
  warning: {
    light: '#fbbf24', // amber-400
    main: '#f59e0b', // amber-500
    dark: '#d97706', // amber-600
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)'
  },
  error: {
    light: '#f87171', // red-400
    main: '#ef4444', // red-500
    dark: '#dc2626', // red-600
    gradient: 'linear-gradient(135deg, #ef4444, #dc2626)'
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  // Brand colors - Updated for rebranding
  brand: {
    green: '#22c55e', // Updated from #38A169 to #22c55e for more vibrancy
    blue: '#3b82f6',
    purple: '#8b5cf6', // New accent color
    gradient: 'linear-gradient(135deg, #22c55e, #3b82f6)',
    gradientAlt: 'linear-gradient(135deg, #22c55e, #8b5cf6)'
  }
};

// Typography system
export const typography = {
  fontFamily: {
    heading: 'Poppins, sans-serif',
    subheading: 'Manrope, sans-serif',
    body: 'Manrope, sans-serif',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

// Logo specifications
export const logo = {
  // Logo variants
  variants: {
    primary: {
      description: 'Primary logo with full name',
      usage: 'Main website header, official documents, marketing materials'
    },
    icon: {
      description: 'Icon-only version for small spaces',
      usage: 'Favicon, app icon, small UI elements'
    },
    monochrome: {
      description: 'Single color version',
      usage: 'Black and white documents, embossing, watermarks'
    }
  },
  // Logo construction
  construction: {
    wordmark: {
      servi: {
        font: 'Poppins',
        weight: 700,
        color: 'gradient from brand.green to brand.blue',
        tracking: 'tight'
      },
      joy: {
        font: 'Poppins',
        weight: 700,
        color: 'neutral.800',
        tracking: 'tight'
      }
    },
    icon: {
      symbol: 'Stylized "S" with a smile curve underneath',
      colors: 'brand.gradient'
    }
  },
  // Clear space and minimum size requirements
  spacing: {
    clearSpace: '1x height of the logo on all sides',
    minimumSize: {
      print: '1 inch wide',
      digital: '120px wide'
    }
  }
};

// Design principles
export const designPrinciples = {
  simplicity: 'Clean, uncluttered designs that focus on usability and readability',
  consistency: 'Uniform application of brand elements across all touchpoints',
  accessibility: 'Inclusive design that works for all users regardless of ability',
  responsiveness: 'Fluid layouts that adapt seamlessly to all device sizes',
  delight: 'Thoughtful animations and interactions that create joy in the user experience'
};

// Brand personality
export const brandPersonality = {
  trustworthy: 'Reliable, dependable, and honest in all communications',
  friendly: 'Approachable, warm, and personable in tone and visuals',
  professional: 'Competent, efficient, and polished in service delivery',
  innovative: 'Forward-thinking, creative solutions to service needs',
  empowering: 'Enabling users and vendors to achieve their goals with confidence'
};

// Brand voice guidelines
export const brandVoice = {
  tone: 'Friendly, professional, and clear',
  characteristics: [
    'Conversational but not casual',
    'Helpful without being condescending',
    'Concise without sacrificing clarity',
    'Enthusiastic but not overly excitable',
    'Expert but accessible'
  ],
  examples: {
    headlines: [
      'Services that bring joy to your everyday life',
      'Connect with trusted professionals in minutes',
      'Your home deserves the best. So do you.'
    ],
    buttonText: [
      'Get Started',
      'Find Services',
      'Join Our Community',
      'Learn More'
    ]
  }
};

// Export default brand object
export default {
  colors,
  typography,
  logo,
  designPrinciples,
  brandPersonality,
  brandVoice
};