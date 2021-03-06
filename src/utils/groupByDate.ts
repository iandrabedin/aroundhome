import { TimeSlot } from "types";

export const groupByDate = (timeSlots: TimeSlot[]) => {
  const timeSlotGroupsObj = timeSlots.reduce((groups: any, timeSlotItem) => {
    const date = timeSlotItem.start_time.split("T")[0];

    if (!groups[date]) {
      groups[date] = [];
    }

    groups[date].push(timeSlotItem);

    return groups;
  }, {});

  const timeSlotGroups = Object.keys(timeSlotGroupsObj).map((date) => ({
    date,
    time_slots: timeSlotGroupsObj[date],
  }));

  return timeSlotGroups;
};
