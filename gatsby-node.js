const path = require(`path`)
const pageTemplate = path.resolve(`./src/templates/page.js`)
exports.createPages = async ({ graphql, actions }) => {
 const { createPage } = actions

 const result = await graphql(`
   {
    allWordpressPage{
        edges{
            node{
                id
                title
                slug
            }
        }
   }
   allWordpressPost{
    edges{
        node{
            id
            title
            slug
        }
    }
}
   }
 `)
 if (result.errors) {
   throw new Error(result.errors)
 }

 result.data.allWordpressPage.edges.forEach(edge => {
   createPage({
     path: edge.node.slug,
     component:pageTemplate,
     context: {
       id: edge.node.id,
     },
   })
 })
}

const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

const pageQuery = `
{
  allWordpressPage {
    edges {
      node {
        id
        slug
        status
        template
      }
    }
  }
}
`

const postsQuery = `
{
  allWordpressPost {
    edges {
      node {
        id
        slug
        status
        template
        format
       
      }
    }
  }
}
`


exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;


    return new Promise((resolve, reject) => {

        // Pages
        graphql(pageQuery)
            .then(result => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors);
                }

                const pageTemplate = path.resolve("./src/templates/page.js");
                //const ongoingTemplate = path.resolve("./src/templates/Onging.js");

                _.each(result.data.allWordpressPage.edges, edge => {
                    createPage({
                        path: `/${edge.node.slug}/`,
                        component: slash(pageTemplate),
                        //component: slash(ongoingTemplate),
                        context: {
                            id: edge.node.id,
                        },
                    });
                });
            })

            .then(() => {
                graphql(postsQuery)
                    .then(result => {
                        if (result.errors) {
                            console.log(result.errors);
                            reject(result.errors);
                        }
                        const postTemplate = path.resolve("./src/templates/post.js");

                        _.each(result.data.allWordpressPost.edges, edge => {
                            createPage({
                                path: `/post/${edge.node.slug}/`,
                                component: slash(postTemplate),
                                context: {
                                    id: edge.node.id,
                                },
                            });
                        });
                        resolve();
                    });
            });
        // ==== END POSTS ====
    });
};
