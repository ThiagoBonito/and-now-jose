import styled from "styled-components";

export const RankingContainer = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 425px) {
    flex-direction: column;
    padding: 0 2rem;
  }
`;
