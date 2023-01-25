import styled from "styled-components";

export const ClassContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-top: 1rem;

  .backPage {
    display: flex;
    flex: 0.15;
    height: 2rem;
    justify-content: center;

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background-color: ${(props) => props.theme["green-300"]};
      padding: 0.25rem 0.5rem;
      border-radius: 8px;
      border: none;

      p {
        color: ${(props) => props.theme["black-300"]};
        font-weight: bold;
      }

      &:hover {
        background-color: ${(props) => props.theme["green-400"]};
        cursor: pointer;
      }
    }
  }
  .contentClass {
    display: flex;
    flex: 0.85;
    height: 82vh;
    flex-direction: column;
    padding: 0 2rem;

    div:nth-child(1) {
      height: 75vh;
      overflow: auto;
    }
    p {
      margin: 1rem 0;
    }
    .buttonFinished {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 0.5rem;

      button {
        background-color: ${(props) => props.theme["green-400"]};
        color: ${(props) => props.theme["black-300"]};
        font-weight: bold;
        cursor: pointer;
        font-size: 1rem;
        padding: 0.5rem 8rem;
        border-radius: 8px;
        border: none;

        :hover {
          opacity: 0.9;
        }
      }
    }
  }
`;