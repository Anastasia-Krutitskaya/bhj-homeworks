
const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');

modalMain.classList.add('modal_active');

Array.from(document.getElementsByClassName('modal__close')).forEach((elem) => {
    elem.onclick = () => {
        elem.closest('.modal').classList.remove('modal_active');
        if ( elem.classList.contains('show-success')) {
            modalSuccess.classList.add('modal_active');
        }
    }
})


