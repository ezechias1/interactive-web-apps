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


const status1 = document.querySelector("#book1")
console.log(status1)
if (status1.querySelector(".status").innerHTML=="shelf") {
    status1.style.color = STATUS_MAP.shelf.color
    status1.style.color = STATUS_MAP.status.color
    reserve1 = STATUS_MAP.shelf.canReserver ? 'enabled' : 'disabled'
    checkout1 = STATUS_MAP.shelf.canCheckout ? 'enabled' : 'disabled'
    checkIn = STATUS_MAP.shelf.canCheckIn ? 'enabled' : 'disabled'
}
else if (status1.innerHTML=="reserved") {
status1.style.color= STATUS_MAP.reserved.color
}
else if (status1.innerHTML=="overdue") {
    status1.style.color= STATUS_MAP.overdue.color
}
else if (status1.innerHTML=="checkedOut") {
    status1.style.color= STATUS_MAP.checkedOut.color
}
const status2 = document.querySelector("#book2 .status")
console.log(status2)
if (status2.innerHTML=="shelf") {
    status2.style.color = STATUS_MAP.shelf.color
    checkIn2.color = none
    status2.style.color = STATUS_MAP.status.color
    reserve2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
    checkout2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
    checkIn2= STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'
    
}
else if (status2.innerHTML=="reserved") {
status2.style.color= STATUS_MAP.reserved.color
}
else if (status2.innerHTML=="overdue") {
    status2.style.color= STATUS_MAP.overdue.color
}
else if (status2.innerHTML=="checkedOut") {
    status2.style.color= STATUS_MAP.checkedOut.color
}
const status3 = document.querySelector("#book3 .status")
console.log(status3)
if (status3.innerHTML=="shelf") {
    status3.style.color = STATUS_MAP.shelf.color
   
}
else if (status3.innerHTML=="reserved") {
status3.style.color= STATUS_MAP.reserved.color
}
else if (status3.innerHTML=="overdue") {
    status3.style.color= STATUS_MAP.overdue.color
}
else if (status3.innerHTML=="checkedOut") {
    status3.style.color= STATUS_MAP.checkedOut.color
}
//status1.style.color = (STATUS_MAP.status1)
status1.color


const shelf = status1.querySelector(".checkin")
shelf.disabled = STATUS_MAP.status.canCheckIn
 


checkIn.color = none
status1.style.color = STATUS_MAP.status.color
reserve1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkIn = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkIn2.color = none
status2.style.color = STATUS_MAP.status.color
reserve2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkIn2= STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkIn3.color = none
status3.style.color = STATUS_MAP.status.color
reserve3 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout3 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkIn3= STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'