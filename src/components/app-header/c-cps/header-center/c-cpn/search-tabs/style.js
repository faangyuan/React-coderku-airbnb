import styled from "styled-components"

export const TabsWrapper = styled.div`
.title-list {
  display: flex;
  min-width: 348px;
  align-content: center;
  color: #222;
  justify-content: center;
  font-size: 16px !important;

  .title-item {
    margin: 10px 16px;
    line-height: 40px;
  }

  .active {
    border-bottom: 3px solid #222;
  }
}
`