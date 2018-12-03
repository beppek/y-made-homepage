import styled from 'styled-components';

import colors from '../../constants/colors';

console.log(colors.backgroundMain);

const PageWrapper = styled.div`
  color: ${colors.text};
  background-color: ${colors.backgroundMain};
  margin: 0;
  padding: 0;
`;

export default PageWrapper;
