import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  flex: 1;
  gap: 2rem;
  margin-top: 5.5rem;
  margin-left: 16%;
  @media (max-width: 425px) {
    flex-direction: column;
    padding: 0 2rem;
    margin: 0.25rem 0 0 0 !important;
  }
  @media (max-width: 768px) {
    margin-left: 25%;
  }
`;

export const ModulesContainer = styled.div`
  display: flex;
  flex: 0.65 !important;

  flex-direction: column;
  margin-top: 1.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["black-300"]};
    margin-bottom: 1rem;
  }

  @media (max-width: 2560px) {
    flex: 0.6;
  }
  @media (max-width: 1440px) {
    flex: 0.5;
  }
  @media (max-width: 768px) {
    flex: 0.9 !important;
  }
  @media (max-width: 425px) {
    margin-top: 0;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex: 0.85;
  margin: 0 2rem;
  justify-content: center;
  align-items: center;
`;
