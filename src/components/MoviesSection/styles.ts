import styled from "styled-components";

export const Container = styled.div`
  > h1 {
    margin-bottom: ${({ theme }) => theme.spacings.xxsmall};
  }
`;

export const MoviesRow = styled.div`
  display: flex;
  overflow-x: auto;
  width: 1100px;

  div + div {
    margin-left: ${({ theme }) => theme.spacings.xsmall};
  }
`;
