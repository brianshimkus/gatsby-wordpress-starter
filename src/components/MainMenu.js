import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import SiteInfo from "./SiteInfo"
import "bulma"

const MainMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(
          filter: { name: { eq: "Main Menu" } }
        ) {
          edges {
            node {
              name
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `}
    render={props => (
      <div className="main-nav">
        <div className="logo columns is-centered">
          <div className="column is-3-widescreen">
            <SiteInfo />
          </div>
        </div>
        <div className="main-menu column is-6-widescreen is-offset-3-widescreen">
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
            item => (
              <Link to={item.object_slug} key={item.title}>
                {item.title}
              </Link>
            )
          )}
        </div>
      </div>
    )}
  />
)

export default MainMenu
