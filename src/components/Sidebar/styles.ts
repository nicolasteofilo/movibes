import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 24rem;
  bottom: 0px;
  background: ${({ theme }) => theme.colors.gray[600]};
  border-radius: 0px 40px 40px 0;

  ${media.lessThan("medium")`
    height: 60px;
    width: 100%;
    right: 0;

    display: flex;
    flex-direction: row;
    border-radius: 0;
  `}
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  img {
    margin-top: 3.5rem;

    &:hover {
      filter: brightness(200%);
    }
  }
`;

export const ContentContainer = styled.div`
  ${media.lessThan("medium")`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  `}
`;

export const LinksContainer = styled.div`
  margin-top: 5rem;

  ${media.lessThan("medium")`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-top: 0;
  `}
`;

interface LinkContainerProps {
  isPath: boolean;
}

export const LinkContainer = styled.div<LinkContainerProps>`
  width: 100%;
  height: 5.375rem;
  background: ${({ isPath }) => isPath && "rgba(61, 210, 204, 0.4)"};
  border-right: ${({ theme, isPath }) =>
    isPath ? `5px solid ${theme.colors.green}` : null};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 3rem;

  a {
    display: flex;
    width: 100%;
    align-items: center;
    text-decoration: none;
    ${({ theme, isPath }) => css`
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.semi};
      color: ${isPath ? theme.colors.green : theme.colors.gray[500]};
    `}

    &:hover {
      filter: brightness(115%);
    }

    svg {
      color: white;
      width: 30px;
      height: 30px;
      ${({ theme, isPath }) => css`
        padding-right: ${theme.spacings.xxsmall};
        fill: ${isPath ? theme.colors.green : theme.colors.gray[500]}!important;
      `}
    }
  }

  & + & {
    margin-top: ${({ theme }) => theme.spacings.medium};
  }

  ${media.lessThan("medium")`
    width: max-content;
    padding-left: 1rem;

    background: transparent;
    border-right: none;

    & + & {
      margin-top: 0;
      margin-left: ${({ theme }) => theme.spacings.xxsmall};
    }

    a {
      flex-direction: column;
      font-size: 1.6rem;
      justify-content: center;
      align-items: center;

      svg {
        width: 25px;
        height: 25px;
        padding-right: 0px;
      }
    }
  `}
`;

export const LogoutContainer = styled.div`
  button {
    cursor: pointer;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ theme }) => css`
      font-weight: ${theme.font.semi};
      color: ${theme.colors.gray[500]};
      font-size: ${theme.font.sizes.medium};
    `}

    &:hover {
      filter: brightness(115%);
    }
  }

  ${media.greaterThan("medium")`
    position: absolute;
    width: 100%;
    margin-bottom: 4rem;
    display: flex;
    padding-left: 3rem;
    bottom: 0;
  `}

  ${media.lessThan("medium")`
    padding-right: 1rem;

    button {
      svg {
        width: 25px;
        height: 25px;
        margin-bottom: 5px;
      }

      display: flex;
      flex-direction: column;
    }
  `}
`;
