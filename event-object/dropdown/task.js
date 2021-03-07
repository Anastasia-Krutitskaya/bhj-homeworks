
Array.from(document.querySelectorAll('.dropdown__value')).forEach((item) => {
    item.addEventListener('click', () => {
        item.closest('.dropdown').querySelector('.dropdown__list').classList.add('dropdown__list_active');
    });
});

Array.from(document.querySelectorAll('.dropdown__item')).forEach((item)=> {
    item.addEventListener('click', (e) => {
        item.closest('.dropdown__list').classList.remove('dropdown__list_active');
        item.closest('.dropdown').querySelector('.dropdown__value').textContent = item.textContent;
        e.preventDefault();
    })
}) 