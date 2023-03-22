import styled from "styled-components"

export const PrictureWrapper = styled.div`

.detailBox {
  display: flex;
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  background-color: #333;


  .left, .right {
    position: relative;
    width: 50%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;

    .item {
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    height: 100%;

     img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 350ms ease-in;
    }

    &:hover {
        img {
          transform: scale(1.1);
        }
    }

      .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 9;
      background-color: rgba(0, 0, 0, .3);
      opacity: 0.4;
    }

    &:hover {
      .cover {
        opacity: 0;
      }

    }
   }

    
  }

  .right {

     .right-list {
      display: flex;
      flex-wrap: wrap;
      flex-shrink: 0;
    }


    .item {
      width: 50%;
      height: 50%;
      border: 1px solid #333;
    }
  }
  
  .btn-brw {
    position: absolute;
    right: 20px;
    bottom: 20px;
    border-radius: 4px;
    padding: 5px 8px;
    z-index: 10;
  }
}
`