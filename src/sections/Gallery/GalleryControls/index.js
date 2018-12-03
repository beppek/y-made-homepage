import React from 'react';

import leftArrow from '../../../img/left-arrow.png';
import rightArrow from '../../../img/right-arrow.png';

import ArrowWrapper from '../ArrowWrapper';
import Wrapper from './Wrapper';

const GalleryControls = () => {
  return (
    <Wrapper>
      <ArrowWrapper left>
        <img src={leftArrow} />
      </ArrowWrapper>
      <ArrowWrapper right>
        <img src={rightArrow} />
      </ArrowWrapper>
    </Wrapper>
  );
};

export default GalleryControls;
