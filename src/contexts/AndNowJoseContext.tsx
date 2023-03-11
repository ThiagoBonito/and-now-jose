import { createContext, ReactNode, useState } from "react";
import GoldWhatsApp from "../assets/whatsapp-gold.svg";

interface AndNowJoseContextType {
  correctAnswers: number;
  addCorrectAnswer: () => void;
  resetCorrectAnswer: () => void;
  handleUserRanking: (quantityCorrect: number) => number | undefined;
  handleUserEmblem: (module: string, ranking: number) => string;
}

export const AndNowJoseContext = createContext({} as AndNowJoseContextType);

interface AndNowJoseContextProviderProps {
  children: ReactNode;
}

export const AndNowJoseContextProvider = ({
  children,
}: AndNowJoseContextProviderProps) => {
  const [correctAnswers, setCorrectAnswer] = useState<number>(0);

  const addCorrectAnswer = () => {
    setCorrectAnswer((prev) => prev + 1);
  };

  const resetCorrectAnswer = () => {
    setCorrectAnswer(0);
  };

  const handleUserRanking = (quantityCorrect: number) => {
    if (quantityCorrect <= 2) {
      return 5;
    } else if (quantityCorrect <= 4) {
      return 4;
    } else if (quantityCorrect <= 6) {
      return 3;
    } else if (quantityCorrect <= 8) {
      return 2;
    } else if (quantityCorrect <= 10) {
      return 1;
    }
  };

  const handleUserEmblem = (module: string, ranking: number): string => {
    if (module === "WhatsApp") {
      switch (ranking) {
        case 1:
          return GoldWhatsApp;
        case 2:
          return GoldWhatsApp;
        case 3:
          return GoldWhatsApp;
        case 4:
          return GoldWhatsApp;
        case 5:
          return GoldWhatsApp;
      }
    } else if (module === "Internet") {
      switch (ranking) {
        case 1:
          return GoldWhatsApp;
        case 2:
          return GoldWhatsApp;
        case 3:
          return GoldWhatsApp;
        case 4:
          return GoldWhatsApp;
        case 5:
          return GoldWhatsApp;
      }
    } else if (module === "Seguranca") {
      switch (ranking) {
        case 1:
          return GoldWhatsApp;
        case 2:
          return GoldWhatsApp;
        case 3:
          return GoldWhatsApp;
        case 4:
          return GoldWhatsApp;
        case 5:
          return GoldWhatsApp;
      }
    }
    return "";
  };

  return (
    <AndNowJoseContext.Provider
      value={{
        correctAnswers,
        addCorrectAnswer,
        resetCorrectAnswer,
        handleUserRanking,
        handleUserEmblem,
      }}
    >
      {children}
    </AndNowJoseContext.Provider>
  );
};
