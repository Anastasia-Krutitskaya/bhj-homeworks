Array.from(document.getElementsByClassName('menu__link')).forEach((elem) => {
    elem.onclick = () => {
        if (document.querySelector('.menu_active')) {
            const active = Array.from(document.querySelectorAll('.menu_active'));
            active.forEach( (elem) => {
                elem.classList.remove('menu_active')
                });
            }
       elem.closest('.menu__item').querySelector('.menu').classList.add('menu_active'); 
       if ( elem.closest('.menu__item').querySelector('.menu').classList.contains('menu_sub')) {
           return false
       }
    }
})



