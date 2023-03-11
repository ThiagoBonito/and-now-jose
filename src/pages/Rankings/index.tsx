import { Sidebar } from "../../components/Sidebar";
import { RankingContainer, RankingsContainer, User } from "./styles";

import AmorimPhoto from "../../assets/amorim.jpg";
import EmptyPhoto from "../../assets/empty-user-photo.png";
import GoldWhatsApp from "../../assets/whatsapp-gold.svg";

import { Trophy } from "phosphor-react";
import { useMediaQuery } from "react-responsive";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export type DataRanking = {
  email: string;
  module: string;
  points: number;
  ranking: number;
};

export type RankingsResponse = {
  name: string;
  image: string | null;
  data: DataRanking[];
  totalpoints: number;
};

export const Rankings = () => {
  const storedEmail = localStorage.getItem("userEmail");
  const storedFullName = localStorage.getItem("userFullName");

  const matches = useMediaQuery({
    query: "(max-width: 920px)",
  });

  const [rankings, setRankings] = useState<RankingsResponse[]>([]);
  const [restUsers, setRestUsers] = useState<RankingsResponse[]>([]);
  console.log(restUsers);

  const fetchRankings = async () => {
    try {
      const { data } = await api.get("/rankings/1");

      if (!data) {
        return toast.error("Erro ao trazer os Rankings!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        setRankings(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleRestUsers = () => {
    rankings.forEach((user, index) => {
      console.log(user, index);
      if (index <= 2) {
        return;
      } else {
        setRestUsers((prev) => [...prev, user]);
      }
    });
  };

  useEffect(() => {
    fetchRankings();
  }, []);

  useEffect(() => {
    if (rankings) {
      handleRestUsers();
    }
  }, [rankings]);

  return (
    <RankingContainer>
      <Sidebar name={storedFullName ?? ""} />
      <RankingsContainer>
        <h1>Rankings</h1>
        <div className="rankingCard">
          <div className="topUsers">
            <div className="users">
              <User color={"silver-500"}>
                <img src={rankings[1]?.image ?? EmptyPhoto} />
                <Trophy
                  size={matches ? 22 : 42}
                  color={"#ABB1BA"}
                  weight="bold"
                />
                <p style={{ fontWeight: "bold" }}>{rankings[1]?.name}</p>
                <div>
                  <img src={GoldWhatsApp} />
                  <img src={GoldWhatsApp} />
                  <img src={GoldWhatsApp} />
                </div>
              </User>
              <User color={"gold-500"}>
                <img src={rankings[0]?.image ?? EmptyPhoto} />
                <Trophy
                  size={matches ? 22 : 42}
                  color={"#FFAD33"}
                  weight="bold"
                />
                <p style={{ fontWeight: "bold" }}>{rankings[0]?.name}</p>
                <div>
                  <img src={GoldWhatsApp} />
                  <img src={GoldWhatsApp} />
                  <img src={GoldWhatsApp} />
                </div>
              </User>
              <User color={"cooper-500"}>
                <img src={rankings[2]?.image ?? EmptyPhoto} />
                <Trophy
                  size={matches ? 22 : 42}
                  color={"#CD7F32"}
                  weight="bold"
                />
                <p style={{ fontWeight: "bold" }}>{rankings[2]?.name}</p>
                <div>
                  <img src={GoldWhatsApp} />
                  <img src={GoldWhatsApp} />
                  <img src={GoldWhatsApp} />
                </div>
              </User>
            </div>
          </div>
          <div className="restUsers">
            {restUsers?.map((user, index) => (
              <div className="user">
                <div>
                  <p>#{index + 4}</p>
                  <img src={user?.image ?? EmptyPhoto} />
                  <p>{user?.name}</p>
                </div>
                <div className="rewards">
                  <img src={GoldWhatsApp} />
                  <img src={GoldWhatsApp} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </RankingsContainer>
    </RankingContainer>
  );
};
