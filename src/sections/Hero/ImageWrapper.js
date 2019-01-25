import styled from 'styled-components';

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 250px;
  position: relative;

  > img {
    @media only screen and (max-width: 750px) {
      max-width: 75%;
      max-height: 75%;
    }
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    margin: auto;
  }
`;

export default ImageWrapper;
