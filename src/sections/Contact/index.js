import React from 'react';

import SectionWrapper from '../../components/SectionWrapper';
import colors from '../../constants/colors';

const Contact = () => {
  return (
    <SectionWrapper half backgroundColor={colors.backgroundContact}>
      <h2>Contact Us</h2>
      <p>
        P 0421 108 764
        <br />E info@ymade.com.au
      </p>
    </SectionWrapper>
  );
};

export default Contact;
