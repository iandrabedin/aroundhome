import dayjs from "dayjs";

export const getStartEndTime = (startTime: string, endTime: string): string => {
  return `${dayjs(startTime).format("HH:mm")} - ${dayjs(endTime).format(
    "HH:mm"
  )}`;
};
