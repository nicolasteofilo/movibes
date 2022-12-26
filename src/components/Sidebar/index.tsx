import { Link } from "react-router-dom";
import { useTheme } from "styled-components";

import { Wrapper, LogoContainer, ContentContainer, LinksContainer, LinkContainer, LogoutContainer } from "./styles";

import logoImg from "../../assets/images/logo.svg";
import { HouseImg } from "../../assets/icons/house";
import { VideoCameraImg } from "../../assets/icons/videoCamera";
import { SignOutImg } from "../../assets/icons/signOut";

import { useWindowDimensions } from "../../hooks/useWindowDimensions";

interface SidebarProps {
  currentLocation: string;
}

export function Sidebar({ currentLocation }: SidebarProps) {
  const { width } = useWindowDimensions();
  const theme = useTheme();

  const links = [
    {
      label: 'Início',
      icon: <HouseImg />,
      path: '/',
      id: Math.random(),
    },
    {
      label: 'Filmes',
      icon: <VideoCameraImg />,
      path: '/filmes',
      id: Math.random(),
    }
  ]

  return (
    <Wrapper>
      {width >= 768 && (
        <LogoContainer>
          <img src={logoImg} alt="Movibes" aria-label="Movibes" />
        </LogoContainer>
      )}

      <ContentContainer>
        <LinksContainer>
          {links.map((link) => (
            <LinkContainer key={link.id} isPath={link.path === currentLocation}>
              <Link to={link.path} aria-label={link.label}>
                {link.icon}
                {link.label}
              </Link>
            </LinkContainer>
          ))}
        </LinksContainer>
        <LogoutContainer>
          <button>
            <SignOutImg fill={theme.colors.gray[500]} />
            Sair
          </button>
        </LogoutContainer>
      </ContentContainer>
    </Wrapper>
  )
}
