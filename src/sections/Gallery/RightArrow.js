import React from 'react';

import ArrowWrapper from './ArrowWrapper';

import rightArrow from '../../img/right-arrow.png';

const RightArrow = () => {
  return (
    <ArrowWrapper right>
      <img src={rightArrow} alt="Navigational arrow pointing to the right" />
    </ArrowWrapper>
  );
};

export default RightArrow;
