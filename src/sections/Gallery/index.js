import React from 'react';

import SectionWrapper from '../../components/SectionWrapper';
import ImageWrapper from '../../components/ImageWrapper';
import colors from '../../constants/colors';

import constructionWorker from '../../img/builder.jpg';

import GalleryControls from './GalleryControls';
import Wrapper from './Wrapper';

const BuildTogether = () => {
  return (
    <SectionWrapper backgroundColor={colors.backgroundMain}>
      <Wrapper>
        <ImageWrapper>
          <img
            style={{ height: '75%' }}
            src={constructionWorker}
            alt="construction worker in st kilda doing his thing."
          />
        </ImageWrapper>
        <GalleryControls />
      </Wrapper>
    </SectionWrapper>
  );
};

export default BuildTogether;
