import styled from "styled-components";
import media from "styled-media-query";

interface ContainerProps {
  marginBottom?: string;
}

export const Container = styled.div<ContainerProps>`
  > h1 {
    margin-bottom: ${({ theme }) => theme.spacings.xxsmall};
  }
  overflow-x: hidden;
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const MoviesRow = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;

  ${media.lessThan("medium")`

  `}

  div + div {
    margin-left: ${({ theme }) => theme.spacings.xsmall};
  }
`;
