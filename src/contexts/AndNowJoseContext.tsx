import { createContext, ReactNode, useState } from "react";

interface AndNowJoseContextType {
  correctAnswers: number;
  setCorrectAnswer: (quantity: number) => void;
}

export const AndNowJoseContext = createContext({} as AndNowJoseContextType);

interface AndNowJoseContextProviderProps {
  children: ReactNode;
}

export const AndNowJoseContextProvider = ({
  children,
}: AndNowJoseContextProviderProps) => {
  const [correctAnswers, setCorrectAnswer] = useState<number>(0);

  return (
    <AndNowJoseContext.Provider value={{ correctAnswers, setCorrectAnswer }}>
      {children}
    </AndNowJoseContext.Provider>
  );
};
