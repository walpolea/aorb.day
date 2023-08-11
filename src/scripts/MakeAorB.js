
function formatDate(d) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

let startDate = new Date(2023, 7, 10); // Months are 0-indexed in JS
let endDate = new Date(2024, 5, 15);

let skipDates = [
  '2023-09-04',
  '2023-10-02',
  '2023-10-03',
  '2023-10-04',
  '2023-10-05',
  '2023-10-06',
  '2023-10-09',
  '2023-10-10',
  '2023-10-11',
  '2023-10-12',
  '2023-10-13',
  '2023-11-10',
  '2023-11-20',
  '2023-11-21',
  '2023-11-22',
  '2023-11-23',
  '2023-11-24',
  '2023-12-22',
  '2023-12-25',
  '2023-12-26',
  '2023-12-27',
  '2023-12-28',
  '2023-12-29',
  '2024-01-01',
  '2024-01-02',
  '2024-01-03',
  '2024-01-04',
  '2024-01-05',
  '2024-01-15',
  '2024-02-12',
  '2024-02-19',
  '2024-03-25',
  '2024-03-26',
  '2024-03-27',
  '2024-03-28',
  '2024-03-29',
  '2024-04-01',
  '2024-04-02',
  '2024-04-03',
  '2024-04-04',
  '2024-04-05',
  '2024-05-27',
];

let currentDate = new Date(startDate);
let data = {};

let currentValue = "A";

while (currentDate <= endDate) {
  let weekDay = currentDate.getDay();
  let currentDateString = currentDate.toISOString().split('T')[0];

  if (!skipDates.includes(currentDateString)) {
      if (weekDay >= 1 && weekDay <= 5) {  // 1-5 denotes Monday to Friday
          data[currentDateString] = { 
              "aorb": currentValue,
              "readableDate": formatDate(currentDate)
          };
          currentValue = currentValue === "A" ? "B" : "A";  // Alternate between "A" and "B"
      }
  }

  currentDate.setDate(currentDate.getDate() + 1);  // Move to the next day
}

let jsonData = JSON.stringify(data, null, 4);

console.log(jsonData);