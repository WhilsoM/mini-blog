import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			app: '/src/app',
			widgets: '/src/widgets',
			features: '/src/features',
			entities: '/src/entities',
			pages: '/src/pages',
			shared: '/src/shared',
		},
	},
})
