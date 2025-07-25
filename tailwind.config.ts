import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
					dim: 'hsl(var(--primary-dim))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))'
				},
				golden: {
					DEFAULT: 'hsl(var(--golden))',
					glow: 'hsl(var(--golden-glow))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-neural': 'var(--gradient-neural)',
				'gradient-consciousness': 'var(--gradient-consciousness)',
				'gradient-introspection': 'var(--gradient-introspection)',
				'gradient-cosmic': 'var(--gradient-cosmic)',
				'gradient-neural-flow': 'var(--gradient-neural-flow)'
			},
			boxShadow: {
				'neural': 'var(--shadow-neural)',
				'consciousness': 'var(--shadow-consciousness)',
				'glow': 'var(--shadow-glow)',
				'cosmic': 'var(--shadow-cosmic)'
			},
			transitionTimingFunction: {
				'neural': 'var(--transition-neural)',
				'consciousness': 'var(--transition-consciousness)',
				'cosmic': 'var(--transition-cosmic)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'neural-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(var(--primary) / 0.5)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(var(--primary) / 0.8)',
						transform: 'scale(1.02)'
					}
				},
				'consciousness-flow': {
					'0%': { 
						backgroundPosition: '0% 50%'
					},
					'50%': { 
						backgroundPosition: '100% 50%'
					},
					'100%': { 
						backgroundPosition: '0% 50%'
					}
				},
				'introspection-spin': {
					'0%': { 
						transform: 'rotate(0deg)',
						opacity: '0.3'
					},
					'50%': { 
						opacity: '0.8'
					},
					'100%': { 
						transform: 'rotate(360deg)',
						opacity: '0.3'
					}
				},
				'data-stream': {
					'0%': { 
						transform: 'translateY(-10px)',
						opacity: '0'
					},
					'10%': { 
						opacity: '1'
					},
					'90%': { 
						opacity: '1'
					},
					'100%': { 
						transform: 'translateY(100vh)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'neural-pulse': 'neural-pulse 3s ease-in-out infinite',
				'consciousness-flow': 'consciousness-flow 8s ease-in-out infinite',
				'introspection-spin': 'introspection-spin 12s linear infinite',
				'data-stream': 'data-stream 4s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
