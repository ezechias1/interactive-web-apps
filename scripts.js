const number= document.querySelector('[data-key="number"]' )
const subtract= document.querySelector('[data-key="subtract"]' )
const add = document.querySelector('[data-key="add"]' )

const subtractHandler =() =>{
    const newValue =parseInt(number.value)-1
    number.value =newValue;
    console.log('subtract');
}

const addHandler =() =>{
    const newValue =parseInt(number.value)+1
    number.value =newValue;
    console.log('add');
}

subtract.addEventListener('click', subtractHandler)

add.addEventListener('click', addHandler)

