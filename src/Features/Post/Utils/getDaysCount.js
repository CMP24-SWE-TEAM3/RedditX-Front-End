function getDaysCount(date1Str, date2Str) {
  let date1 = new Date(date1Str);
  let date2 = new Date(date2Str);
  let difference = date1.getTime() - date2.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays;
}

export default getDaysCount;
