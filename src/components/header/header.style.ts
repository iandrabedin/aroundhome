import styled from "styled-components";
import theme from "styles/theme";

const Container = styled.div`
  position: sticky;
  top: 69px;
  text-align: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.black};
  border-radius: 4px;
`;

export { Container };
