import styled from 'styled-components';

import { paddingNumber, paddingUnit } from '../../constants/units';

const InnerWrapper = styled.div`
  position: absolute;
  /* width: 100%; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% + ${paddingNumber + paddingUnit}));

  .image-text {
    text-align: center;
    margin: 0.5rem auto;
    font-size: 0.6rem;
  }
`;

export default InnerWrapper;
