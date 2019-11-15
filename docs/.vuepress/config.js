module.exports = {
	base: '/',
	head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
	title: 'Jen Looper - Developer Advocate based in Boston, MA',
	description: 'Jen Looper, blog, articles, speaking, writing, development, web, mobile',
	postcss: {
		plugins: [
		  require("autoprefixer"),
		  require("tailwindcss")("./tailwind.config.js")
		]
	  },
	themeConfig: {
		search: false,
		lastUpdated: 'Last Updated',
		nav: [
			{ text: 'Articles', link: '/blogs/articles/' },
			{ text: 'About', link: '/blogs/about/' },
			{ text: 'Contact', link: '/blogs/contact/' },
			{ text: 'Speaking', link: '/blogs/speaking/' },
		],
	},
};
