import { HeaderContainer } from "./styles";
import Logo from "../../assets/logo.jpeg";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} />
    </HeaderContainer>
  );
};
