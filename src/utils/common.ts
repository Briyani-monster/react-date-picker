export const abbreviationFromWeekDay = (day: string) => day.slice(0, 2);

/**
 * Gets a 2D array of numbers representing a month's calendar.
 *
 * The first element of each subarray is the first day of the week and the last element is the last day of the week.
 * The first week may include days from the previous month, and the last week may include days from the next month.
 *
 * @param {number} year
 * @param {number} month
 * @returns {number[][]}
 */
export function getMonthCalendar(year: number, month: number): Date[][] {
  const weeks: Date[][] = [];
  const firstDayOfMonth = new Date(year, month, 1); // First day of the current month
  const lastDayOfMonth = new Date(year, month + 1, 0); // Last day of the current month

  // Determine the day of the week the month starts (0 = Sunday, 6 = Saturday)
  const currentDate = new Date(year, month, 1 - firstDayOfMonth.getDay());

  // Build the calendar week by week
  while (currentDate <= lastDayOfMonth || currentDate.getDay() !== 0) {
    const week: Date[] = [];
    for (let i = 0; i < 7; i++) {
      week.push(new Date(currentDate)); // Add the current date to the week
      currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
    }
    weeks.push(week); // Add the week to the calendar
  }

  return weeks;
}
