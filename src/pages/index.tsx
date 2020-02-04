import React, { FC } from "react"
import { graphql } from "gatsby"
import { IndexPageQuery } from "../../types/graphql-types"
import { Image } from "../app/designSystem/atoms/image/image"

/* graphql types are created with codegen. In order to work you must name your queries */
interface IIndexPageQueryProps {
  data: IndexPageQuery
  location: Location
}

const IndexPage: FC<IIndexPageQueryProps> = ({ data }) => (
  <div>
    <span>{data.site?.siteMetadata?.title}</span>
    <div style={{ width: "200px", height: "200px" }}>
      <Image />
    </div>
  </div>
)

export default IndexPage

export const INDEX_PAGE_QUERY = graphql`
  query indexPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`
