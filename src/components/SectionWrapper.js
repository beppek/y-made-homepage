import styled from 'styled-components';

import { paddingNumber, paddingUnit } from '../constants/units';

const SectionWrapper = styled.div`
  @media only screen and (max-width: 750px) {
    height: calc(100vh - ${paddingNumber * 2 + paddingUnit});
  }
  @media only screen and (min-width: 750px) {
    height: ${props =>
      props.half ? '50vh' : `calc(100vh - ${paddingNumber * 2}${paddingUnit})`};
  }
  width: ${`calc(100% - ${paddingNumber * 2}${paddingUnit})`};
  background-color: ${props => props.backgroundColor};
  position: relative;
  padding: ${paddingNumber + paddingUnit};
`;

export default SectionWrapper;
