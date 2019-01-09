import styled from 'styled-components';

import { paddingNumber, paddingUnit } from '../constants/units';

const SectionWrapper = styled.div`
  height: ${props =>
    props.half ? '50vh' : `calc(100vh - ${paddingNumber * 2}${paddingUnit})`};
  width: ${`calc(100% - ${paddingNumber * 2}${paddingUnit})`};
  background-color: ${props => props.backgroundColor};
  position: relative;
  padding: ${paddingNumber + paddingUnit};
`;

export default SectionWrapper;
