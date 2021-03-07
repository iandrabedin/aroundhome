import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";

dayjs.extend(weekday);
dayjs.extend(localeData);

const weekdaysList = dayjs.localeData().weekdays();

export const getWeekday = (timeSlotDate: string): string => {
  const timeSlotWeekday = dayjs(timeSlotDate).weekday();

  return weekdaysList
    .filter((day, index) => index === timeSlotWeekday && day)
    .toString();
};
