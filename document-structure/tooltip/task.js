Array.from(document.querySelectorAll('.has-tooltip')).forEach(item => {
    item.addEventListener('click', (event) => { 
        if (item.nextSibling.className === "tooltip tooltip_active" ) {
            item.nextSibling.remove();
        } else if (document.querySelector('.tooltip_active')) {
           document.querySelector('.tooltip_active').remove();
           item.insertAdjacentHTML('afterend', `<div class="tooltip tooltip_active" data-position = 'bottom'> ${item.title} </div>`);
        } else {
            item.insertAdjacentHTML('afterend', `<div class="tooltip tooltip_active" data-position = 'bottom'> ${item.title} </div>`);
        }
        event.preventDefault();
    })
})