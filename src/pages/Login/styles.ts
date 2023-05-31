import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  min-height: 100vh;
  flex: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow: scroll;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex: 0.4;
  flex-direction: column;
  padding: 0 8rem 0 8rem;

  img {
    width: 10rem;
    height: 10rem;
  }

  h1 {
    font-size: 2.25rem;
    color: ${(props) => props.theme["black-300"]};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme["black-200"]};
    margin-bottom: 2rem;
  }

  a {
    text-decoration: underline;
    color: ${(props) => props.theme["green-500"]};
    cursor: pointer;
  }

  input {
    width: 95%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid ${(props) => props.theme["gray-300"]};
    border-radius: 8px;
  }

  .passwordContainer {
    display: flex;
    position: relative;
  }

  .icon {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-65%);
    cursor: pointer;
    color: ${(props) => props.theme["black-200"]};
  }

  .optionsPassword {
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin-bottom: 1rem;
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

    :disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  .register {
    display: flex;
    justify-content: center;
    gap: 0.25rem;

    .navigate {
      text-decoration: underline;
      display: flex;
      padding-top: 0.2rem;
      border: none;
      height: fit-content;
      background-color: transparent;
      color: ${(props) => props.theme["green-500"]};
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    padding: 0 2rem 0 2rem;

    img {
      width: 30%;
      height: 30%;
    }
    h1 {
      padding: 0;
      font-size: 1.25rem;
    }
    p {
      padding: 0;
      font-size: 0.75rem;
    }
    .optionsPassword {
      font-size: 0.75rem;
    }
    a {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 1254px) {
    .register {
      flex-direction: column;
      align-items: center;
      gap: 0;
      justify-content: center !important;
      p {
        margin: 0;
      }
      .navigate {
        padding-top: 0;
      }
    }
  }

  @media (min-width: 1600px) {
    .icon {
      right: 1.5rem;
    }
  }
`;

export const LoginContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 2rem 0 2rem 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex: 0.6;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme["green-400"]};
  border-radius: 8px 0px 0px 8px;
  position: relative;

  h1 {
    color: ${(props) => props.theme["black-300"]};
    font-size: 2rem;
    margin: 4rem 0 1rem 0;
    padding: 0 2.5rem;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme["black-300"]};
    margin-bottom: 4rem;
    padding: 0 2.5rem;
  }

  img {
    position: absolute;
    right: 0;
    bottom: 0;
    max-width: 100%;
    max-height: 60%;
  }

  @media (max-width: 768px) {
    h1 {
      padding: 0 0.5rem;
      font-size: 1.25rem;
    }
    p {
      padding: 0 1.5rem;
      font-size: 0.75rem;
    }
    img {
      position: static;
      margin-top: 0 !important;
      align-self: flex-end;
      width: 50%;
      max-height: 50%;
    }
  }
  @media (max-width: 1440px) {
    img {
      margin-top: 15vh;
    }
  }
`;
