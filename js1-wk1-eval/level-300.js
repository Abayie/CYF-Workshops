

const day = "Friday";
const month = "September";
const date = 29;
const time = "21:49";

const macTimeDisplay = `${day.slice(0,3)} ${date} ${month.slice(0,3)} ${time}`;

// Before running code, answer the following - write down your answers:
// a) how many function calls are there in this file?
// There are 2 function calls in this file: `slice` is called twice on the `day` and `month` variables.
// b) predict and explain what macTimeDisplay will evaluate to. You can use documentation to look up slice
// The `macTimeDisplay` will evaluate to "Fri 29 Sep 21:49". The `slice` method is used to extract the first three characters from the `day` and `month` strings, resulting in "Fri" for Friday and "Sep" for September. The date and time are included as they are.
