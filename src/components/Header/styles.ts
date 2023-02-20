import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 0.5rem;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  z-index: 2;
  background-color: ${(props) => props.theme["white"]};

  img {
    width: 5rem;
    height: 5rem;
  }
`;
