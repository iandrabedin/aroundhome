import React, { useState } from "react";
import { CompanyVM, SelectedTimeSlot } from "types";
import { getWeekday } from "utils";
import { Column, TimeSlot, List, ListTitle, Header } from "../../components";
import { Container } from "./reservation.style";

export interface ReservationProps {
  companies: CompanyVM[];
}

const initialSelectedTimeSlot = {
  companyId: 0,
  startTime: "",
  endTime: "",
};

const Reservation = (props: ReservationProps) => {
  const { companies } = props;
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(
    initialSelectedTimeSlot
  );

  const onSelectTimeSlot = (selectedTimeSlot: SelectedTimeSlot) => {
    setSelectedTimeSlot(selectedTimeSlot);
  };

  const onRemoveTimeSlot = () => {
    setSelectedTimeSlot(initialSelectedTimeSlot);
  };

  return (
    <Container>
      {companies.map((company, index) => (
        <Column key={index}>
          <Header company={company} selectedTimeSlot={selectedTimeSlot} />
          {company?.time_slots_groups.map((group, index) => (
            <List key={index}>
              <ListTitle text={getWeekday(group?.date)} />
              {group?.time_slots.map((time, index) => (
                <TimeSlot
                  key={index}
                  companyId={company?.id}
                  startTime={time?.start_time}
                  endTime={time?.end_time}
                  onSelectTimeSlot={onSelectTimeSlot}
                  onRemoveTimeSlot={onRemoveTimeSlot}
                  selectedTimeSlot={selectedTimeSlot}
                />
              ))}
            </List>
          ))}
        </Column>
      ))}
    </Container>
  );
};

export default Reservation;
