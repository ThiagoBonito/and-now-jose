import { Sidebar } from "../../components/Sidebar";
import { LoadingContainer, PerfilContainer, UserContainer } from "./styles";
import EmptyPhoto from "../../assets/empty-user-photo.png";
import { Clock, Medal, NotePencil } from "phosphor-react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { RankingsResponse } from "../Rankings";
import { CircularProgress } from "@mui/material";

type PerfilResponse = {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: string;
  username: string;
  image: string | null;
};

export const Perfil = () => {
  const storedEmail = localStorage.getItem("userEmail");
  const storedFullName = localStorage.getItem("userFullName");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [userDetails, setUserDetails] = useState<PerfilResponse>();
  const [dateISOString, setDateISOString] = useState<Date>(new Date());

  const [rankings, setRankings] = useState<RankingsResponse[]>([]);
  const [userPositionRanking, setUserPositionRanking] = useState<number>(0);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await Promise.all([
        api.post("/profile", {
          auth: { email: storedEmail },
        }),
        api.get("/rankings/1"),
      ]);
      const data = res.map((res) => res.data);

      if (!data[0]) {
        return toast.error("Erro ao trazer os dados do Usuário!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        setUserDetails(data[0]);
      }

      if (!data[1]) {
        return toast.error("Erro ao trazer os dados do Usuário!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        setRankings(data[1]);
      }
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      throw Error("Promise failed");
    }
  };

  const handleUserPositionRanking = () => {
    rankings.forEach((user, index) => {
      if (user.data[0].email === storedEmail) {
        setUserPositionRanking(index + 1);
      } else {
        return;
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (userDetails) {
      const dateString = userDetails.created_at;
      const timestamp = Date.parse(dateString);
      const date = new Date(timestamp);
      setDateISOString(date);
    }
  }, [userDetails]);

  useEffect(() => {
    handleUserPositionRanking();
  }, [rankings]);

  return (
    <PerfilContainer>
      <Sidebar name={storedFullName ?? ""} />
      {isLoading ? (
        <LoadingContainer>
          <CircularProgress color="success" size={128} thickness={2} />
        </LoadingContainer>
      ) : (
        <UserContainer>
          <h1>Perfil</h1>
          <div className="cardUser">
            <div className="user">
              <img
                className="userPhoto"
                src={userDetails?.image ?? EmptyPhoto}
              />
              <div className="userInfo">
                <div>
                  <h1>{userDetails?.name}</h1>
                  <p>{userDetails?.email}</p>
                </div>
                <div>
                  <div className="statsUser">
                    <Medal size={24} color={"#454B54"} weight="bold" />
                    <p>
                      Ranking Atual <b>#{userPositionRanking}</b>
                    </p>
                  </div>
                  <div className="statsUser">
                    <Clock size={24} color={"#454B54"} weight="bold" />
                    <p>
                      Aluno desde{" "}
                      {format(dateISOString, "MMMM 'de' yyyy", {
                        locale: ptBR,
                      })}
                    </p>
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
      )}
    </PerfilContainer>
  );
};
