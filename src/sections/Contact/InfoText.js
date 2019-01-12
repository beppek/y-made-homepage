import styled from 'styled-components';

import { paddingNumber, paddingUnit } from '../../constants/units';

const InfoText = styled.p`
  position: relative;
  margin: ${paddingNumber / 2 + paddingUnit} 0 0;
  font-size: 0.6rem;
  line-height: 1rem;
`;

export default InfoText;
