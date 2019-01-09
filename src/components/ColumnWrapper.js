import styled from 'styled-components';

const ColumnWrapper = styled.div`
  height: 100%;
  width: 50%;
  float: left;
  text-align: ${props => (props.right ? 'right' : 'left')};
`;

export default ColumnWrapper;
