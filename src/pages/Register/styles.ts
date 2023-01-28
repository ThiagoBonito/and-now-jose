import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  background-color: ${(props) => props.theme["green-400"]};
  padding: 4rem 2rem;
  border-radius: 0px 8px 8px 0px;

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme["black-300"]};
    margin-bottom: 2rem;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 75%;
      height: 80%;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    h1 {
      font-size: 1.25rem;
    }
    div {
      margin-bottom: 7rem;
    }
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  padding: 4rem;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .backPage {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
  p {
    display: flex;
    color: ${(props) => props.theme["black-200"]};
    margin-bottom: 1rem;
  }
  input {
    width: 95%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid ${(props) => props.theme["gray-300"]};
    border-radius: 8px;
  }
  .login {
    background-color: ${(props) => props.theme["green-400"]};
    color: ${(props) => props.theme["white"]};
    border: none;
    font-size: 1rem;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;

    .header {
      h1 {
        font-size: 1.5rem;
      }
    }
    p {
      font-size: 0.75rem;
    }
  }
`;
