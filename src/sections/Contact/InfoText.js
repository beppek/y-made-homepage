import styled from 'styled-components';

import { paddingNumber, paddingUnit } from '../../constants/units';
import colors from '../../constants/colors';

const InfoText = styled.p`
  position: relative;
  margin: ${paddingNumber / 2 + paddingUnit} 0 0;
  font-size: 0.6rem;
  line-height: 1rem;
  > a {
    color: ${colors.text};
    text-decoration: none;
    font-size: 0.6rem;
    line-height: 1rem;
    transition: color 0.1s ease;
    &:hover {
      color: ${colors.backgroundMain};
      transition: color 0.2s ease;
    }
  }
`;

export default InfoText;
