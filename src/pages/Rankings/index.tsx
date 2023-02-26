import { Sidebar } from "../../components/Sidebar";
import { RankingContainer, RankingsContainer, User } from "./styles";

import AmorimPhoto from "../../assets/amorim.jpg";
import GoldWhatsApp from "../../assets/whatsapp-gold.svg";

import { Trophy } from "phosphor-react";
import { useMediaQuery } from "react-responsive";

export const Rankings = () => {
  const storedEmail = localStorage.getItem("userEmail");
  const storedFullName = localStorage.getItem("userFullName");

  const matches = useMediaQuery({
    query: "(max-width: 920px)",
  });

  return (
    <RankingContainer>
      <Sidebar name={storedFullName ?? ""} />
      <RankingsContainer>
        <h1>Rankings</h1>
        <div className="rankingCard">
          <div className="topUsers">
            <div className="users">
              <User color={"silver-500"}>
                <img src={AmorimPhoto} />
                <Trophy
                  size={matches ? 22 : 42}
                  color={"#ABB1BA"}
                  weight="bold"
                />
                <div>
                  <img src={GoldWhatsApp} />
                  <img src={GoldWhatsApp} />
                  <img src={GoldWhatsApp} />
                </div>
              </User>
              <User color={"gold-500"}>
                <img src={AmorimPhoto} />
                <Trophy
                  size={matches ? 22 : 42}
                  color={"#FFAD33"}
                  weight="bold"
                />
                <div>
                  <img src={GoldWhatsApp} />
                  <img src={GoldWhatsApp} />
                  <img src={GoldWhatsApp} />
                </div>
              </User>
              <User color={"cooper-500"}>
                <img src={AmorimPhoto} />
                <Trophy
                  size={matches ? 22 : 42}
                  color={"#CD7F32"}
                  weight="bold"
                />
                <div>
                  <img src={GoldWhatsApp} />
                  <img src={GoldWhatsApp} />
                  <img src={GoldWhatsApp} />
                </div>
              </User>
            </div>
          </div>
          <div className="restUsers">
            <div className="user">
              <div>
                <p>#4</p>
                <img src={AmorimPhoto} />
                <p>Lucas Amorim</p>
              </div>
              <div className="rewards">
                <img src={GoldWhatsApp} />
                <img src={GoldWhatsApp} />
              </div>
            </div>
            <div className="user">
              <div>
                <p>#5</p>
                <img src={AmorimPhoto} />
                <p>Lucas Amorim</p>
              </div>
              <div className="rewards">
                <img src={GoldWhatsApp} />
              </div>
            </div>
            <div className="user">
              <div>
                <p>#38</p>
                <img src={AmorimPhoto} />
                <p>Lucas Amorim</p>
              </div>
              <div className="rewards">
                <p>Nenhum Emblema Encontrado</p>
              </div>
            </div>
          </div>
        </div>
      </RankingsContainer>
    </RankingContainer>
  );
};
