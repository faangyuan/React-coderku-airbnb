import styled from 'styled-components'

const HeaderWrapper = styled.div`
 box-sizing: border-box;
 z-index: 999;
 position: ${props => props.isFixed ? 'fixed' : 'reactive'};
 top: 0;
 left: 0;
 right: 0;
 padding:  0 24px;
 background-color: #fff;
 border-bottom: 1px solid #eee;

 .header {
  display: flex;
  height: 80px;
  align-items: center;
 }

 .cover {
  position: fixed;
  top: 180px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0, .2);
 }
`

export const SearchTabWrapper = styled.div`
  height: ${props => props.isShowHeight ? '100px' : '0' };
  transition: height 200ms ease;
`


export default HeaderWrapper