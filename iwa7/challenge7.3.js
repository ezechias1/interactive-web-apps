const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const owed = parseFloat( + leoBalance + sarahBalance)
const leo = '${leoName} + ${leoSurname} (text.trim) (Owed:R {leoBalance})n"

 sarah = '${sarahName} + {surname} (Owed:R${sarahBalance})\n\n\
const total = "\nTotal amount owed:\n "
const result = leo + sarah + divider + divider + total + owed + divider

console.log(result)