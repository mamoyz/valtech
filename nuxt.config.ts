// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: 'en'
			}
		}
	},
	css: ['~/assets/scss/main.scss'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	modules: [
		[
			'@nuxt/image-edge',
			{
				screens: {
					xs: 320,
					sm: 640,
					md: 768,
					lg: 1024,
					xl: 1280,
					xxl: 1536,
					'2xl': 1536
				}
			}
		],
		[
			'@pinia/nuxt',
			{
				autoImports: [
					// automatically imports `defineStore`
					'defineStore', // import { defineStore } from 'pinia'
					// automatically imports `defineStore` as `definePiniaStore`
					['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
				]
			}
		]
	],

	runtimeConfig: {
		public: {
			title: 'Contact List',
			userUrl: 'https://randomuser.me/api/',
			numberCards: 120,
			tabs: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
		}
	}
})
