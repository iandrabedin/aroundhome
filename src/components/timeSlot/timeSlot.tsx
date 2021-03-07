import React from "react";
import { SelectedTimeSlot } from "types";
import Button from "../button";
import { getStartEndTime, getAvailableTime } from "utils";

interface TimeSlotProps {
  companyId: number;
  id: string;
  startTime: string;
  endTime: string;
  selectedTimeSlot: SelectedTimeSlot;
  onSelectTimeSlot: (param: SelectedTimeSlot) => void;
  onRemoveTimeSlot: () => void;
}

const TimeSlot = (props: TimeSlotProps) => {
  const {
    companyId,
    startTime,
    endTime,
    onSelectTimeSlot,
    onRemoveTimeSlot,
    selectedTimeSlot,
    id,
  } = props;

  const isTimeSlotActive = selectedTimeSlot.timeSlotId === id;

  const isDisabled =
    !isTimeSlotActive && getAvailableTime(startTime, endTime, selectedTimeSlot);

  const handleOnClick = () => {
    if (isTimeSlotActive) {
      onRemoveTimeSlot();
    } else {
      onSelectTimeSlot({ companyId, startTime, endTime, timeSlotId: id });
    }
  };

  return (
    <Button
      onClick={handleOnClick}
      disabled={isDisabled}
      variant={isTimeSlotActive ? "primary" : "secondary"}
    >
      {getStartEndTime(startTime, endTime)}
    </Button>
  );
};

export default TimeSlot;
