import styled from 'styled-components'

const Wrpper = styled.div`
  flex: 1;
  display: flex;
  color: ${props => props.theme.color.primary};
  align-items: center;

  .logo {
    cursor: pointer;
  }

 .titleImage {
   width: 162px;
   height: 20px;
   padding-left: 12px;
   vertical-align: bottom;
 }
`

export default Wrpper