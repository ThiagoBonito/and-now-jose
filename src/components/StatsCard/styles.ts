import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

type UserProps = {
  color: keyof typeof defaultTheme;
};

type RankingsContainerProps = {
  currentSlide: number;
  slideLength: number;
};

export const RankingsContainer = styled.div<RankingsContainerProps>`
  display: flex;
  flex: 0.35 !important;
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
    height: 35vh !important;
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
    .slider-container {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-evenly;
      margin-top: 1rem;

      .arrow-left {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.25rem;
        border-radius: 50%;
        border: none;
        background-color: ${(props) => props.theme["green-400"]};
        cursor: pointer;
        opacity: ${(props) => (props.currentSlide === 0 ? "0" : "1")};
      }

      .arrow-right {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.25rem;
        border-radius: 50%;
        border: none;
        background-color: ${(props) => props.theme["green-400"]};
        cursor: pointer;
        opacity: ${(props) =>
          props.currentSlide + 1 === props.slideLength ? "0" : "1"};
      }

      .photo {
        display: flex;
        flex: 0.9;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p {
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .footer {
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;

          button {
            border: none;
            background-color: transparent;
            cursor: pointer;
          }
        }
      }
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

  @media (max-width: 2560px) {
    flex: 0.25;
  }
  @media (max-width: 1440px) {
    flex: 0.35;
  }
  @media (max-width: 768px) {
    display: none;
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
    width: 4rem;
    height: 4rem;
    padding: 2px;
    border: 4px solid ${(props) => props.theme[`${props.color}`]};
    border-radius: 50%;
  }
`;
