
window.addEventListener('load', () => {
    if (localStorage.getItem('id')) {
       document.getElementById('user_id').innerHTML = localStorage.getItem('id');
       document.getElementById('welcome').classList.add('welcome_active');
    } else {
        document.querySelector('.signin').classList.add('signin_active');
    }
})

 document.getElementById('signin__btn').addEventListener('click', (event) => {
    let formData = new FormData(document.getElementById('signin__form'));
    let xhr = new XMLHttpRequest;
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.responseType = 'json';

    xhr.send(formData); 
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 ) {
            const response = xhr.response;
            if (response.success === true) {
                document.querySelector('.signin').classList.remove('signin_active');
                localStorage.setItem('id', response.user_id);
                document.getElementById('user_id').innerHTML = response.user_id;
                document.getElementById('welcome').classList.add('welcome_active');

            } else {
                alert('Неверный логин/пароль')
            }
        }
    }
    event.preventDefault();  
    
 })



