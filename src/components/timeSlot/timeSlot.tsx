import React, { useState } from "react";
import { SelectedTimeSlot } from "types";
import Button from "../button";
import { getStartEndTime, getAvailableTime } from "utils";

interface TimeSlotProps {
  companyId: number;
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
  } = props;

  const [isTimeSlotActive, setIsTimeSlotActive] = useState(false);

  const isDisabled =
    !isTimeSlotActive && getAvailableTime(startTime, endTime, selectedTimeSlot);

  const handleOnClick = () => {
    if (isTimeSlotActive) {
      onRemoveTimeSlot();
      setIsTimeSlotActive(false);
    } else {
      onSelectTimeSlot({ companyId, startTime, endTime });
      setIsTimeSlotActive(true);
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
