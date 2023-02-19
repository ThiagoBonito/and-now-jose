import { createContext, ReactNode, useState } from "react";

interface AndNowJoseContextType {
  correctAnswers: number;
  addCorrectAnswer: () => void;
  resetCorrectAnswer: () => void;
  handleUserRanking: (quantityCorrect: number) => number | undefined;
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

  return (
    <AndNowJoseContext.Provider
      value={{
        correctAnswers,
        addCorrectAnswer,
        resetCorrectAnswer,
        handleUserRanking,
      }}
    >
      {children}
    </AndNowJoseContext.Provider>
  );
};
