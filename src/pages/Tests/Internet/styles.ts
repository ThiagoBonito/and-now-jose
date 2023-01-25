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
      background-color: ${(props) => props.theme["cyan-400"]};
      padding: 0.25rem 0.5rem;
      border-radius: 8px;
      border: none;

      p {
        color: ${(props) => props.theme["black-300"]};
        font-weight: bold;
      }

      &:hover {
        background-color: ${(props) => props.theme["cyan-400"]};
        cursor: pointer;
      }
    }
  }
  .contentClass {
    display: flex;
    flex: 0.85;
    height: 83vh;
    flex-direction: column;
    padding: 0 2rem;

    div:nth-child(1) {
      height: 100vh;
      overflow: auto;
    }
    p {
      margin: 1rem 0;
    }
    .options {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      div {
        display: flex;
        flex: 1;
        border: 3px solid ${(props) => props.theme["cyan-400"]};
        border-radius: 6px;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
      }
    }
    .buttonsContainer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 1rem;

      .helpButtons {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        height: 100%;

        .help {
          border: none;
          padding: 0.5rem 2rem;
          font-size: 1rem;
          font-weight: bold;
          border-radius: 4px;
          background-color: ${(props) => props.theme["cyan-400"]};
        }
        .skip {
          border: none;
          padding: 0.5rem 2rem;
          font-size: 1rem;
          font-weight: bold;
          border-radius: 4px;
          background-color: ${(props) => props.theme["gray-200"]};
        }
      }
      .save {
        border: none;
        padding: 0.5rem 2rem;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 4px;
        background-color: ${(props) => props.theme["gray-200"]};
      }
    }
  }
`;
