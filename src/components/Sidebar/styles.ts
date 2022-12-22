import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 24rem;
  background: ${({ theme }) => theme.colors.sidebarBg};
  border-radius: 0px 40px 40px 0;
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

export const LinksContainer = styled.div`
  margin-top: 5rem;
`;

interface LinkContainerProps {
  isPath: boolean
};

export const LinkContainer = styled.div<LinkContainerProps>`
  width: 100%;
  height: 5.375rem;
  background: ${({ isPath }) => isPath && 'rgba(61, 210, 204, 0.4)'};
  border-right: ${({ theme, isPath }) => isPath ? `5px solid ${theme.colors.green}` : null};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 3rem;

  a {
    display: flex;
    width: 100%;
    align-items: center;
    text-decoration: none;
    font-size: ${({ theme }) => theme.font.sizes.large};
    font-weight: ${({ theme }) => theme.font.semi};
    color: ${({ theme, isPath }) => isPath ? theme.colors.green : theme.colors.gray};

    &:hover {
      filter: brightness(115%);
    }

    svg {
      padding-right: ${({ theme }) => theme.spacings.xxsmall};
      color: white;
      width: 30px;
      height: 30px;
      fill: ${({ theme, isPath }) => isPath ? theme.colors.green : theme.colors.gray}!important;
    }
  }

  & + & {
    margin-top ${({ theme }) => theme.spacings.medium}
  }
`;

export const LogoutContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  padding-left: 3rem;
  bottom: 0;
  margin-bottom: 4rem;

  button {
    cursor: pointer;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: ${({ theme }) => theme.font.semi};
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.font.sizes.medium};

    &:hover {
      filter: brightness(115%);
    }
  }
`;
