import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import SectionWrapper from '../../components/SectionWrapper';
import colors from '../../constants/colors';

import GalleryControls from './GalleryControls';
import Wrapper from './Wrapper';
import GalleryImageWrapper from './GalleryImageWrapper';
import InnerWrapper from './InnerWrapper';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
    };
  }

  handleArrowClick = (i, length) => {
    const index = this.state.imgIndex;
    let newIndex = index + i;
    if (newIndex >= length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = length - 1;
    }
    this.setState({
      imgIndex: newIndex,
    });
  };

  render() {
    const { imgIndex } = this.state;
    return (
      <StaticQuery
        query={galleryQuery}
        render={data => {
          console.log(data);
          const images = data.allMarkdownRemark.edges;
          const imgs = [];
          images.forEach(img => {
            const { frontmatter } = img.node;
            const { fluid } = frontmatter.file.childImageSharp;
            imgs.push(
              <GalleryImageWrapper>
                <InnerWrapper>
                  <Img
                    critical
                    title={frontmatter.title}
                    fluid={fluid}
                    alt={frontmatter.description}
                  />
                  <p className="image-text">{frontmatter.description}</p>
                </InnerWrapper>
              </GalleryImageWrapper>,
            );
          });
          return (
            <SectionWrapper
              id="gallery"
              backgroundColor={colors.backgroundMain}
            >
              <Wrapper>
                {imgs[imgIndex]}
                <GalleryControls
                  onArrowClick={i => this.handleArrowClick(i, images.length)}
                />
              </Wrapper>
            </SectionWrapper>
          );
        }}
      />
    );
  }
}

export default Gallery;

const galleryQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/gallery/" } }) {
      edges {
        node {
          frontmatter {
            title
            description
            file {
              childImageSharp {
                fluid(maxWidth: 550) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
