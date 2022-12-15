function compareDate(str1) {
    // str1 format should be dd/mm/yyyy. Separator can be anything e.g. / or -. It wont effect
    let date = str1.split(',');
    let dt1 = date[2];
    let mon1 = date[1];
    let yr1 = date[0];
    let date1 = new Date(yr1, mon1-1, dt1);
    return date1;
}

export default compareDate;