import styled from "styled-components"

export const SectionWrapper = styled.div`
.list {
  margin-top: 20px;
  display: flex;
  border: 1px solid #ddd;
  border-radius: 30px;
  overflow: hidden;

  .item {
    box-sizing: border-box;
    width: 264px;
    padding: 14px 24px;

     &:hover {
      background-color: #f7f7f7;
    }
  }

  .title {
    font-weight: 600;
    font-size: 12px;
  }

  .desc {
    padding-top: 5px;
    color: #717171;
  }

  .divider {
    width: 1px;
    height: 1px;
    border: 1px solid #717171;
  }
 
}
`