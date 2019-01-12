import styled from 'styled-components';

const Image = styled.img`
  height: ${props => (props.height ? props.height : '70%')}!important;
`;

export default Image;
