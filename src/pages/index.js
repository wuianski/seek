/**
 * Manually create index page, render query data. 
 * 
 * Add link to pages, which created by gatsby-node.js
 */

import React from "react"
import { css } from "@emotion/react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export const query = graphql`
  query {
    allPages(filter: { sort: { ne: 5 } }, sort: { order: ASC, fields: sort }) {
      totalCount
      edges {
        node {
          id
          slug
          title_en_us
          title_zh_hant_tw
          tag_name
        }
      }
    }
  }
`

export default function Home({ data }) {
  //console.log(data)
  return (
    <Layout>
      <div>
        <h4>{data.allPages.totalCount} Pages</h4>
        {data.allPages.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.slug}
              css={css`
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.title_zh_hant_tw}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.title_en_us}
                </span>
              </h3>
              <p>{node.tag_name}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}


