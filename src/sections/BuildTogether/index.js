import React from 'react';

import SectionWrapper from '../../components/SectionWrapper';
import colors from '../../constants/colors';

const BuildTogether = () => {
  return (
    <SectionWrapper backgroundColor={colors.backgroundInfo}>
      <h2>
        Here’s Y We Should <br />
        Build Together...
      </h2>
      <p>
        We build design driven developments that allow our owners to live a full
        life, within a home that has been considered down to the last detail.
        Using a collaborative approach with other like-minded companies, our
        ethos is to design and build modern inner city homes without compromise.
        Our key to success lies in being able to maximise space, and focus on
        what truly adds value, so we can create an attainable and affordable
        homes for the new generation of house buyer.
      </p>
    </SectionWrapper>
  );
};

export default BuildTogether;
