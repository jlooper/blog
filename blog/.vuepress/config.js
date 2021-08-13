module.exports = {
  base: "/",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  title: "Jen Looper - Developer Advocate based in Boston, MA",
  description:
    "Jen Looper, blog, articles, speaking, writing, development, web, mobile",
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js"),
    ],
  },

  themeConfig: {
    search: false,
    algolia: {
      apiKey: "9b7a092b1c2ced928fcb302010fd432d",
      indexName: "jenlooper",

    },
    lastUpdated: "Last Updated",
    nav: [
      { text: "Featured", link: "/" },
      { text: "Articles", link: "/sections/articles/" },
      { text: "About", link: "/sections/about/" },
      { text: "Contact", link: "/sections/contact/" },
      { text: "Speaking", link: "/sections/speaking/" },
    ],
  },
};
