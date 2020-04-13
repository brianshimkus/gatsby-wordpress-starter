import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"
import "bulma"

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
  margin: auto 0;
`

const SiteInfo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressSiteMetadata {
          edges {
            node {
              url
            }
          }
        }
        wordpressWpLogo {
          url {
            source_url
          }
        }
      }
    `}
    render={props => (
      <SiteInfoWrapper>
        <Link to={props.allWordpressSiteMetadata.edges[0].node.link}>
          <img src={props.wordpressWpLogo.url.source_url} alt="logo" />
        </Link>
      </SiteInfoWrapper>
    )}
  />
)

export default SiteInfo
