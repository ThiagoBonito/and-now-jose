import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

type ClassModuleProps = {
  backgroundColor: keyof typeof defaultTheme;
};

export const ClassModule = styled.div<ClassModuleProps>`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  background-color: ${(props) => props.theme[`${props.backgroundColor}`]};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;

  .contentClass {
    display: flex;
    flex-direction: row !important;
    align-items: center;
    gap: 1rem;
  }
  .goClass {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 2rem;
    justify-content: center;

    button {
      display: flex;
      padding: 1rem 1.5rem;
      border-radius: 52px;
      border: none;
      background-color: ${(props) => props.theme["white"]};
      color: ${(props) => props.theme["black-300"]};
      font-weight: bold;
      cursor: pointer;
    }
  }

  @media (max-width: 425px) {
    .contentClass {
      h3 {
        font-size: 0.75rem !important;
      }
      h2 {
        font-size: 1rem !important;
      }
      gap: 0.25rem !important;
    }
  }
`;
