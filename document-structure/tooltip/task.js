let div = document.createElement('div');
div.className = "tooltip";
document.body.prepend(div);
Array.from(document.querySelectorAll('.has-tooltip')).forEach(item => {
    item.addEventListener('click', (event) => { 
        const position = item.getBoundingClientRect();
        item.setAttribute('data-position' , 'bottom');
        div.setAttribute('style', `left: ${position.left}px; top: ${position.top}px`);
        div.innerHTML = item.title;
        if ( document.querySelector('.tooltip_active')) {
            document.querySelector('.tooltip_active').classList.remove('tooltip_active');
        } else {
            document.querySelector('.tooltip').classList.add('tooltip_active');
        }
        event.preventDefault();
    })
})