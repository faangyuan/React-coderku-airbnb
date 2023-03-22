import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  z-index: 99;
  align-items: center;
  height: 48px;
  padding: 0 24px;
  border-bottom: 1px solid #eee;

  .right {
    display: flex;
    cursor: pointer;
    align-items: center;
    
    .text {
      font-weight: 600;
      padding-right: 10px;
    }
  }
`