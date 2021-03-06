import { createGlobalStyle } from 'styled-components';

import colors from '../../constants/colors';
import { paddingNumber, paddingUnit } from '../../constants/units';

export default createGlobalStyle`

  @font-face {
    font-family: 'MessinaSans Regular';
    src: url('/assets/fonts/MessinaSansWeb-Regular.woff2') format('woff2'),
      url('/assets/fonts/MessinaSansWeb-Regular.woff') format('woff'),
      url('/assets/fonts/MessinaSans-Regular.otf') format('otf'),
      url('/assets/fonts/MessinaSansWeb-Regular.eot') format('eot');
    font-weight: normal;
    font-style: normal;
  }
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: 'MessinaSans Regular', Helvetica;
    font-weight: normal;
    cursor: url('/assets/YMade_Website_Cursor.png'), auto;
    letter-spacing: -1px;
    @media only screen and (max-width: 380px) {
      font-size: 1.1rem;
    }
    @media only screen and (min-width: 380px) and (max-width: 550px) {
      font-size: 1.2rem;
    }
    @media only screen and (min-width: 550px) and (max-width: 720px) and (orientation: landscape) {
      font-size: 1.3rem;
    }
    @media only screen and (min-width: 550px) and (max-width: 720px) and (orientation: portrait) {
      font-size: 1.4rem;
    }
    @media only screen and (min-width: 720px) and (max-width: 950px) and (orientation: landscape) {
      font-size: 1.4rem;
    }
    @media only screen and (min-width: 720px) and (max-width: 950px) and (orientation: portrait) {
      font-size: 1.4rem;
    }
    @media only screen and (min-width: 950px) and (max-width: 1250px) and (orientation: landscape) {
      font-size: 1.5rem;
    }
    @media only screen and (min-width: 950px) and (max-width: 1250px) and (orientation: portrait) {
      font-size: 1.7rem;
    }
    @media only screen and (min-width: 1250px) and (max-width: 1600px) {
      font-size: 1.6rem;
    }
    @media only screen and (min-width: 1600px) {
      font-size: 1.8rem;
    }
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  .main-heading {
    display: none;
  }

  .contact-header {
    width: ${`calc(100% - ${paddingNumber * 2}${paddingUnit})`};
  }

  .info-text {
    @media only screen and (max-width: 750px) {
      margin-top: ${paddingNumber + paddingUnit};
      position: absolute;
      bottom: ${paddingNumber + paddingUnit};
      left: ${paddingNumber + paddingUnit};
      right: ${paddingNumber + paddingUnit};
    }
    @media only screen and (min-width: 750px) {
      position: absolute;
      bottom: ${paddingNumber + paddingUnit};
      left: ${paddingNumber + paddingUnit};
      right: ${paddingNumber + paddingUnit};
    }
    @media only screen and (min-width: 720px) and (max-width: 950px) and (orientation: portrait) {
      font-size: 1.25rem;
    }
  }

  .contact-text {
    @media only screen and (max-width: 750px) {
      margin-top: ${paddingNumber * 3 + paddingUnit};
    }
    @media only screen and (min-width: 750px) {
      position: absolute;
      bottom: ${paddingNumber + paddingUnit};
      left: ${paddingNumber + paddingUnit};
      right: ${paddingNumber + paddingUnit};
    }
    @media only screen and (min-width: 720px) and (max-width: 950px) and (orientation: portrait) {
      font-size: 1.25rem;
    }
    > a {
      color: ${colors.text};
      text-decoration: none;
      transition: color 0.1s ease;

      &:hover {
        color: ${colors.backgroundMain};
        transition: color 0.2s ease;
      }
    }
  }

`;
