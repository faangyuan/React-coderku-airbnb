import styled from "styled-components";

const TbasWrapper = styled.div`
  margin-bottom: 15px;

  .tab {
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0;
    text-align: center;
    padding: 14px 16px;
    border: 1px solid #eee;
    cursor: pointer;
    margin-right: 20px;
    border-radius: 5px;
    white-space: nowrap;

  &:nth-last-child() {
    margin-right: 0;
  }

    ${props => props.theme.mixins.boxShodow}
  }

  .active {
    background-color: ${props => props.theme.color.secondary};
    color: #fff;
  }
`

export default TbasWrapper