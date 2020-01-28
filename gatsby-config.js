module.exports = {
  siteMetadata: {
    title: `Alex Entrepreneur`,
    name: `Alex Entrepreneur`,
    siteUrl: `https://alexentrepreneur.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: ``,
      maxWidth: 652,
    },
    social: [
      {
        name: `youtube`,
        url: `https://www.youtube.com/channel/UCaA-t-VlLLsewMkkCCy-CRg`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/alexentrprnr`,
      },
      // {
      //   name: `github`,
      //   url: `https://github.com/narative`,
      // },
      {
        name: `instagram`,
        url: `https://instagram.com/alexentrepreneur`,
      },
      // {
      //   name: `linkedin`,
      //   url: `https://www.linkedin.com/company/narative/`,
      // },
      // {
      //   name: `dribbble`,
      //   url: `https://dribbble.com/narativestudio`,
      // },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
