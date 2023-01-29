import styled from "styled-components";

export const FeedbackContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  .feedback {
    display: flex;
    flex: 0.8;
    flex-direction: column;
    align-items: center;

    .img {
      display: flex;
      flex: 1;
      justify-content: center;

      img {
        width: 60rem;
        height: 25rem;
      }
    }
    h2 {
      margin: 1rem 0;
    }
    .button {
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      padding: 0.5rem 2rem;
      margin: 0.5rem 0;
      background-color: ${(props) => props.theme["cyan-400"]};
      cursor: pointer;

      :hover {
        opacity: 0.8;
      }
    }
  }
`;
