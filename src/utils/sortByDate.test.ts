import { sortTimeByNewest } from "./sortByDate";
import { TimeSlot } from "types";

describe("sortByDate", () => {
  it("should sort date by newest", () => {
    // Arrange
    const timeSlot: TimeSlot[] = [
      {
        start_time: "2018-07-13T10:30:00.000+02:00",
        end_time: "2018-07-13T12:00:00.000+02:00",
      },
      {
        start_time: "2018-07-13T08:00:00.000+02:00",
        end_time: "2018-07-13T09:30:00.000+02:00",
      },
      {
        start_time: "2018-07-09T08:00:00.000+02:00",
        end_time: "2018-07-09T09:30:00.000+02:00",
      },
    ];

    const timeSlotExpected: TimeSlot[] = [
      {
        start_time: "2018-07-09T08:00:00.000+02:00",
        end_time: "2018-07-09T09:30:00.000+02:00",
      },
      {
        start_time: "2018-07-13T08:00:00.000+02:00",
        end_time: "2018-07-13T09:30:00.000+02:00",
      },
      {
        start_time: "2018-07-13T10:30:00.000+02:00",
        end_time: "2018-07-13T12:00:00.000+02:00",
      },
    ];

    // Act
    const timeSlotResult = sortTimeByNewest(timeSlot);

    // Assert
    expect(timeSlotResult).toStrictEqual(timeSlotExpected);
  });
});
