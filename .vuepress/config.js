module.exports = {
    postcss: {
		plugins: [require('tailwindcss')('./tailwind.js'), require('autoprefixer')],
	},
    themeConfig: {
      search: false,
      lastUpdated: 'Last Updated',
      nav: [
        { text: 'Blog', link: '/blog/' },
        { text: 'About', link: '/about/' },
        { text: 'Contact', link: '/contact/' },
        { text: 'Projects', link: '/projects/' },
        { text: 'Speaking', link: '/speaking/' },
      ],
      sidebar: [
        '/',
        ['/blog/intro.md', 'Blog'],
        ['/', 'Resume'],
      ],
    }
  }