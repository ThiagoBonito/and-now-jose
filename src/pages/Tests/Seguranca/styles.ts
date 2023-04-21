import styled from "styled-components";

export const ClassContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-top: 6.5rem;

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
      background-color: ${(props) => props.theme["blue-200"]};
      padding: 0.25rem 0.5rem;
      border-radius: 8px;
      border: none;

      p {
        color: ${(props) => props.theme["black-300"]};
        font-weight: bold;
      }

      &:hover {
        background-color: ${(props) => props.theme["blue-200"]};
        cursor: pointer;
      }
    }
  }
  .contentClass {
    display: flex;
    flex: 0.85;
    flex-direction: column;
    padding: 0 2rem;

    .isloading {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
    }

    .question {
      display: flex;
      flex-direction: column;
      height: 45vh;
      overflow: auto;
    }

    p {
      margin: 1rem 0;
    }
    .options {
      display: flex;
      flex-direction: column;
      height: 30vh;
      div {
        display: flex;
        flex: 1;
        border: 3px solid ${(props) => props.theme["blue-200"]};
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
      padding-bottom: 1rem;

      button {
        cursor: pointer;
      }
      button:hover {
        opacity: 0.8;
      }

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
          background-color: ${(props) => props.theme["blue-200"]};
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

  @media (max-width: 768px) {
    flex-direction: column;

    .backPage {
      justify-content: flex-start;
      margin-left: 2rem;
      margin-bottom: 1rem;
    }
    .contentClass {
      h5 {
        font-size: 0.75rem;
      }
      h2 {
        font-size: 1rem;
      }
      p {
        font-size: 0.75rem;
      }
    }
    .options {
      div {
        padding: 0.25rem !important;
        margin-bottom: 0.25rem !important;
      }
    }
    .helpButtons {
      gap: 0.5rem !important;

      .help {
        padding: 0.25rem 0.5rem !important;
        font-size: 0.75rem !important;
      }
      .skip {
        padding: 0 0.5rem !important;
        font-size: 0.75rem !important;
      }
    }
    .save {
      padding: 0 0.5rem !important;
      font-size: 0.75rem !important;
    }
  }
`;
