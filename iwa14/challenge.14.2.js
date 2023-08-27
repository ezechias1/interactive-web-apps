// script.js

const addNumbers = (a,b)  => 
{ a + b ;}


const multiplyNumber = (a,b)   => 
{ a * b }

const internal= {
	 added:  this.addNumbers(this.a, this.b).
	   this.multiplyNumber(this.a, this.b)
//	return this
// 
}
console.log(internal)
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