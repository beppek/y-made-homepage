import styled from 'styled-components';

const ColumnWrapper = styled.div`
  height: 100%;
  text-align: ${props => (props.right ? 'right' : 'left')};
  @media only screen and (max-width: 750px) {
    width: 100%;
    display: block;
    height: auto;
  }
  @media only screen and (min-width: 750px) {
    float: left;
    width: 50%;
  }
`;

export default ColumnWrapper;
