const date= 2050
const status1="parent" 
let count = 0
if (date===2050) 
{
	console.log("January", 'New Years Day')
	console.log("March", 'Human Rights Day')
	 let month = "April"
	console.log(month, 'Family Day')
	console.log(month, 'Freedom Day')
	count = count + 4

	if (status1 === "student") {
		console.log('June', 'Youth Day')
		 count = count + 1
	}
	console.log('August', 'Womens Day')
	console.log('September', 'Heritage Day')
	date+'December'
	console.log(date, 'Day of Reconciliation')
	 count = count + 3

	if (status1 === "parent") 	 
  {
	console.log(date, 'Christmas Day')
	 count = count + 1

	console.log(date, 'Day of Goodwill')
	 count = count + 1
} 
}

console.log('Your status is:', status1 )
console.log('The year is:', date)
console.log('The total holidays is:', count)