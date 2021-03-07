import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { SelectedTimeSlot } from "types";

dayjs.extend(isBetween);

export const getAvailableTime = (
  startTime: string,
  endTime: string,
  selectedTimeSlot: SelectedTimeSlot
): boolean => {
  const startTimeOcupied = dayjs(startTime).isBetween(
    dayjs(selectedTimeSlot.startTime).format("YYYY-MM-DDTHH:mm"),
    dayjs(selectedTimeSlot.endTime).format("YYYY-MM-DDTHH:mm"),
    null,
    "[)" // includes startTime and excludes endTime
  );

  const endTimeOcupied = dayjs(endTime).isBetween(
    dayjs(selectedTimeSlot.startTime).format("YYYY-MM-DDTHH:mm"),
    dayjs(selectedTimeSlot.endTime).format("YYYY-MM-DDTHH:mm"),
    null,
    "(]" // excludes startTime and includes endTime
  );

  // The exclusion allows to start one meeting after another

  return startTimeOcupied || endTimeOcupied;
};
