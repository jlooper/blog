module.exports = {
    postcss: {
		  plugins: [require('tailwindcss')('./tailwind.js'), require('autoprefixer')],
    },
    themeConfig: {
      search: false,
      lastUpdated: 'Last Updated',
      nav: [
        { text: 'Articles', link: '/docs/articles/' },
        { text: 'About', link: '/docs/about/' },
        { text: 'Contact', link: '/docs/contact/' },
        { text: 'Speaking', link: '/docs/speaking/' },
      ]
    }
  }