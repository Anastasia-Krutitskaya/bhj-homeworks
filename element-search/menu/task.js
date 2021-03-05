Array.from(document.getElementsByClassName('menu__link')).forEach((elem) => {
    elem.onclick = (e) => {
        if ( elem.closest('.menu__item').querySelector('.menu_active') ) {
            elem.closest('.menu__item').querySelector('.menu_active').classList.remove('menu_active')
        } else if (elem.closest('.menu_main').querySelector('.menu_active')) {
            elem.closest('.menu_main').querySelector('.menu_active').classList.remove('menu_active');
            elem.closest('.menu__item').querySelector('.menu').classList.add('menu_active'); 
           } else {
            elem.closest('.menu__item').querySelector('.menu').classList.add('menu_active'); 
           }
       if ( elem.closest('.menu__item').querySelector('.menu').classList.contains('menu_sub')) {
           return false
       }
    }
})



