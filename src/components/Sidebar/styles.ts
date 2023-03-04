import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 15%;
  margin-top: 5rem;
  background-color: ${(props) => props.theme["white"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
  z-index: 1;

  .content {
    height: 90% !important;
    margin-bottom: 1rem;
  }

  .user {
    display: flex;
    width: 100%;
    height: fit-content;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;

    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
    p {
      font-size: 1rem;
      color: ${(props) => props.theme["black-300"]};
      font-weight: bold;
    }
  }
  .page {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    background-color: ${(props) => props.theme["white"]};
    color: ${(props) => props.theme["black-100"]};
    font-weight: bold;
    padding: 1rem 0.5rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme["green-100"]};
    }
    &:active {
      border: 2px solid ${(props) => props.theme["green-400"]};
      background-color: ${(props) => props.theme["green-100"]};
    }
  }
  .active {
    border: 2px solid ${(props) => props.theme["green-400"]};
    background-color: ${(props) => props.theme["green-100"]};
  }

  .exit {
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    gap: 0.5rem;
    font-size: 1rem;
    background-color: ${(props) => props.theme["green-400"]};
    color: ${(props) => props.theme["black-300"]};
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 8px;
    border: none;

    &:hover {
      background-color: ${(props) => props.theme["green-500"]};
    }
  }

  @media (max-width: 425px) {
    position: relative;
    flex-direction: column;
    width: fit-content;

    .content {
      display: flex;
      flex-direction: column;

      .buttons {
        display: flex;
        flex-direction: row;
      }
    }
    .user {
      flex: 1;

      img {
        width: 3rem;
        height: 3rem;
      }
    }
    .exit {
      width: 100%;
    }
  }
`;
