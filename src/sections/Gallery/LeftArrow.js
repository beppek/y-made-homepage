import React from 'react';

import ArrowWrapper from './ArrowWrapper';

import leftArrow from '../../img/left-arrow.png';

const LeftArrow = () => {
  return (
    <ArrowWrapper left>
      <img src={leftArrow} alt="Navigational arrow pointing to the left" />
    </ArrowWrapper>
  );
};

export default LeftArrow;
