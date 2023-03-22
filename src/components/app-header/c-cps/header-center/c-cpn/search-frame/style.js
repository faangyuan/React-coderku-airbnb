import styled from "styled-components"

export const FrameWrapper = styled.div`
 display: flex;
 width: 260px;
 justify-content: space-between;
 padding: 0 20px;
 height: 48px;
 align-items: center; 
 border-radius: 25px;
 border: 1px solid #ededed;
 ${props => props.theme.mixins.boxShodow}

 .left {
  font-weight: 600;
 }

 .right {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  color: #fff;
  background-color: ${props => props.theme.color.primary};
 }
`