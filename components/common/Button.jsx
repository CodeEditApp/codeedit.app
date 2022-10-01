import styled from "styled-components";

const Button = styled.button`
  cursor: ${({ disabled }) => disabled ? `default` : `pointer`};
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  font-size: 17px;
  line-height: 1.17648;
  font-weight: 400;
  letter-spacing: -.022em;
  font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  min-width: 28px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 18px;
  background: var(${({ disabled }) => disabled ? `--glyph-gray-tertiary` : `--fill-blue`});
  color: #fff;
  border: 0;
  outline: 0;

  ${({ compact }) => compact ? `
    font-size: 12px;
    line-height: 1.33337;
    font-weight: 400;
    letter-spacing: -.01em;
    font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    min-width: 23px;
    padding-left: 11px;
    padding-right: 11px;
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 12px;
  ` : ``}
`;

export default Button;
