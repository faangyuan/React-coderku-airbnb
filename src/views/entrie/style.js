import styled from "styled-components"

export const EntrieWrapper = styled.div`
  position: relative;

   > .cover {
    position: absolute;
    display: flex;
    align-content: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(255, 255, 255, .4);
  }

  .content {
  padding: 50px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
`