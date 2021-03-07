import React, { useState, useEffect, useCallback } from "react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { SelectedTimeSlot } from "types";
import Button from "../button";

interface TimeSlotProps {
  companyId: number;
  startTime: string;
  endTime: string;
  selectedTimeSlot: SelectedTimeSlot;
  onSelectTimeSlot: (param: SelectedTimeSlot) => void;
  onRemoveTimeSlot: (companyId: number) => void;
}

dayjs.extend(localizedFormat);

const TimeSlot = (props: TimeSlotProps) => {
  const {
    companyId,
    startTime,
    endTime,
    onSelectTimeSlot,
    onRemoveTimeSlot,
    selectedTimeSlot,
  } = props;

  const [isTimeSlotDisabled, setIsTimeSlotDisabled] = useState(false);
  const [isTimeSlotActive, setIsTimeSlotActive] = useState(false);

  const handleTimeSlotAvailability = useCallback(() => {
    if (selectedTimeSlot.startTime === startTime) {
      setIsTimeSlotDisabled(true);
    }
  }, [selectedTimeSlot, startTime]);

  useEffect(() => {
    handleTimeSlotAvailability();
  }, [
    selectedTimeSlot,
    selectedTimeSlot.startTime,
    handleTimeSlotAvailability,
  ]);

  const handleOnClick = () => {
    if (isTimeSlotActive) {
      onRemoveTimeSlot(companyId);
      setIsTimeSlotActive(false);
    } else {
      onSelectTimeSlot({ companyId, startTime, endTime });
      setIsTimeSlotActive(true);
    }
  };

  return (
    <Button
      onClick={handleOnClick}
      disabled={!isTimeSlotActive && isTimeSlotDisabled}
      variant={isTimeSlotActive ? "primary" : "secondary"}
    >
      {`${dayjs(startTime).format("HH:mm")} - ${dayjs(endTime).format(
        "HH:mm"
      )}`}
    </Button>
  );
};

export default TimeSlot;