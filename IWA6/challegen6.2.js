const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line
hourOfDay===0

if (hourOfDay!==null) (minuteOfDay !== null) && (hourOfDay == '00') && (minuteOfDay == '00')

 {
	const taxAsDecimal = '100'/tax
	console.log(taxAsDecimal)
  const startingAfterTax = salary * '1' - taxAsDecimal
	const balance =startingAfterTax (salary - transport - food - rent)
}
	
console.log(balance.toFixed(3))