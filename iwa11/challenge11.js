 // script.js
 


const root1 = document.querySelector('[data-key="order1"]')
console.log(root1)
const data_biscuits =root1.dataset.biscuits
console.log(data_biscuits)

const data_donuts= root1.dataset.donuts
console.log(data_donuts)

const data_pancakes=root1.dataset.pancakes
console.log(data_pancakes)

const data_delivered=root1.dataset.delivered
console.log(data_delivered)




const root2= document.querySelector('[data-key="order2"]')
console.log(root2)
const doc_biscuits =root2.dataset.biscuits
console.log(doc_biscuits)

const doc_donuts= root2.dataset.donuts
console.log(doc_donuts)

const doc_pancakes=root2.dataset.pancakes
console.log(doc_pancakes)

const doc_delivered=root2.dataset.delivered
console.log(doc_delivered)

const root3= document.querySelector('[data-key="order3"]')
console.log(root3)
const _biscuits =root3.dataset.biscuits
console.log(_biscuits)

const _donuts= root3.dataset.donuts
console.log(_donuts)

const _pancakes=root3.dataset.pancakes
console.log(_pancakes)

const _delivered=root3.dataset.delivered
console.log(_delivered)




const biscuits = document.querySelector('[data-key="order1"] .biscuits .count')
console.log(biscuits) 
biscuits.innerHTML=data_biscuits
const donuts = document.querySelector('[data-key="order1"] .donuts .count')
donuts.innerHTML=data_donuts
const pancakes= document.querySelector('[data-key="order1"] .pancakes .count')
pancakes.innerHTML=data_pancakes
const delivered=document.querySelector('[data-key="order1"] .status dd')
delivered.innerHTML=data_delivered

const biscuits2 = document.querySelector('[data-key="order2"] .biscuits .count')
console.log(biscuits) 
biscuits.innerHTML=doc_biscuits
const donut2 = document.querySelector('[data-key="order2"] .donuts .count')
donuts.innerHTML=doc_donuts
const pancakes2= document.querySelector('[data-key="order2"] .pancakes .count')
pancakes.innerHTML=doc_pancakes
const delivered2=document.querySelector('[data-key="order2"] .status dd')
delivered.innerHTML=doc_delivered





