import { createGlobalStyle } from 'styled-components';

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
    font-size: 1.8rem;
    font-weight: normal;
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
    position: absolute;
    bottom: ${paddingNumber + paddingUnit};
    left: ${paddingNumber + paddingUnit};
    right: ${paddingNumber + paddingUnit};
  }

`;
