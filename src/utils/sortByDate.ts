import { TimeSlot } from "types";

export const sortTimeByNewest = (time: TimeSlot[]) => {
  return time.sort((a, b) => a.end_time.localeCompare(b.end_time));
};

export const sortTimeByOldest = (time: TimeSlot[]) => {
  return time.sort((a, b) => a.end_time.localeCompare(b.end_time));
};
