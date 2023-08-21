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
const delivered=document.querySelector('[data-key="order1"] .delivered .dd ')
delivered.innerHTML=delivered


//const biscuits2 = document.querySelector('[data-key="order2"] .biscuits .count')
//biscuits2.innerHTML=1



//1-biscuits= 1-root.biscuits,
//1-donuts = 1-root.donuts,
//1-pancakes = 1-root.pancakes,
//1-status = 1-root.status ? Delivered : Pending

//2-biscuits= 2-root.biscuits,
//2-donuts = 2-root.donuts,
//2-pancakes = 2-root.pancakes,
//2-status = 2-root.status ? Delivered : Pending

//3-biscuits= 3-root.biscuits,
//3-donuts = 3-root.donuts,
//3-pancakes = 3-root.pancakes,
//3-status = 3-root.status ? Delivered : Pending                     