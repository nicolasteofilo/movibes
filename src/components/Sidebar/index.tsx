import { Link } from "react-router-dom";
import { useTheme } from "styled-components";

import { Wrapper, LogoContainer, LinksContainer, LinkContainer, LogoutContainer } from "./styles";

import logoImg from "../../assets/images/logo.svg";
import { HouseImg } from "../../assets/icons/house";
import { VideoCameraImg } from "../../assets/icons/videoCamera";
import { SignOut } from "../../assets/icons/signOut";

interface SidebarProps {
  currentLocation: string;
}

export function Sidebar({ currentLocation }: SidebarProps) {
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
      <LogoContainer>
        <img src={logoImg} alt="Movibes" aria-label="Movibes" />
      </LogoContainer>

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
          <SignOut fill={theme.colors.gray} />
          Sair
        </button>
      </LogoutContainer>
    </Wrapper>
  )
}
