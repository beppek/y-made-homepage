import React from 'react';

import SectionWrapper from '../../components/SectionWrapper';
import ColumnWrapper from '../../components/ColumnWrapper';
import Arrow from '../../components/Arrow';

import colors from '../../constants/colors';

import ArrowWrapper from './ArrowWrapper';
import InfoWrapper from './InfoWrapper';
import InfoTextWrapper from './InfoTextWrapper';
import InfoText from './InfoText';

import upArrow from '../../img/YMade_Website_Arrow_ReturnToTop.svg';
import instagram from '../../img/YMade_Website_Instagram.svg';

const Contact = ({ onArrowClick }) => {
  return (
    <SectionWrapper
      id="contact"
      half
      backgroundColor={colors.backgroundContact}
    >
      <ColumnWrapper>
        <h2 className="contact-header">
          Feel free to contact us to see how we can help with your project.
        </h2>
        <p className="contact-text">
          <a href="tel:0421108764">0421 108 764</a>
          <br />
          <a href="mailto:info@ymade.com.au">info@ymade.com.au</a>
        </p>
      </ColumnWrapper>
      <ColumnWrapper right>
        <ArrowWrapper>
          <Arrow
            onClick={() => onArrowClick(0)}
            src={upArrow}
            alt="Navigational arrow pointing up, clicking scrolls back to the top"
          />
        </ArrowWrapper>
        <InfoWrapper>
          <img
            style={{ height: '50px', position: 'relative', margin: 0 }}
            src={instagram}
            alt="Instagram logo"
          />
          <InfoTextWrapper>
            <InfoText>
              Builders Licence DB-U 59716
              <br />
              Commercial Licence in progress
              <br />
              Master Builder 213768
            </InfoText>
            <InfoText>
              Visit our development company Y Projects | Site by{' '}
              <a target="_blank" href="http://www.susustudio.com/">
                Susu Studio
              </a>
            </InfoText>
          </InfoTextWrapper>
        </InfoWrapper>
      </ColumnWrapper>
    </SectionWrapper>
  );
};

export default Contact;
