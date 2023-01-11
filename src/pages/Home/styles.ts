import styled from "styled-components";

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
  margin-top: 1.5rem;

  .symbolCard {
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid ${(props) => props.theme["black-300"]};
    margin: 1rem;
    height: 40vh;
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
      width: 60%;
      height: 60%;
      margin-bottom: 0.5rem;
    }
  }
`;
