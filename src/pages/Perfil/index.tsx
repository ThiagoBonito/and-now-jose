import { Sidebar } from "../../components/Sidebar";
import { PerfilContainer } from "./styles";

export const Perfil = () => {
  const storedEmail = localStorage.getItem("userEmail");
  const storedFullName = localStorage.getItem("userFullName");

  return (
    <PerfilContainer>
      <Sidebar name={storedFullName ?? ""} />
    </PerfilContainer>
  );
};
