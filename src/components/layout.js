import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Helmet from "react-helmet"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import TypekitInit from "./typekit"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(sourceInstanceName: {eq: "images"}, relativePath: {eq: "coffeecup-logo.png"}) {
        childImageSharp {
          fixed(height: 50) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      slack: file(sourceInstanceName: {eq: "images"}, relativePath: {eq: "slack.png"}) {
        childImageSharp {
          fixed(height: 20) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        defaultTitle="CoffeeOps"
        titleTemplate="CoffeeOps - %s">
      </Helmet>
      <TypekitInit/>
      <header>
        <Link to="/"><Img
          fixed={data.logo.childImageSharp.fixed}
          objectFit="cover"
          objectPosition="50% 50%"
          alt="CoffeeOps logo"/> <span id="orgname">CoffeeOps</span></Link>
      </header>
      <content>{children}</content>
      <footer>
        <div>
          <Img
            fixed={data.slack.childImageSharp.fixed}
            objectFit="cover"
            objectPosition="50% 50%"
            alt="Slack logo"/> CoffeeOps is on Slack! Email <a href="mailto:organizers@coffeeops.org">organizers@coffeeops.org</a>.
          Include your email address and reference information about your
          local coffeeops.
        </div>
        <br/>
        <div>&copy; {new Date().getFullYear()},{` `} CoffeeOps crew</div>
        <div id="footer_hashtag">#coffeeops</div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
