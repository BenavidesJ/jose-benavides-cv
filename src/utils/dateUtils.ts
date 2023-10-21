import dayjs from 'dayjs';
/*
 * This function helps to get a period of time to show
 * dates between studies, etc.
 */
export function getPeriodDate(date: string) {
  let now = dayjs();
  const eventDate = dayjs(date).format('YYYY MMM');
  if (now.diff(eventDate) > 0) {
    return eventDate;
  } else {
    return null;
  }
}
