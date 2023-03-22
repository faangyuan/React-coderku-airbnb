import styled from 'styled-components'

const Wrpper = styled.div`
 flex: 1;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 cursor: pointer;

 .btns {
  display: flex;
  margin-right: 14px;
  font-weight: 600;

  .btn {
    padding: 10px 12px;
    border-radius: 20px;
    &:hover {
      background-color: rgba(0, 0, 0, .18);
    }
  }
 }

 .prifile {
  position: relative;
  display: flex;
  width: 60px;
  color: ${props => props.theme.text.secondaryColor};
  align-items: center;
  border-radius: 20px;
  padding: 5px 5px 5px 12px;
  border: 1px solid #ddd;

  ${props => props.theme.mixins.boxShodow}
  
  .iconUser {
    margin-left: 10px;
  }

  .framework {
    position: absolute;
    padding: 5px 0;
    width: 240px;
    right: 0;
    color: ${props => props.theme.text.primaryColor};
    top: 50px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 0px 4px rgba(0,0,0, .16);
    z-index: 1000;

    .register {
      font-weight: 600;
    }

    .item {
      padding: 12px 15px;
      
      &:hover {
        background-color: rgba(0, 0, 0, .05);
      }
    }

    .top {
      border-bottom: 1px solid #ededed;
    }
  }
 }
`

export default Wrpper