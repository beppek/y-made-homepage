import styled from 'styled-components';

import { paddingNumber, paddingUnit } from '../../constants/units';

const ArrowWrapper = styled.div`
  position: absolute;
  top: ${paddingNumber + paddingUnit};
  right: ${paddingNumber + paddingUnit};
`;

export default ArrowWrapper;
