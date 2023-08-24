const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 


 const status1 = document.querySelector("#book1 .status")
 status1.style.color = STATUS_MAP.overdue.color
const reserve1= document.querySelector("#book1 .reserve")
console.log(reserve1)
reserve1.disable=STATUS_MAP.overdue.canReserve
const checkout1= document.querySelector("#book1 .checkout")
console.log(checkout1)
checkout1.disable=STATUS_MAP.overdue.canCheckout
const checkIn1= document.querySelector("#book1 .checkin")
console.log(checkIn1)
checkIn1.style=STATUS_MAP.overdue.canCheckIn

const status2 = document.querySelector("#book2 .status")
 status2.style.color = STATUS_MAP.reserved.color
const reserve2= document.querySelector("#book2 .reserve")
 console.log(reserve2)
 reserve2.disable=STATUS_MAP.reserved.canReserve
 const checkout2= document.querySelector("#book2 .checkout")
 console.log(checkout2)
 checkout1.disable=STATUS_MAP.reserved.canCheckout
 const checkIn2= document.querySelector("#book2 .checkin")
 console.log(checkIn2)
 checkIn2.style=STATUS_MAP.reserved.canCheckIn


 const status3 = document.querySelector("#book3 .status")
  status1.style.color = STATUS_MAP.shelf.color
 const reserve3= document.querySelector("#book3 .reserve")
  console.log(reserve3)
  reserve2.disable=STATUS_MAP.shelf.canReserve
  const checkout3= document.querySelector("#book3 .checkout")
  console.log(checkout3)
  checkout1.disable=STATUS_MAP.shelf.canCheckout
  const checkIn3= document.querySelector("#book3 .checkin")
  console.log(checkIn3)
  checkIn3.style=STATUS_MAP.shelf.canCheckIn
