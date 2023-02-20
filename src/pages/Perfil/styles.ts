import styled from "styled-components";

export const PerfilContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 5.5rem;
  margin-left: 16%;

  @media (max-width: 425px) {
    flex-direction: column;
    padding: 0 2rem;
  }
`;
