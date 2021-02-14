require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Andre Wru`,
    siteTitleAlt: `Andre Wru <3`,
    siteHeadline: `My positive but opinionated take on code stuff as well as media`,
    siteUrl: `https://andrewru.com`,
    siteDescription: `Blog about frontend, backend, full-stack topics. Includes posts about games, TV-shows, movies and books as well.`,
    siteLanguage: `en`,
    author: `@andre_wru`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Imprint`,
            slug: `/imprint`,
          },
          {
            title: `Privacy`,
            slug: `/privacy`,
          },

        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/andre_wru`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/andre.wru/`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andre Wru blog about all the things I love`,
        short_name: `andre-wru-blog`,
        description: `My personal blog about all sorts of technical full-stack stuff. Also I will blog about games, TV shows, movies and books.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/andrewru-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ].filter(Boolean),

}
