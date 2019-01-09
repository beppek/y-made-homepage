import React from 'react';

import SectionWrapper from '../../components/SectionWrapper';
import ColumnWrapper from '../../components/ColumnWrapper';
import colors from '../../constants/colors';

const Contact = () => {
  return (
    <SectionWrapper half backgroundColor={colors.backgroundContact}>
      <ColumnWrapper>
        <h2 className="contact-header">
          Feel free to contact us to see how we can help with your project.
        </h2>
        <p className="info-text">
          0421 108 764
          <br />
          info@ymade.com.au
        </p>
      </ColumnWrapper>
      <ColumnWrapper right>
        <p>Other stuff goes here</p>
      </ColumnWrapper>
    </SectionWrapper>
  );
};

export default Contact;
