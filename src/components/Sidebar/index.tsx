import { Wrapper, LogoContainer, LinksContainer, LogoutContainer } from "./styles";
import logoImg from "../../assets/images/logo.svg";

export function Sidebar() {
  return (
    <Wrapper>
      <LogoContainer>
        <img src={logoImg} alt="Movibes" role="img" aria-label="Movibes" />
      </LogoContainer>

      <LinksContainer>
        {/* CARDS */}
      </LinksContainer>
    </Wrapper>
  )
}
