// @ts-nocheck
import styled from "styled-components";
import media from "styled-media-query"; 

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchContainer = styled.div``;

export const InputSearch = styled.input`
  width: 18rem;
  height: 35px;
  border-radius: 17.5px;
  border: none;
  background: ${({ theme }) => theme.colors.gray[600]};
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.semi};
  color: ${({ theme }) => theme.colors.gray[500]};
  
  ${media.greaterThan("large")`
    width: 75rem;
  `}
  ${media.greaterThan("medium")`
    width: 65rem;
  `}
  ${media.lessThan('950px')`
    width: 50rem;
  `}
  ${media.lessThan('683px')`
    width: 40rem;
  `}
  ${media.lessThan('590px')`
    width: 30rem
  `}
  ${media.lessThan('480px')`
    width: 25rem;
  `}
`;

export const InfosContainer = styled.div``;
