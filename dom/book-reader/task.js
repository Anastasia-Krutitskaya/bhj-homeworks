Array.from(document.querySelectorAll('.font-size')).forEach((item) => {
    item.addEventListener('click', (e) => {
        const control = item.closest('.book__control');
        const book = item.closest('.book');
        const content =  book.querySelector('.book__content');
        content.classList.remove('book_fs-small');
        content.classList.remove('book_fs-big');
        if (control.querySelector('.font-size_active')) {
            control.querySelector('.font-size_active').classList.remove('font-size_active')
        }
        item.classList.add('font-size_active');
        if (item.classList.contains('font-size_small')) {
            content.classList.add('book_fs-small')
        } else if (item.classList.contains('font-size_big')) {
            content.classList.add('book_fs-big')
        } 
        e.preventDefault();
    })
})
