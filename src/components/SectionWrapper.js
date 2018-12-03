import styled from 'styled-components';

const SectionWrapper = styled.div`
  height: ${props => (props.half ? '50vh' : '100vh')};
  width: 100%;
  background-color: ${props => props.backgroundColor};
`;

export default SectionWrapper;
