

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EmilianoLikes = () => (
  <Layout>
    <SEO title="Page two" />
    <Link to="/">Go back to the homepage</Link>
    <a className="twitter-timeline" href="https://twitter.com/emiliano_leite/likes?ref_src=twsrc%5Etfw">
        Tweets Liked by @emiliano_leite
    </a> 
    
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default EmilianoLikes
