import styled from 'styled-components'

const gutter = 24;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ width }) => width === 'lg' ? 1440-(gutter*2) : 980}px;
  width: calc(100% - ${gutter}px * 2);
  padding: 0 ${gutter}px;
  padding-left: calc(max(${gutter}px, env(safe-area-inset-left)));
  padding-right: calc(max(${gutter}px, env(safe-area-inset-right)));
  position: relative;
`;

export default Container;
