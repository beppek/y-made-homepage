import styled from 'styled-components';

import { paddingNumber, paddingUnit } from '../../constants/units';

const InnerWrapper = styled.div`
  /* LANDSCAPE STYLES */
  @media only screen and (orientation: landscape) and (min-height: 0px) and (max-height: 480px) {
    max-width: ${props => (props.portrait ? '30%' : '40%')};
    .image-text {
      font-size: 0.3rem !important;
    }
  }
  @media only screen and (orientation: landscape) and (min-height: 481px) and (max-height: 537px) {
    max-width: ${props => (props.portrait ? '35%' : '45%')};
    .image-text {
      font-size: 0.4rem !important;
    }
  }
  @media only screen and (orientation: landscape) and (min-height: 538px) and (max-height: 580px) {
    max-width: ${props => (props.portrait ? '40%' : '55%')};
    .image-text {
      font-size: 0.4rem !important;
    }
  }
  @media only screen and (orientation: landscape) and (min-height: 581px) and (max-height: 620px) {
    max-width: ${props => (props.portrait ? '45%' : '60%')};
    .image-text {
      font-size: 0.4rem !important;
    }
  }
  @media only screen and (orientation: landscape) and (min-height: 621px) and (max-height: 750px) {
    max-width: ${props => (props.portrait ? '50%' : '60%')};
    .image-text {
      font-size: 0.5rem !important;
    }
  }
  @media only screen and (orientation: landscape) and (min-height: 751px) and (max-height: 900px) {
    max-width: ${props => (props.portrait ? '60%' : '75%')};

    .image-text {
      font-size: 0.6rem !important;
    }
  }
  @media only screen and (orientation: landscape) and (min-height: 901px) and (max-height: 1080px) {
    max-width: ${props => (props.portrait ? '65%' : '70%')};

    .image-text {
      font-size: 0.8rem !important;
    }
  }
  @media only screen and (orientation: landscape) and (min-height: 1081px) and (max-height: 1600px) {
    max-width: ${props => (props.portrait ? '85%' : '90%')};

    .image-text {
      font-size: 1rem !important;
    }
  }
  @media only screen and (orientation: landscape) and (min-height: 1601px) and (max-height: 2400px) {
    /* max-width: ${props => (props.portrait ? '85%' : '90%')}; */
    max-width: 100%;

    .image-text {
      font-size: 1rem !important;
    }
  }
  /* END LANDSCAPE STYLES */

  /* PORTRAIT STYLES */
  @media only screen and (orientation: portrait) and (min-width: 0px) and (max-width: 350px) {
    .image-text {
      font-size: 0.4rem !important;
    }
  }
  @media only screen and (orientation: portrait) and (min-width: 351px) and (max-width: 900px) {
    .image-text {
      font-size: 0.5rem !important;
    }
  }
  /* END PORTRAIT STYLES */

  /* GENERAL STYLES */
  max-width: 75%;
  width: 100vw;
  max-height: calc(100vh - ${paddingNumber + paddingUnit});
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% + ${paddingNumber / 2 + paddingUnit}));

  .gatsby-image-wrapper > img {
    width: auto;
    object-fit: contain;
  }

  .image-text {
    text-align: center;
    margin: 0.5rem auto;
    font-size: 0.8rem;
  }
`;

export default InnerWrapper;
