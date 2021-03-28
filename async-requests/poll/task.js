const title = document.querySelector('.poll__title');
const answers = document.querySelector('.poll__answers');
let xhr = new XMLHttpRequest;
xhr.open('GET', ' https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';
xhr.send();
xhr.onreadystatechange = function () { 
    if (xhr.readyState === 4 ) {
        const response = xhr.response;
        const data = response.data.answers;
        console.log(response);
        console.log(data);
        title.insertAdjacentHTML('afterbegin', `
            ${response.data.title}
        `);
       for (let prop in data) {
           console.log(data[prop]);
           answers.insertAdjacentHTML('afterbegin', `
            <button class="poll__answer">
                ${data[prop]}
            </button>
           `)
       }
       Array.from(document.querySelectorAll('.poll__answer')).forEach(item => {
        item.addEventListener('click', () => {
            alert('Ваш голос зачтен!')
        })
    })
    }
}
