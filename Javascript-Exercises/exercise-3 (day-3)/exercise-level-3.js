// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

let d = new Date();

let min = d.getMinutes();
min<10 ? '0'+min.toString() : min;

let hrs = d.getHours();
hrs<10 ? '0'+hrs.toString() : hrs;

let year = d.getFullYear();
let month = d.getMonth();
month < 10 ? '0'+month.toString() : month;
let date = d.getDate();


console.log(`${year}-${month+1}-${date}  ${hrs}:${min}`);
