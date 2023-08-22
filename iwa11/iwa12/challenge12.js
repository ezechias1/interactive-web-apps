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

//status0 = selector(status)
//reserve0 = selector(reserve)
//checkoutO = selector(checkout)
//checkin0 = selector(checkin)

//status1 = selector(status)
//reserve1 = selector(reserve)
//checkout1 = selector(checkout)
//checkin1 = selector(checkin)

//status2 = selector(status)
//reserve2 = selector(reserve)
//checkout2 = selector(checkout)
//checkin2 = selector(checkin)

const book= document.querySelector('[id="#book1"]')
console.log(book)

checkin0.color = none
status0.style.color = STATUS_MAP.status.color
reserve0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin1.color = none
status1.style.color = STATUS_MAP.status.color
reserve1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin2.color = none
status2.style.color = STATUS_MAP.status.color
reserve2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'