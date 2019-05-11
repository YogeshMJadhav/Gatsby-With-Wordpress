import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ data }) => {
 const nav = data.map((item,value)=>{
  return(
    <Link key={value} to={item.node.slug}>{item.node.title}</Link>
    )  
  })
  return(
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        { nav }
        <Link 
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/* {data} */}
        </Link>
      </h1>
    </div>
  </header>
  )

}
// Header.propTypes = {
//   data: PropTypes.string,
// }

// Header.defaultProps = {
//   data: ``,
// }

export default Header
