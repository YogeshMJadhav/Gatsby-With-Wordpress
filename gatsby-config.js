module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
        resolve: "gatsby-source-wordpress",
        options: {
            baseUrl: "localhost/wp/wp_gatsby/dev/",
            protocol: "http",
            hostingWPCOM: false,
            useACF: true,
            verboseOutput: false
        }
    }, 
],
}
