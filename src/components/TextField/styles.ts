import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.gray[600]};
    border-radius: 20rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.gray[600]};
  `}
`;

export const InputContainer = styled.div``;

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: right;
    justify-content: center;
    width: 2.2rem;

    & > svg {
      width: 100%;
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    height: 44px;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.semi};
    color: ${theme.colors.gray[500]};
    padding: 0 ${theme.spacings.xsmall};
  `}
`;
