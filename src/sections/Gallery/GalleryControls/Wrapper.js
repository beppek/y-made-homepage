import styled from 'styled-components';

import { paddingNumber, paddingUnit } from '../../../constants/units';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - ${paddingNumber + paddingUnit});
`;

export default Wrapper;
