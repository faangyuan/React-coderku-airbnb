import styled from "styled-components"

const ItemWrapper = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: ${props => props.layoutSize};
  padding: 0 8px;
  cursor: pointer;

  .inner {
    width: 100%;
    margin-bottom: 50px;

    .swiper {
      position: relative;
    
      &:hover .btn {
        opacity: 1;
        z-index: 20;
      }

      .pointer {
      width: 30%;
      position: absolute;
      z-index: 2;
      left: 50%;
      bottom: 10px;
      transform: translateX(-50%);

      .dot-item {
        display: flex;
        width: 20%;

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, .6);

          &.active {
            background-color: rgba(255, 255, 255);
            width: 8px;
            height: 8px;
          }
        }
      }
    }
      
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        z-index: 1;
        background-color: rgba(255, 255, 255, .55);
        border-radius: 50%;
        position: absolute;
        opacity: 0;
        top: 50%;
        transform: translate(0, -50%);
        transition: opacity 200ms ease ;
      }

      .left {
        left: 0;
      }

      .right {
        right: 0;
      }
    }

    

    .cover {
     position: relative;
     box-sizing: border-box;
     padding: 74% 8px 0;
     border-radius: 10px;
     overflow: hidden;

     img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
     }
    }

    .describe {
      margin: 10px 0;

      > span {
      padding: 0 2px;
      font-size: 12px;
      color: ${props => props.desColor};
      font-weight: 600;
      border-radius: 4px;
      background-color: rgba(0,0,0, .1);
    }
    }

    .title {
      font-size: 16px;
      color: #222;
      font-weight: 600;
      overflow: hidden;//超出隐藏
      text-overflow: ellipsis;//超出使用省略号
      display: -webkit-box;
      -webkit-line-clamp: 2;//第几行
      -webkit-box-orient: vertical;
    }

    .price {
      font-weight: 600;
      margin-top: 10px;
    }

    .message {
      margin-left: 5px;
      font-size: 12px;
    }
  }
`

export default ItemWrapper