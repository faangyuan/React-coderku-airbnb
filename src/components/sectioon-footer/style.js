
import styled from 'styled-components'

const FooterWrapper = styled.div`
 margin-top: 10px;
 box-sizing: border-box;
 display: flex;

 .info {
  display: flex;
  align-items: center;
  cursor: pointer;

  .text {
    color: ${props => props.color};
    font-size: 17px;
    font-weight: 600;
    margin-right: 10px;

    &:hover {
      text-decoration: underline;
    }
  }
 }
`

export default FooterWrapper