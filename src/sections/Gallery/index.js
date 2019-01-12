import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import SectionWrapper from '../../components/SectionWrapper';
import ImageWrapper from '../../components/ImageWrapper';
import Image from '../../components/Image';
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
          const imgs = [];
          images.forEach(img => {
            const { frontmatter } = img.node;
            imgs.push(
              <Image
                title={frontmatter.title}
                src={frontmatter.file}
                alt={frontmatter.description}
              />,
            );
          });
          return (
            <SectionWrapper backgroundColor={colors.backgroundMain}>
              <Wrapper>
                <ImageWrapper>
                  {imgs[imgIndex]}
                  <p className="image-text">
                    {images[imgIndex].node.frontmatter.description}
                  </p>
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
