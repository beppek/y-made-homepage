import styled from 'styled-components';

const ArrowWrapper = styled.div`
  float: ${props => (props.left ? 'left' : 'right')};
  margin: 0;
`;

export default ArrowWrapper;
