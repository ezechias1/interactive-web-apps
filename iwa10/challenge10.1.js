const copied = holidays[6];
copied.name = "X- mas";
copied.date.setHours(0,0,0,0)
console.log(copied.date)
const correctDate = new Date(copied.date);


const isEarlier = copied.date < holidays[6].date;
console.log("New date is earlier:", isEarlier);

if (isEarlier) copied.date = correctDate;
console.log("ID change:", holidays[christmas].id != copied.id || copied.id)
console.log('Name change:', holidays[christmas].name != copied.name || copied.name)
console.log('Date change:', holidays[christmas].date != copied.date || copied.date)

const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)
const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)
const firstHoliday = new Date(firstHolidayTimestamp)
const firstDay = firstHoliday.getDate().toString().padStart(2,0)
const firstMonth = (firstHoliday.getMonth()+1).toString().padStart(2.0)
console.log(`${firstDay}/${firstMonth}/${currentYear}`)

const lastHoliday = new Date(lastHolidayTimestamp)
const lastDay = lastHoliday.getDate().toString().padStart(2,0)
const lastHoliday = new Date(lastHolidayTimestamp)
const lastDay = lastHoliday.getDate().toString().padStart(2,0)
const lastMonth = (lastHoliday.getMonth() + 1).toString().padStart(2,0)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)

const randomHoliday = holidays[Math.random]
const randomDay = randomHoliday.getDate().toString().padStart(2,0)
const randomMonth = (randomHoliday.getMonth() + 1).toString().padStart(2,0)
console.log(`${randomDay}/${randomMonth}/${currentYear}`)

console.log(holidays.futureId.name || 'ID {futureId} not created yet')