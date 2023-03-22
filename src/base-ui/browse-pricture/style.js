import styled from 'styled-components'

export const PrictureWrapper = styled.div`
  position: fixed;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: #333;

  .header {
    position: relative;
    height: 86px;

    .close {
      position: absolute;
      cursor: pointer;
      padding: 16px 28px 8px;
      top: 10px;
      right: 0;
    }
  }

  .content {
    flex: 1;
    position: relative;

    .left, .right {
      width: 75px;
      padding: 2px;
      display: flex;
      align-items: center;
    }

    .left {
      position: absolute;
      left: 0;
    }

    .right {
      position: absolute ;
      right: 0;
    }

    .pricture {
      position: relative;
      height: 100%;
      max-width: 105vh;
      overflow: hidden;
      margin: 0 auto;

      img {
        width: 100%;
        overflow: hidden;
      }

      .pic-enter {
        transform: translateX(100%);
        opacity: 0;
      }

      .pic-enter-active {
        transform: translateX(0);
        opacity: 1;
        transition: all 200ms ease;
      }

      .pic-exit {
        opacity: 1;
      }

      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
        }
      }

  .footer {
    height: 99px;
    margin-bottom: 30px;

    .desc {
      height: 21px;
    }

    .info {
      max-width: 105vh;
      height: 100%;
      margin:0  auto;
    }

    .list {
      margin: -8px;
    }

    .item {
      position: relative;
      box-sizing: border-box;
      width: 20%;
      margin: 0 8px;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }

      .cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        opacity: .5;
        background-color: rgba(0,0,0, .4);
      }

      .active {
        opacity: 0;
      }
    }
  }


`