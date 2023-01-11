import { Books, SignOut, Trophy, User } from "phosphor-react";
import EmptyPhoto from "../../assets/empty-photo-user.svg";
import { SidebarContainer } from "./styles";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <div className="content">
        <div className="user">
          <img src={EmptyPhoto} />
          <p>José Almeida</p>
        </div>
        <button className="page">
          <Books size={24} color="#454B54" weight="bold" />
          <p>Estudos</p>
        </button>
        <button className="page">
          <Trophy size={24} color="#454B54" weight="bold" />
          <p>Rankings</p>
        </button>
        <button className="page">
          <User size={24} color="#454B54" weight="bold" />
          <p>Perfil</p>
        </button>
      </div>
      <button className="exit">
        <SignOut size={24} color="#17191C" weight="bold" />
        <p>Sair</p>
      </button>
    </SidebarContainer>
  );
};
