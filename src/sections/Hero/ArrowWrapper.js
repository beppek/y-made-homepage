import styled from 'styled-components';

import { paddingNumber, paddingUnit } from '../../constants/units';

const ArrowWrapper = styled.div`
  position: absolute;
  bottom: ${paddingNumber + paddingUnit};
  right: ${paddingNumber + paddingUnit};
`;

export default ArrowWrapper;
