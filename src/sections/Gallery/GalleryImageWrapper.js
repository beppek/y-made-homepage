import styled from 'styled-components';

const GalleryImageWrapper = styled.div`
  margin: auto;
  max-height: 100vh;
  max-width: ${props => (props.width ? props.width : '550px')}!important;
  height: 100%;
  position: relative;
`;

export default GalleryImageWrapper;
