import React from "react";
import dayjs from "dayjs";
import { CompanyVM, SelectedTimeSlot } from "types";
import {
  Container,
  Company,
  ReservationInfo,
  ReservationInfoSelected,
} from "./header.style";

interface HeaderProps {
  company: CompanyVM;
  selectedTimeSlot: SelectedTimeSlot;
}

const Header = (props: HeaderProps) => {
  const { company, selectedTimeSlot } = props;

  const reservationTime = `
  ${dayjs(selectedTimeSlot.startTime).format("HH:mm")} - 
  ${dayjs(selectedTimeSlot.endTime).format("HH:mm")}
  `;

  return (
    <Container>
      <Company>{company.name}</Company>
      {selectedTimeSlot?.companyId === company.id ? (
        <ReservationInfoSelected>
          Reservation <span>{reservationTime}</span>
        </ReservationInfoSelected>
      ) : (
        <ReservationInfo>No reservation</ReservationInfo>
      )}
    </Container>
  );
};

export default Header;
