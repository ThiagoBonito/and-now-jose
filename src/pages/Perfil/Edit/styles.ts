import styled from "styled-components";

export const EditContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-top: 6.5rem;

  .backPage {
    display: flex;
    flex: 0.15;
    height: 2rem;
    justify-content: center;

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background-color: ${(props) => props.theme["green-300"]};
      padding: 0.25rem 0.5rem;
      border-radius: 8px;
      border: none;

      p {
        color: ${(props) => props.theme["black-300"]};
        font-weight: bold;
      }

      &:hover {
        background-color: ${(props) => props.theme["green-400"]};
        cursor: pointer;
      }
    }
  }
  .contentEdit {
    display: flex;
    flex: 0.85;
    flex-direction: column;
    padding: 0 2rem;

    p {
      margin-bottom: 1rem;
    }

    .header {
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 1rem;

      button {
        display: flex;
        gap: 1rem;
        align-items: center;
        background-color: ${(props) => props.theme["green-300"]};
        color: ${(props) => props.theme["black-300"]};
        font-weight: bold;
        font-size: 1rem;
        padding: 0 2rem;
        border: none;
        border-radius: 6px;

        &:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }
      }
    }

    .content {
      .photos {
        margin-bottom: 2rem;

        h3 {
          margin-bottom: 1rem;
        }

        .controlButtons {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          .dropzone {
            width: 20%;
            background-color: ${(props) => props.theme["green-300"]};
            color: ${(props) => props.theme["black-300"]};
            padding: 0.5rem;
            border-radius: 6px;
            cursor: pointer;

            .button {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
              font-weight: bold;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }

          .removePhoto {
            display: flex;
            width: 20%;
            padding: 0.5rem;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            border-radius: 6px;
            font-weight: bold;
            border: 2px solid ${(props) => props.theme["green-300"]};
            background-color: transparent;
            cursor: pointer;
          }
        }
      }

      .infos {
        display: flex;
        flex: 1;
        flex-direction: column;

        h3 {
          margin-bottom: 0.5rem;
        }

        .simpleInput {
          display: flex;
          width: 60%;
          padding: 0.5rem 0.25rem;
          border: 1px solid ${(props) => props.theme["gray-200"]};
          border-radius: 4px;
          margin-bottom: 1rem;

          &:disabled {
            opacity: 0.8;
            cursor: not-allowed;
          }
        }

        .passwordContainer {
          display: flex;
          width: 61%;
          position: relative;
        }

        .passwordInput {
          display: flex;
          flex: 1;
          padding: 0.5rem;
          border: 1px solid ${(props) => props.theme["gray-200"]};
          border-radius: 4px;
          margin-bottom: 1rem;
        }

        .passwordIcon {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-65%);
          cursor: pointer;
          color: ${(props) => props.theme["black-200"]};
        }
      }
    }
  }

  @media (max-width: 425px) {
    flex-direction: column;

    .backPage {
      justify-content: flex-start;
      margin-left: 2rem;
      margin-bottom: 1rem;
    }
    .contentClass {
      h2 {
        font-size: 1.25rem;
      }
      p {
        font-size: 0.75rem !important;
      }
    }
  }
`;
