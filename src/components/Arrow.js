import styled from 'styled-components';

const Arrow = styled.img`
  width: ${props => (props.sideways ? '3.76rem' : '3rem')};
`;

export default Arrow;
