import styled from "styled-components";

export const ModuleCard = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  background-color: ${(props) => props.theme["green-300"]};
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
        background-color: rgba(0, 200, 101, 0.5);
        cursor: pointer;

        &:hover {
          background-color: rgba(0, 200, 101, 0.8);
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
      background-color: rgba(0, 200, 101, 0.8);
      border-radius: 16px;
      .progress {
        width: 50%;
        background-color: ${(props) => props.theme["white"]};
        border-radius: 16px;
      }
    }
  }
`;
