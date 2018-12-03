import React from 'react';

import Wrapper from './Wrapper';
import LogoWrapper from './LogoWrapper';
import ImageWrapper from '../../components/ImageWrapper';
import ArrowWrapper from './ArrowWrapper';

import bigY from '../../img/big-y.png';
import downArrow from '../../img/down-arrow.png';

const Hero = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <h1>Y Made</h1>
      </LogoWrapper>
      <ImageWrapper>
        <img
          src={bigY}
          alt="Pipe and metal bar wrapped together to form the letter Y in caps."
        />
      </ImageWrapper>
      <ArrowWrapper>
        <img src={downArrow} alt="Downward navigational arrow" />
      </ArrowWrapper>
    </Wrapper>
  );
};

export default Hero;
