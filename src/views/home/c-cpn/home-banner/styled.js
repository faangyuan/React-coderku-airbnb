import styled from 'styled-components'

const BannerWapper = styled.div`
  position: relative;

  .header {
    height: 600px;
    background: url(${require('@/assets/img/cover_01.jpeg')}) center/cover ;
  }

  .maskLazy {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: rgba(0,0,0, .15);
  }
`

export default BannerWapper