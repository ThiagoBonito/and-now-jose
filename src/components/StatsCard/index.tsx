import EmptySymbol from "../../assets/symbol-empty.svg";
import EmptyPhoto from "../../assets/empty-user-photo.png";
import { Trophy } from "phosphor-react";
import { RankingsContainer, User } from "./styles";
import { RankingsResponse } from "../../pages/Rankings";
import { useEffect, useState } from "react";

type StatsCardProps = {
  data: RankingsResponse[];
};

export const StatsCard = ({ data }: StatsCardProps) => {
  const [restUsers, setRestUsers] = useState<RankingsResponse[]>([]);

  const handleRestUsers = () => {
    data.forEach((user, index) => {
      if (index <= 3) {
        return;
      } else {
        setRestUsers((prev) => [...prev, user]);
      }
    });
  };

  useEffect(() => {
    handleRestUsers();
  }, [data]);

  return (
    <RankingsContainer>
      <div className="symbolCard">
        <h1>Emblemas</h1>
        <img src={EmptySymbol} />
        <p>Nenhum emblema encontrado!</p>
      </div>
      <div className="rankingCard">
        <h1>Ranking</h1>
        <div className="topUsers">
          <div className="users">
            <User color={"silver-500"}>
              <img src={data[1]?.image ?? EmptyPhoto} />
              <Trophy size={24} color={"#ABB1BA"} weight="bold" />
              <h5>{data[1]?.name}</h5>
              <h6>{data[1]?.totalpoints} pontos</h6>
            </User>
            <User color={"gold-500"}>
              <img src={data[0]?.image ?? EmptyPhoto} />
              <Trophy size={24} color={"#FFAD33"} weight="bold" />
              <h5>{data[0]?.name}</h5>
              <h6>{data[0]?.totalpoints} pontos</h6>
            </User>
            <User color={"cooper-500"}>
              <img src={data[2]?.image ?? EmptyPhoto} />
              <Trophy size={24} color={"#CD7F32"} weight="bold" />
              <h5>{data[2]?.name}</h5>
              <h6>{data[2]?.totalpoints} pontos</h6>
            </User>
          </div>
        </div>
        <div className="restUsers">
          {restUsers
            ? restUsers.map((user, index) => (
                <div className="user">
                  <p>#{index + 4}</p>
                  <div>
                    <img src={user?.image ?? EmptyPhoto} />
                    <p>{user?.name}</p>
                  </div>
                  <p style={{ fontWeight: "normal", fontSize: "1rem" }}>
                    {user?.totalpoints}
                  </p>
                </div>
              ))
            : null}
        </div>
      </div>
    </RankingsContainer>
  );
};
