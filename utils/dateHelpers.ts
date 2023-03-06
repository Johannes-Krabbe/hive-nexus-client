import dayjs from "dayjs";

export function getFormattedDate(date: Date) {
  const formattedDate = dayjs(date).format("DD/MM/YYYY");

  return formattedDate;
}

// TODO: get diff, like posted 1hr ago / 16 days ago
export function getDateDifference(date: Date) {}
