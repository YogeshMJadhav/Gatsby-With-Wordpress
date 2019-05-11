import React from 'react'
import { Link, graphql } from 'gatsby'
class Home extends React.Component{

    render(){
        const content = this.props.data.allWordpressPost.edges;
        console.log(content);
        
        return(
            content.map((item,value)=>{
                return(
                    <div key="value">
                        {/* <h1>This is the Demo Page for Wordpress.............. </h1> */}
                        <div
                            dangerouslySetInnerHTML={{
                            __html:item.node.content,
                            }}
                        />
                        {/* <Link to="/">Go back to the homepage</Link> */}
                    </div>

                )
            })
        )
    }
}
export default Home;

export const pageQuery = graphql`{
     allWordpressPost{
        edges{
          node{
            title
            content
          }
        }
    }
}
`
