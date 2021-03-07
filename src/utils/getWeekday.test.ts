import { getWeekday } from "./getWeekday";

describe("getWeekday", () => {
  it("should return weekday from date", () => {
    // Arrange
    const date = "2018-07-09";
    const dateExpected = "Monday";

    // Act
    const dateResult = getWeekday(date);
    // Assert
    expect(dateResult).toStrictEqual(dateExpected);
  });
});
