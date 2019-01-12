import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import SectionWrapper from '../../components/SectionWrapper';
import colors from '../../constants/colors';

const BuildTogether = () => {
  return (
    <StaticQuery
      query={infoQuery}
      render={data => {
        const { frontmatter } = data.allMarkdownRemark.edges[0].node;
        return (
          <SectionWrapper
            id="build-together"
            backgroundColor={colors.backgroundInfo}
          >
            <h2 className="info-header">
              {frontmatter.title}
              <br />
              {frontmatter.subtitle}
            </h2>
            <p className="info-text">{frontmatter.content}</p>
          </SectionWrapper>
        );
      }}
    />
  );
};

export default BuildTogether;

const infoQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/info/" } }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            subtitle
            content
          }
        }
      }
    }
  }
`;
