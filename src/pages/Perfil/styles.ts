import styled from "styled-components";

export const PerfilContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 5.5rem;
  margin-left: 16%;

  @media (max-width: 425px) {
    flex-direction: column;
    padding: 0 2rem;
    margin: 0.25rem 0 0 0;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 1.5rem;

  h1 {
    margin: 1.5rem 0;
    font-size: 1.5rem;
    color: ${(props) => props.theme["black-300"]};
  }

  .cardUser {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: flex-start;
    .user {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      .userPhoto {
        width: 9rem;
        height: 9rem;
        padding: 0.5rem;
        border: 9px solid ${(props) => props.theme["green-300"]};
        border-radius: 50%;
      }

      .userInfo {
        div {
          height: 50%;
          margin-bottom: 1rem;
          h1 {
            margin: 0;
            font-size: 1.5rem;
            font-weight: bold;
            color: ${(props) => props.theme["black-300"]};
          }
          p {
            margin: 0;
            font-size: 1rem;
            color: ${(props) => props.theme["black-100"]};
          }
          .statsUser {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;
          }
        }
      }
    }

    .editUser {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.5rem;
      margin-right: 2rem;
      background-color: ${(props) => props.theme["green-300"]};
      color: ${(props) => props.theme["black-300"]};
      font-weight: bold;
      border: none;
      border-radius: 8px;

      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme["green-500"]};
      }
    }
  }

  @media (max-width: 660px) {
    .cardUser {
      .user {
        .userPhoto {
          width: 4rem;
          height: 4rem;
          border: 6px solid ${(props) => props.theme["green-300"]};
        }
        .userInfo {
          div {
            h1 {
              margin: 0;
              font-size: 1rem;
              font-weight: bold;
              color: ${(props) => props.theme["black-300"]};
            }
            p {
              margin: 0;
              font-size: 0.75rem;
              color: ${(props) => props.theme["black-100"]};
            }
            .statsUser {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 0.25rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 425px) {
    margin-left: 0;
    .cardUser {
      flex-direction: column;
      align-items: center;
      .user {
        .userPhoto {
          width: 4rem;
          height: 4rem;
          border: 6px solid ${(props) => props.theme["green-300"]};
        }
      }
      .editUser {
        width: 100%;
        margin: 0;
      }
    }
  }
`;
