module.exports = {
	base: '/',
	head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
	title: 'Jen Looper - Developer Advocate based in Boston, MA',
	description: 'Jen Looper, blog, articles, speaking, writing, development, web, mobile',
	postcss: {
		plugins: [require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')],
	},
	themeConfig: {
		search: false,
		lastUpdated: 'Last Updated',
		nav: [
			{ text: 'Articles', link: '/docs/articles/' },
			{ text: 'About', link: '/docs/about/' },
			{ text: 'Contact', link: '/docs/contact/' },
			{ text: 'Speaking', link: '/docs/speaking/' },
		],
	},
	head: [
		[
			'script',
			{},
			`
        var _hmt = _hmt || []; 
        (function() { 
        var hm = document.createElement("script"); 
        hm.src = "https://assets.digitalclimatestrike.net/widget.js"; 
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s); 
        })(); 
    `,
		],
	],
};
