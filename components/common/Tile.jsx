import styled from "styled-components";

const TileWrap = styled.div`
    position: relative;
    padding: 22px;
    background-color: var(--background-tertiary-color);
    border-radius: 18px;

    ${({ color }) => color === 'blue' ? `
      background-image: radial-gradient(circle at 90% 0%,#239AF2 0%,#3F4CC8 100%);
      // background: linear-gradient(114.88deg,#3cd0ff,#0b0050),linear-gradient(107.56deg,#000e16,#0c21e0 48.44%,#05d2ff);
    ` : ``}
    ${({ color }) => color === 'deep-purple' ? `
      background: linear-gradient(to bottom right,#0D1387,#867AF6);
    ` : ``}
    ${({ color }) => color === 'purple' ? `
      background: #dd41b7;
      background: linear-gradient(137deg,#dd41b7,#5717a6);
    ` : ``}
    ${({ color }) => color === 'pink' ? `
      background: #dd41b7;
      background-image: radial-gradient(circle at 0% -25%,#FF7948 0%,#FF8355 0,#DA2C84 42%,#3E13A4 110%);
    ` : ``}

    &[data-color-scheme="dark"] {
      color: white;
    }
`;

const Tile = ({ children, ...props }) => {
  const conditionalProps = {};
  if (props.color) conditionalProps["data-color-scheme"] = "dark"

  return (
    <TileWrap {...conditionalProps} {...props}>{children}</TileWrap>
  );
}

export default Tile;
