import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

type ReviewContainerProps = {
  isModuleFinished: boolean;
  backgroundColor: keyof typeof defaultTheme;
};

export const ReviewContainer = styled.div<ReviewContainerProps>`
  display: flex;
  height: 6rem;
  background-color: ${(props) =>
    props.isModuleFinished
      ? props.theme[`${props.backgroundColor}`]
      : props.theme["gray-200"]};
  margin: 1rem 0 2rem 0;
  padding: 1rem 1rem 0.5rem 1rem;
  border-radius: 8px;

  .title {
    display: flex;
    flex: ${(props) => (props.isModuleFinished ? 0.85 : 0.9)};
    justify-content: center;
    flex-direction: column;
  }
  .graph {
    display: flex;
    flex: 0.1;

    .goReview {
      display: flex;
      padding-left: 50%;
      justify-content: flex-end;
      align-items: center;
      button {
        padding: 1rem 1.5rem;
        border-radius: 52px;
        border: none;
        color: ${(props) => props.theme["black-300"]};
        font-weight: bold;
      }
    }
  }
`;
