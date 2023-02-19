import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

type UserProps = {
  color: keyof typeof defaultTheme;
};

export const RankingContainer = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 425px) {
    flex-direction: column;
    padding: 0 2rem;
  }
`;

export const RankingsContainer = styled.div`
  display: flex;
  flex: 1 !important;
  flex-direction: column;
  margin: 0 2rem;
  height: fit-content;

  h1 {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme["black-300"]};
  }

  .rankingCard {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    height: 50vh;
    border-radius: 8px;

    .topUsers {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 60%;
      margin: 1rem 0;

      .users {
        display: flex;
        flex: 1;
        justify-content: space-between;
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
        justify-content: space-around;
        align-items: center;
        padding: 0.75rem 0.5rem;
        margin: 0 1rem 0.5rem 1rem;
        border: 3px solid ${(props) => props.theme["green-300"]};
        border-radius: 8px;

        div {
          display: flex;
          align-items: center;
          gap: 0.5rem;

          p:nth-child(1) {
            padding-right: 1rem;
          }

          img {
            width: 8%;
            border-radius: 50%;
          }
        }
        .rewards {
          display: flex;
          flex: 1 !important;
          align-items: center;
          justify-content: center;

          img {
            width: 3rem;
            height: 3rem;
          }
        }
      }

      .user:nth-child(3) {
        background-color: ${(props) => props.theme["green-300"]};
      }
    }
  }
`;

export const User = styled.div<UserProps>`
  display: flex;
  flex: 0.4;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => (props.color === "gold-500" ? "1rem" : "0")};
  margin-top: ${(props) => (props.color !== "gold-500" ? "1rem" : "0")};

  img {
    width: 40%;
    height: 60%;
    padding: 0.5rem;
    border: 8px solid ${(props) => props.theme[`${props.color}`]};
    border-radius: 50%;
  }
  div {
    display: flex;
    flex: 1;

    img {
      width: 4rem;
      height: 4rem;
      border: none;
      border-radius: 0;
    }
  }
`;
