import React from "react";
import styled from "styled-components"
import getResponsivePropStyles from '@/styles/getResponsivePropStyles';

const GridItemWrap = styled.div`
  ${({ $width }) => getResponsivePropStyles($width, (val) => `grid-column-start: ${Number(val ?? 1)} span;`)}
  ${({ $height }) => getResponsivePropStyles($height, (val) => `grid-row-start: ${Number(val ?? 1)} span;`)}
  grid-row-end: auto;
  grid-column-end: auto;
`;

const GridItem = ({ children, width, height, as, ...props }) => {
  return (
    <GridItemWrap $width={width} $height={height} as={as} {...props}>{children}</GridItemWrap>
  )
}

export default GridItem;
