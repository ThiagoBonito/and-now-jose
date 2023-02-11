import { createContext, ReactNode, useState } from "react";

interface AndNowJoseContextType {
  currentModule: string;
  setCurrentModule: (module: string) => void;
  currentWatchedClasses: number;
  setCurrentWatchedClasses: (watched: number) => void;
}

export const AndNowJoseContext = createContext({} as AndNowJoseContextType);

interface AndNowJoseContextProviderProps {
  children: ReactNode;
}

export const AndNowJoseContextProvider = ({
  children,
}: AndNowJoseContextProviderProps) => {
  const [currentModule, setCurrentModule] = useState("");

  const [currentWatchedClasses, setCurrentWatchedClasses] = useState(0);

  return (
    <AndNowJoseContext.Provider
      value={{
        currentModule,
        setCurrentModule,
        currentWatchedClasses,
        setCurrentWatchedClasses,
      }}
    >
      {children}
    </AndNowJoseContext.Provider>
  );
};
