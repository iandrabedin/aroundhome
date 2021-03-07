import styled from "styled-components";
import theme from "styles/theme";

const Container = styled.div`
  position: sticky;
  top: 69px;
  text-align: center;
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.black};
  border-radius: 4px;
`;

const ReservationInfo = styled.p`
  text-transform: uppercase;
`;

const ReservationInfoSelected = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  margin: 0;
  padding: 1rem;
`;

const Company = styled.h2``;

export { Container, Company, ReservationInfo, ReservationInfoSelected };
