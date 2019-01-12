import React from 'react';

import Wrapper from './Wrapper';
import LogoWrapper from './LogoWrapper';
import ImageWrapper from '../../components/ImageWrapper';
import Arrow from '../../components/Arrow';
import Image from '../../components/Image';
import ArrowWrapper from './ArrowWrapper';
import Logo from './Logo';

import logo from '../../img/YMade_Website_Logo.svg';

import bigY from '../../img/YMade_Website_Header.svg';
import downArrow from '../../img/YMade_Website_Arrow_Down.svg';

const Hero = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <h1 className="main-heading">Y Made</h1>
        <Logo src={logo} alt="Y Made" />
      </LogoWrapper>
      <ImageWrapper>
        <Image
          src={bigY}
          alt="Pipe and metal bar wrapped together to form the letter Y in caps."
        />
      </ImageWrapper>
      <ArrowWrapper>
        <Arrow src={downArrow} alt="Downward navigational arrow" />
      </ArrowWrapper>
    </Wrapper>
  );
};

export default Hero;
