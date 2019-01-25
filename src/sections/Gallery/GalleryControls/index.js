import React from 'react';

import leftArrow from '../../../img/YMade_Website_Arrow_Left.svg';
import rightArrow from '../../../img/YMade_Website_Arrow_Right.svg';
import Arrow from '../../../components/Arrow';

import ArrowWrapper from '../ArrowWrapper';
import Wrapper from './Wrapper';

const GalleryControls = ({ onArrowClick }) => {
  return (
    <Wrapper>
      <ArrowWrapper left>
        <Arrow
          sideways
          onClick={() => onArrowClick(-1)}
          src={leftArrow}
          alt="Navigational arrow pointing to the left. Changes to previous image in slideshow."
        />
      </ArrowWrapper>
      <ArrowWrapper right>
        <Arrow
          sideways
          onClick={() => onArrowClick(+1)}
          src={rightArrow}
          alt="Navigational arrow pointing to the right. Changes to next image in slideshow."
        />
      </ArrowWrapper>
    </Wrapper>
  );
};

export default GalleryControls;
