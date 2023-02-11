import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

type ModuleCardProps = {
  color: keyof typeof defaultTheme;
  progress: number;
};

export const ModuleCard = styled.div<ModuleCardProps>`
  display: flex;
  height: fit-content;
  flex-direction: column;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  background-color: ${(props) => props.theme[props.color]};
  .backgroundCard {
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding: 1rem 2rem;
    .infoCard {
      display: flex;
      gap: 1rem;
    }
    .iconCard {
      display: flex;
      justify-content: center;
      background-color: ${(props) => props.theme["white"]};
      padding: 0.5rem;
      border-radius: 50%;
    }
    .nameCard {
      display: flex;
      flex-direction: column;
      h2 {
        font-size: 1rem;
      }
      .title {
        font-size: 1.5rem;
      }
    }
    .expandModule {
      display: flex;
      align-items: center;
      button {
        display: flex;
        align-items: center;
        padding: 1rem;
        border-radius: 50%;
        border: none;
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;

        &:hover {
          background-color: rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
  .progressClass {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    padding: 0 2rem 1rem 2rem;

    .progressBar {
      display: flex;
      flex: 0.8;
      height: 1rem;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 16px;
      .progress {
        width: ${(props) => (props.progress ? `${props.progress}%` : "0%")};
        background-color: ${(props) => props.theme["white"]};
        border-radius: 16px;
      }
    }
  }

  @media (max-width: 1031px) {
    .iconCard {
      width: fit-content;
      height: fit-content;
    }
    .nameCard {
      h2 {
        font-size: 0.75rem;
      }
      .title {
        font-size: 1rem;
      }
    }
    .expandModule {
      padding: 0.5rem;
    }
  }

  @media (max-width: 425px) {
    .nameCard {
      h2 {
        font-size: 0.5rem;
      }
      .title {
        font-size: 1rem !important;
      }
    }
    .progressClass {
      p {
        font-size: 0.75rem !important;
      }
    }
  }
`;
