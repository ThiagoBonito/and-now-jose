import styled from "styled-components";

export const ClassModule = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  background-color: ${(props) => props.theme["green-300"]};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;

  .align {
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-between !important;
  }

  .contentClass {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  .goClass {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 2rem;
    justify-content: center;

    button {
      display: flex;
      padding: 1rem 1.5rem;
      border-radius: 52px;
      border: none;
      color: ${(props) => props.theme["black-300"]};
      font-weight: bold;
    }
  }
`;
