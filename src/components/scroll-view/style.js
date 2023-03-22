import styled from "styled-components"

const ScrollWrapper = styled.div`
  position: relative;

  .content {
    overflow: hidden;  

    .scroll-cotent {
      display: flex;
      transition: transform 250ms ease;
    }
  }


.control {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0 auto;


  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #eee;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    box-shadow: 1px 1px 8px #eee;
  }

  .left {
    left: -32px;
  }

  .right {
    right: -32px;
  }
}

`

export default ScrollWrapper