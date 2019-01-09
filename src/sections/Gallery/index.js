import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import SectionWrapper from '../../components/SectionWrapper';
import ImageWrapper from '../../components/ImageWrapper';
import colors from '../../constants/colors';

import GalleryControls from './GalleryControls';
import Wrapper from './Wrapper';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
    };
  }

  handleArrowClick = (i, length) => {
    console.log(i);
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
          console.log(images);
          console.log(imgIndex);
          console.log(images.length);
          const { frontmatter } = images[imgIndex].node;
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
            file
          }
        }
      }
    }
  }
`;
