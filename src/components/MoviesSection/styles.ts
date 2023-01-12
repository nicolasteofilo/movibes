import styled from "styled-components";

interface ContainerProps {
  marginBottom?: string;
}

export const Container = styled.div<ContainerProps>`
  > h1 {
    margin-bottom: ${({ theme }) => theme.spacings.xxsmall};
  }

  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

export const MoviesRow = styled.div`
  display: flex;
  overflow-x: auto;
  width: 1100px;

  div + div {
    margin-left: ${({ theme }) => theme.spacings.xsmall};
  }
`;
