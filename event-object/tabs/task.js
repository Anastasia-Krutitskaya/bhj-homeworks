Array.from(document.querySelectorAll('.tab')).forEach((item) => {
    item.addEventListener('click', () => {
       let tabs = item.closest('.tabs');
       if (tabs.querySelector('.tab_active')) {
           tabs.querySelector('.tab_active').classList.remove('tab_active');
       }
        item.classList.add('tab_active');

        if (tabs.querySelector('.tab__content_active')) {
            tabs.querySelector('.tab__content_active').classList.remove('tab__content_active');
        }
        const n = Array.from(tabs.querySelectorAll('.tab')).indexOf(tabs.querySelector('.tab_active'));
        const content = Array.from(tabs.querySelectorAll('.tab__content'));
        content[n].classList.add('tab__content_active');
    })
})