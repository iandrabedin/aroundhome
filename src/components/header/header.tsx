import React from "react";
import dayjs from "dayjs";
import { CompanyVM, SelectedTimeSlot } from "types";
import { Container } from "./header.style";

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
      <p>{company.name}</p>
      {selectedTimeSlot?.companyId === company.id ? (
        <p>
          Reservation <span>{reservationTime}</span>
        </p>
      ) : (
        <p>No reservation</p>
      )}
    </Container>
  );
};

export default Header;
