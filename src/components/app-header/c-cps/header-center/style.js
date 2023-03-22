import styled from "styled-components"

const CenterWrapper = styled.div`
 .search-detail {
   position: relative;
   transform-origin: 50% 0;

   .bar-enter {
    opacity: 0;
    transform: scale(2.85714, 1.375) translateY(58px);
   }

   .bar-enter-active {
    opacity: 1;
    transform: scale(1) translateY(0);
    transition: all 250ms ease;
   }

   .bar-exit {
    transform: scale(1) translateY(0);
    opacity: 1;
   }

   .bar-exit-active {
    transform: scale(2.85714, 1.375) translateY(58px);
    transition: all 250ms ease;
    opacity: 0;
   }

   .intor-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
   }

   .intor-exit-active {
    transform: scale(0.35, 0.727273) translateY(-58px);
    transition: all 250ms ease;
    opacity: 0;
   }

   .intor-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
   }

   .intor-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
   }

    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
 }
`

export default CenterWrapper