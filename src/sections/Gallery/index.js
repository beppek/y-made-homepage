import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import SectionWrapper from '../../components/SectionWrapper';
import ImageWrapper from '../../components/ImageWrapper';
import colors from '../../constants/colors';

import GalleryControls from './GalleryControls';
import Wrapper from './Wrapper';

const Gallery = () => {
  return (
    <StaticQuery
      query={galleryQuery}
      render={data => {
        console.log(data);
        const { frontmatter } = data.allMarkdownRemark.edges[0].node;
        return (
          <SectionWrapper backgroundColor={colors.backgroundMain}>
            <Wrapper>
              <ImageWrapper>
                <img
                  title={frontmatter.title}
                  style={{ height: '75%' }}
                  src={frontmatter.file}
                  alt={frontmatter.description}
                />
              </ImageWrapper>
              <GalleryControls />
            </Wrapper>
          </SectionWrapper>
        );
      }}
    />
  );
};

export default Gallery;

const galleryQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/gallery/" } }) {
      edges {
        node {
          frontmatter {
            title
            description
            file
          }
        }
      }
    }
  }
`;
