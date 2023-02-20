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

    p {
      margin-bottom: 1rem;
    }
  }

  .loadingContainer {
    display: flex;
    flex: 0.85;
    padding: 15%;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 425px) {
    flex-direction: column;

    .backPage {
      justify-content: flex-start;
      margin-left: 2rem;
      margin-bottom: 1rem;
    }
    .contentClass {
      h2 {
        font-size: 1.25rem;
      }
      p {
        font-size: 0.75rem !important;
      }
    }
  }
`;
