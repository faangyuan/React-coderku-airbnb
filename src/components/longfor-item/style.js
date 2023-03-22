
import styled from "styled-components"

const ItemWrapper = styled.div`
  flex-shrink: 0;
  width: 20%;
  overflow: hidden;

 
  .inner {
    position: relative;
    padding: 0 8px;
  }
  
  .cover {
    width: 100%;
    border-radius: 5px;
  }

  .cover-bg {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 0px;
    height: 35%;
    background-color: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);
  }

  .info {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 50%;
    top: 80%;
    color: #fff;
    transform: translate(-50%, -50%);

    .city {
      font-weight: 700;
      font-size: 16px;
      padding-bottom: 10px;
    }

    .price {
      font-size: 12px;
    }
  }
`

export default ItemWrapper