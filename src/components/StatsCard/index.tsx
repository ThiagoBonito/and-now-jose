import EmptySymbol from "../../assets/symbol-empty.svg";
import EmptyPhoto from "../../assets/empty-user-photo.png";
import { ArrowLeft, ArrowRight, Circle, Trophy } from "phosphor-react";
import { RankingsContainer, User } from "./styles";
import { RankingsResponse } from "../../pages/Rankings";
import { useContext, useEffect, useState } from "react";
import { AndNowJoseContext } from "../../contexts/AndNowJoseContext";

type StatsCardProps = {
  data: RankingsResponse[];
};

type SliderPhotos = {
  url: string;
  name: string;
};

export const StatsCard = ({ data }: StatsCardProps) => {
  const storedEmail = localStorage.getItem("userEmail");

  const { handleUserEmblem } = useContext(AndNowJoseContext);

  const [restUsers, setRestUsers] = useState<RankingsResponse[]>([]);

  const [currentUserRanking, setCurrentUserRanking] =
    useState<RankingsResponse>();

  const [sliderPhotos, setSliderPhotos] = useState<SliderPhotos[]>([]);
  const [currentPhoto, setCurrentPhoto] = useState<number>(0);

  const handleRestUsers = () => {
    data.forEach((user, index) => {
      if (index <= 2) {
        return;
      } else {
        setRestUsers((prev) => [...prev, user]);
      }
    });
  };

  const handleFindCurrentUser = () => {
    const user = data.find(
      (user) => String(user.data[0].email) === String(storedEmail)
    );
    if (user) {
      setCurrentUserRanking(user);
    }
  };

  const handleGetUserEmblems = () => {
    setSliderPhotos([]);

    currentUserRanking?.data.map((emblem) => {
      const emblemPhoto = handleUserEmblem(emblem.module, emblem.ranking);
      const moduleName = emblem.module;

      setSliderPhotos((prev) => [
        ...prev,
        { url: emblemPhoto, name: moduleName },
      ]);
    });
  };

  const handleCorrectNameModule = (module: string) => {
    if (module === "WhatsApp") {
      return "Básico do WhatsApp";
    } else if (module === "Internet") {
      return "Navegação na Internet";
    } else if (module === "Seguranca") {
      return "Segurança na Rede";
    }
  };

  useEffect(() => {
    setRestUsers([]);
    handleRestUsers();
    handleFindCurrentUser();
    setSliderPhotos([]);
  }, [data]);

  useEffect(() => {
    handleGetUserEmblems();
  }, [currentUserRanking]);

  return (
    <RankingsContainer
      currentSlide={currentPhoto}
      slideLength={sliderPhotos?.length ?? 0}
    >
      <div className="symbolCard">
        <h1>Emblemas</h1>
        {sliderPhotos?.length === 0 ? (
          <>
            <img src={EmptySymbol} />
            <p>Nenhum emblema encontrado!</p>
          </>
        ) : (
          <div className="slider-container">
            <div>
              <button
                className="arrow-left"
                onClick={() =>
                  currentPhoto === 0
                    ? null
                    : setCurrentPhoto((prev) => prev - 1)
                }
              >
                <ArrowLeft size={20} />
              </button>
            </div>
            <div className="photo">
              <img src={sliderPhotos[currentPhoto]?.url} />
              <p>{handleCorrectNameModule(sliderPhotos[currentPhoto]?.name)}</p>
              <div className="footer">
                {sliderPhotos?.map((slide, index) => (
                  <button key={index} onClick={() => setCurrentPhoto(index)}>
                    <Circle
                      size={8}
                      weight={"fill"}
                      color={index === currentPhoto ? "#00E272" : "#C7CBD1"}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <button
                className="arrow-right"
                onClick={() =>
                  currentPhoto + 1 >= sliderPhotos?.length
                    ? null
                    : setCurrentPhoto((prev) => prev + 1)
                }
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}
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
                <div key={index} className="user">
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
