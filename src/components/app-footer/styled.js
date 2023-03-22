import styled from "styled-components"

const FooterWarpper = styled.div`
 display: flex;
 justify-content: center;
 border-top: 1px solid #ededed;
 padding: 48px 20px;

.footer {
  width: 1032px;
  margin: auto;
}

 .list {
  display: flex;
  border-bottom: 1px solid #eee;
 }

 .item {
  margin-bottom: 15px;
  font-weight: 600;
  flex: 1;

  .title {
    color: ${porps => porps.theme.text.primaryColor};
    margin-bottom: 15px;
  }

  .li {
    color: ${porps => porps.theme.text.secondaryColor};
    padding-top: 7px;
  }
 }

 p {
    margin-top: 25px;
    font-weight: 600;
    color: ${porps => porps.theme.text.secondaryColor};
    text-align: center;
  }
`

export default FooterWarpper