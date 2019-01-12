import styled from 'styled-components';

import { paddingNumber, paddingUnit } from '../../constants/units';

const InfoWrapper = styled.div`
  height: auto;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: ${paddingNumber + paddingUnit};
  margin-right: ${paddingNumber + paddingUnit};
`;

export default InfoWrapper;
