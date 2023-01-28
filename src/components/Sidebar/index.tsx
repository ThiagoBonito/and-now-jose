import { Books, SignOut, Trophy, User } from "phosphor-react";
import EmptyPhoto from "../../assets/empty-photo-user.svg";
import { SidebarContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <div className="content">
        <div className="user">
          <img src={EmptyPhoto} />
          <p>José Almeida</p>
        </div>
        <div className="buttons">
          <button className="page" onClick={() => navigate("/Home")}>
            <Books size={24} color="#454B54" weight="bold" />
            <p>Estudos</p>
          </button>
          <button className="page" onClick={() => navigate("/Rankings")}>
            <Trophy size={24} color="#454B54" weight="bold" />
            <p>Rankings</p>
          </button>
          <button className="page" onClick={() => navigate("/Perfil")}>
            <User size={24} color="#454B54" weight="bold" />
            <p>Perfil</p>
          </button>
        </div>
      </div>
      <button className="exit" onClick={() => navigate("/")}>
        <SignOut size={24} color="#17191C" weight="bold" />
        <p>Sair</p>
      </button>
    </SidebarContainer>
  );
};
