import { Sidebar } from "../../components/Sidebar";
import { PerfilContainer, UserContainer } from "./styles";
import EmptyPhoto from "../../assets/empty-user-photo.png";
import { Clock, Medal, NotePencil } from "phosphor-react";

export const Perfil = () => {
  const storedEmail = localStorage.getItem("userEmail");
  const storedFullName = localStorage.getItem("userFullName");

  return (
    <PerfilContainer>
      <Sidebar name={storedFullName ?? ""} />
      <UserContainer>
        <h1>Perfil</h1>
        <div className="cardUser">
          <div className="user">
            <img className="userPhoto" src={EmptyPhoto} />
            <div className="userInfo">
              <div>
                <h1>José Almeida</h1>
                <p>ti@eagorajose.com.br</p>
              </div>
              <div>
                <div className="statsUser">
                  <Medal size={24} color={"#454B54"} weight="bold" />
                  <p>Ranking Atual #30</p>
                </div>
                <div className="statsUser">
                  <Clock size={24} color={"#454B54"} weight="bold" />
                  <p>Aluno desde Janeiro de 2023</p>
                </div>
              </div>
            </div>
          </div>
          <button className="editUser">
            <NotePencil size={24} />
            Editar Perfil
          </button>
        </div>
      </UserContainer>
    </PerfilContainer>
  );
};
