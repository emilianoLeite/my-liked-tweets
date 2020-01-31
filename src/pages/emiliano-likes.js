

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import tweetStyles from "./tweet.module.scss"

export default function EmilianoLikes({data}) {
  return (
    <Layout>
      <SEO title="Page two" />
      <nav>
        <Link to="/">Go back to the homepage</Link>
      </nav>
      <header>
        <h1> Emiliano likes these tweets: </h1>
      </header>
      {
        data.allTwitterFavoritesListMyLikes.nodes.map((tweet) => { 
          return (
            <section key={tweet.id} className={tweetStyles.tweet}>
              <header>
                <a target="_blank" href={`https://twitter.com/${tweet.user.screen_name}`}>
                  <h4 className={tweetStyles.userName}> {tweet.user.name} </h4> <span className={tweetStyles.handle}> @{tweet.user.screen_name} </span>
                </a>
              </header>
              <p>
                {tweet.text} 
              </p>
            </section>
          ) 
        })
      }
      
      <nav>
        <Link to="/">Go back to the homepage</Link>
      </nav>
    </Layout>
  );
} 


export const query = graphql` 
query MyQuery {
  allTwitterFavoritesListMyLikes(sort: {fields: created_at, order: ASC}) {
    nodes {
      id
      text
      created_at
      user {
        name
        screen_name
      }
    }
  }
}
` 
