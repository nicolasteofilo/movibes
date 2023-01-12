import styled from "styled-components";

export const Container = styled.div`
  div + div {
    margin-bottom: ${({ theme }) => theme.spacings.large};
  }
`;
