import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
 	plugins: [vue()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@import "@/scss/_variables.scss";
					@import "@/scss/_mixins.scss";
				`
			}
		}
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
});
