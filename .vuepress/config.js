module.exports = {
    base: '/blog/',
    title: 'Jen Looper - Developer Advocate based in Boston, MA',
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