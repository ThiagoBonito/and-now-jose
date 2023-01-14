import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

type UserProps = {
  color: keyof typeof defaultTheme;
};

export const HomeContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 2rem;
`;

export const ModulesContainer = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  margin-top: 1.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["black-300"]};
    margin-bottom: 1rem;
  }
`;

export const RankingsContainer = styled.div`
  display: flex;
  flex: 0.35;
  flex-direction: column;
  margin-top: 1.5rem;
  height: fit-content;

  .symbolCard {
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid ${(props) => props.theme["black-300"]};
    margin: 1rem;
    height: 35vh;
    border-radius: 8px;
    h1 {
      background-color: ${(props) => props.theme["white"]};
      position: absolute;
      top: 0;
      padding: 0 0.5rem;
      margin: -14px 0 0;
      font-size: 1rem;
    }
    img {
      width: 50%;
      height: 50%;
      margin-top: 0.75rem;
      margin-bottom: 0.5rem;
    }
  }
  .rankingCard {
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    border: 2px solid ${(props) => props.theme["black-300"]};
    margin: 1rem;
    height: 35vh;
    border-radius: 8px;

    h1 {
      background-color: ${(props) => props.theme["white"]};
      position: absolute;
      top: 0;
      padding: 0 0.5rem;
      margin: -14px 0 0;
      font-size: 1rem;
    }

    .topUsers {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 60%;
      margin: 1rem 0;

      .users {
        display: flex;
        flex: 1;
        gap: 0.25rem;
        padding: 0 0.5rem;
      }
    }
    .restUsers {
      display: flex;
      width: 100%;
      flex-direction: column;

      .user {
        display: flex;
        flex: 1;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 0.5rem;
        margin: 0 1rem 0.5rem 1rem;
        border: 2px solid ${(props) => props.theme["green-300"]};
        border-radius: 8px;

        p {
          font-weight: bold;
        }

        div {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          img {
            width: 10%;
            border-radius: 50%;
          }
        }
      }
    }
  }
`;

export const User = styled.div<UserProps>`
  display: flex;
  flex: 0.33;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => (props.color === "gold-500" ? "1rem" : "0")};
  margin-top: ${(props) => (props.color !== "gold-500" ? "1rem" : "0")};

  img {
    width: 50%;
    height: 50%;
    padding: 2px;
    border: 4px solid ${(props) => props.theme[`${props.color}`]};
    border-radius: 50%;
  }
`;
