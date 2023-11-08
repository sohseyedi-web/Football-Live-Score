export default function getTime(value: number) {
  const today = new Date();
  const getDate = new Date(today.getTime());
  getDate.setDate(today.getDate() + value);

  const year = getDate.getFullYear();
  const month = String(getDate.getMonth() + 1).padStart(2, "0");
  const day = String(getDate.getDate()).padStart(2, "0");

  const timeZone = [year, month, day].join("-");
  return timeZone;
}

// Enter a negative number to get the date of the previous day and a positive number to get the next day
// example : yesterday => -1 , tommorrow : 1 ,after tomorrow : 2
