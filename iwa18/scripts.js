


import { html, createOrderHtml, moveToColumn, updateDraggingHtml } from "./view.js";
import { createOrderData, state, updateDragging } from "./data.js";

const orders = []
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}

const handleDragStart = (event) => {
    event.preventDefault();

    // event.target.classList.add('dragging');

}

const handleDragEnd = (event) => {
    event.preventDefault();

    // event.target.classList.remove('dragging');
}


const handleHelpToggle = (event) => {
    event.preventDefault()
    const target = event.target
    const helpOverlay = html.help.overlay
    switch (target) {
        case html.other.help:
            helpOverlay.setAttribute('open', 'open')
            break
        case html.help.cancel: {
          helpOverlay.removeAttribute('open')  
          html.other.add.focus()
    }
        break
    };
}

const handleAddToggle = (event) => {
    event.preventDefault()
    const target = event.target
    const orderOverlay = html.add.overlay
    switch (target) {
        case html.other.add:
            orderOverlay.setAttribute('open', 'open')
            break
        case html.add.cancel: {
            orderOverlay.removeAttribute('open')
            const titleInput = document.querySelector('[data-add-title]')
            titleInput.value = ''
            const tableInput = document.querySelector('[data-add-table]')
            tableInput.value = '1'
            html.other.add.focus()
        }
            break
    };
};

const handleAddSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    let title = data.get('title')
    let table = data.get('table')
    const column = 'ordered'
    const order = createOrderData({title, table, column})

    const orderHtml = createOrderHtml(order)
    console.log(orderHtml)
    html.columns.ordered.appendChild(orderHtml)
        
    const titleInput = document.querySelector('[data-add-title]')
    titleInput.value = ''
    const tableInput = document.querySelector('[data-add-table]')
    tableInput.value = '1'
    const submitOverlay = html.add.overlay
    submitOverlay.removeAttribute('open')
    html.other.add.focus()
}

// can you hear me?

const handleEditToggle = (event) => {
    event.preventDefault()
    // event.dataTransfer.setData('id', document.querySelector('[data-id]') )
    const editTarget = event.target
    const editOrder = html.edit.overlay
    orders.push(editTarget.getAttribute('data-id'))


    switch (editTarget) {
        case html.edit.cancel: {
            editOrder.removeAttribute('open')       
            html.other.add.focus()  
        }
        break

        default:{           
            html.edit.overlay.setAttribute('open', 'open')
            const title = document.getElementById('edit-form').children.item(1).children.item(1)
            const tableSelection = document.getElementById('edit-form').children.item(2).children.item(1)      
            const statusSelection = document.getElementById('edit-form').children.item(3).children.item(1)
            title.setAttribute('value', event.target.querySelector('.order__title').innerText)

            tableSelection.options[event.target.querySelector('.order__value').innerText - 1].selected = true
            statusSelection.options[event.target.querySelector('.order__time').innerText].selected = true
        }
    };
}

const handleEditSubmit = (event) => {
    event.preventDefault()
    const editData = new FormData(event.target)
    let title = editData.get('title')
    let table = editData.get('table')
    let column = editData.get('column')

    if(event.target){
        const orderParentElement = document.querySelector('[data-id]')
        const orderTitle = orderParentElement.children.item(0)
        orderTitle.innerHTML = title
        const orderTable = orderParentElement.children.item(1).children.item(0).children.item(1)
        orderTable.innerHTML = table

        moveToColumn(orders[0], column)
        orders.pop()
    }

    const submitOverlay = html.edit.overlay
    submitOverlay.removeAttribute('open')
    html.other.add.focus()
}

const handleDelete = (event) => {
    event.preventDefault()
    const item = document.querySelector('[data-id]')    
    item.remove()

    const editOverlay = html.edit.overlay
    editOverlay.removeAttribute('open')
    html.other.add.focus()
}

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}