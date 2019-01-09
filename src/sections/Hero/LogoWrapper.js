import styled from 'styled-components';

import { paddingNumber, paddingUnit } from '../../constants/units';

const LogoWrapper = styled.div`
  width: ${`calc(100% - ${paddingNumber + paddingUnit})`};
  position: absolute;
  top: ${paddingNumber + paddingUnit};
  left: ${paddingNumber + paddingUnit};
`;

export default LogoWrapper;
