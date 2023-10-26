const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

 const customers=1
 let location1= 'RSA'
 let currency= null
 let shipping=800


const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries =35 * 2
const pens = 5 * NONE_SELECTED 
const total= shoes+toys+ shirts+batteries+pens;
shipping = null
  currency = 'R'

if (location1=== "RSA") {shipping===400, currency==='R'
}
if (location1=== "NAM")
	{shipping===600 , currency==='$'
}
else{shipping===800 ,currency==='$'
}

if (total>1000 && location1==='RSA'&&customers===1)
{shipping===0 }else {shipping===400}

if ( total>60 && location1==='NAM' &&customers===1)
{shipping===0}
if (shipping===0 && customers!==1) {console.log(FREE_WARNING)}

if (location1==='NK') {console.log(BANNED_WARNING) }
else{console.log ('price', currency, total + shipping)}
	

 