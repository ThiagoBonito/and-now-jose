import { createContext, ReactNode, useState } from "react";
import { emblems } from "../utils/emblems";
import { tests } from "../utils/tests";

export type TestEmblem = {
  result: string;
  resultText: string;
  description: string;
};

interface AndNowJoseContextType {
  correctAnswers: number;
  addCorrectAnswer: () => void;
  resetCorrectAnswer: () => void;
  handleUserRanking: (quantityCorrect: number) => number | undefined;
  handleUserEmblem: (module: string, ranking: number) => string;
  handleUserTestEmblem: (
    module: string,
    ranking: number,
    correctAnwsers: number
  ) => TestEmblem;
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
          return emblems.platinumWhatsApp;
        case 2:
          return emblems.goldWhatsApp;
        case 3:
          return emblems.silverWhatsApp;
        case 4:
          return emblems.copperWhatsApp;
      }
    } else if (module === "Internet") {
      switch (ranking) {
        case 1:
          return emblems.platinumInternet;
        case 2:
          return emblems.goldInternet;
        case 3:
          return emblems.silverInternet;
        case 4:
          return emblems.copperInternet;
      }
    } else if (module === "Seguranca") {
      switch (ranking) {
        case 1:
          return emblems.platinumSeguranca;
        case 2:
          return emblems.goldSeguranca;
        case 3:
          return emblems.silverSeguranca;
        case 4:
          return emblems.copperSeguranca;
      }
    }
    return "";
  };

  const handleUserTestEmblem = (
    module: string,
    ranking: number,
    correctAnwsers: number
  ): TestEmblem => {
    if (module === "WhatsApp") {
      switch (ranking) {
        case 1:
          return {
            result: tests.platinumWhatsApp,
            resultText: "Parabéns! Você conquistou uma medalha de Platina!",
            description: `Você acertou todas as questões da Revisão do módulo
            Básicos de Whatsapp! Agora este emblema será exibido no seu
            perfil, e além disso sua posição no ranking de alunos será elevada por
            conta de sua mais nova conquista!`,
          };
        case 2:
          return {
            result: tests.goldWhatsApp,
            resultText: "Parabéns! Você conquistou uma medalha de Ouro!",
            description: `Você acertou ${correctAnwsers} questões da Revisão do módulo
            Básicos de Whatsapp! Agora este emblema será exibido no seu
            perfil, e além disso sua posição no ranking de alunos será elevada por
            conta de sua mais nova conquista!`,
          };
        case 3:
          return {
            result: tests.silverWhatsApp,
            resultText: "Parabéns! Você conquistou uma medalha de Prata!",
            description: `Você acertou ${correctAnwsers} questões da Revisão do módulo
            Básicos de Whatsapp! Agora este emblema será exibido no seu
            perfil, e além disso sua posição no ranking de alunos será elevada por
            conta de sua mais nova conquista!`,
          };
        case 4:
          return {
            result: tests.copperWhatsApp,
            resultText: "Parabéns! Você conquistou uma medalha de Bronze!",
            description: `Você acertou ${correctAnwsers} questões da Revisão do módulo
            Básicos de Whatsapp! Agora este emblema será exibido no seu
            perfil, e além disso sua posição no ranking de alunos será elevada por
            conta de sua mais nova conquista!`,
          };
        case 5:
          return {
            result: tests.testFailed,
            resultText: "Que pena não foi dessa vez...",
            description: `Infelizmente você acabou ${
              correctAnwsers === 0
                ? "errando todas as"
                : `acertando apenas ${correctAnwsers} `
            } questões, e por isso o teste foi interrompido... Mas tudo bem! Tome um tempo para respirar e revisar os assuntos do módulo!`,
          };
      }
    } else if (module === "Internet") {
      switch (ranking) {
        case 1:
          return {
            result: tests.platinumInternet,
            resultText: "Parabéns! Você conquistou uma medalha de Platina!",
            description: `Você acertou todas as questões da Revisão do módulo
            Navegação na Internet! Agora este emblema será exibido no seu
            perfil, e além disso sua posição no ranking de alunos será elevada por
            conta de sua mais nova conquista!`,
          };
        case 2:
          return {
            result: tests.goldInternet,
            resultText: "Parabéns! Você conquistou uma medalha de Ouro!",
            description: `Você acertou ${correctAnwsers} questões da Revisão do módulo
            Navegação na Internet! Agora este emblema será exibido no seu
            perfil, e além disso sua posição no ranking de alunos será elevada por
            conta de sua mais nova conquista!`,
          };
        case 3:
          return {
            result: tests.silverInternet,
            resultText: "Parabéns! Você conquistou uma medalha de Prata!",
            description: `Você acertou ${correctAnwsers} questões da Revisão do módulo
            Navegação na Internet! Agora este emblema será exibido no seu
            perfil, e além disso sua posição no ranking de alunos será elevada por
            conta de sua mais nova conquista!`,
          };
        case 4:
          return {
            result: tests.copperInternet,
            resultText: "Parabéns! Você conquistou uma medalha de Bronze!",
            description: `Você acertou ${correctAnwsers} questões da Revisão do módulo
            Navegação na Internet! Agora este emblema será exibido no seu
            perfil, e além disso sua posição no ranking de alunos será elevada por
            conta de sua mais nova conquista!`,
          };
        case 5:
          return {
            result: tests.testFailed,
            resultText: "Que pena não foi dessa vez...",
            description: `Infelizmente você acabou ${
              correctAnwsers === 0
                ? "errando todas as"
                : `acertando apenas ${correctAnwsers} `
            } questões, e por isso o teste foi interrompido... Mas tudo bem! Tome um tempo para respirar e revisar os assuntos do módulo!`,
          };
      }
    } else if (module === "Seguranca") {
      switch (ranking) {
        case 1:
          return {
            result: tests.platinumSeguranca,
            resultText: "Parabéns! Você conquistou uma medalha de Platina!",
            description: `Você acertou todas as questões da Revisão do módulo
            Segurança na Rede! Agora este emblema será exibido no seu
            perfil, e além disso sua posição no ranking de alunos será elevada por
            conta de sua mais nova conquista!`,
          };
        case 2:
          return {
            result: tests.goldSeguranca,
            resultText: "Parabéns! Você conquistou uma medalha de Ouro!",
            description: `Você acertou ${correctAnwsers} questões da Revisão do módulo
            Segurança na Rede! Agora este emblema será exibido no seu
            perfil, e além disso sua posição no ranking de alunos será elevada por
            conta de sua mais nova conquista!`,
          };
        case 3:
          return {
            result: tests.silverSeguranca,
            resultText: "Parabéns! Você conquistou uma medalha de Prata!",
            description: `Você acertou ${correctAnwsers} questões da Revisão do módulo
            Segurança na Rede! Agora este emblema será exibido no seu
            perfil, e além disso sua posição no ranking de alunos será elevada por
            conta de sua mais nova conquista!`,
          };
        case 4:
          return {
            result: tests.copperSeguranca,
            resultText: "Parabéns! Você conquistou uma medalha de Bronze!",
            description: `Você acertou ${correctAnwsers} questões da Revisão do módulo
            Segurança na Rede! Agora este emblema será exibido no seu
            perfil, e além disso sua posição no ranking de alunos será elevada por
            conta de sua mais nova conquista!`,
          };
        case 5:
          return {
            result: tests.testFailed,
            resultText: "Que pena não foi dessa vez...",
            description: `Infelizmente você acabou ${
              correctAnwsers === 0
                ? "errando todas as"
                : `acertando apenas ${correctAnwsers} `
            } questões, e por isso o teste foi interrompido... Mas tudo bem! Tome um tempo para respirar e revisar os assuntos do módulo!`,
          };
      }
    }
    return {
      result: "",
      resultText: "",
      description: "",
    };
  };

  return (
    <AndNowJoseContext.Provider
      value={{
        correctAnswers,
        addCorrectAnswer,
        resetCorrectAnswer,
        handleUserRanking,
        handleUserEmblem,
        handleUserTestEmblem,
      }}
    >
      {children}
    </AndNowJoseContext.Provider>
  );
};
