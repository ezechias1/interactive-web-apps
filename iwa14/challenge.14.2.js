// script.js


const add = (a, b) => a + b; // 
const multiply = (a, b) => a * b; // 

function internal() {
  const internalD = add(this.internal.a, this.internal.b); 
  const internalE = multiply(internalD, this.internal.c); 
  console.log(internalE)
  return internalE;
}
// function add    (a)  => { a + b }
    
// function multiply = (b)  => { a * b }

// function internal() {
// 	const added = this.add(this.a, this.b)
// 	this.multiply(this.a, this.b)
// 	return this
// }

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()