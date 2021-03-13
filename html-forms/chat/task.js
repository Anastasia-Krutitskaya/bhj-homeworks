const  message = document.querySelector('.chat-widget__messages');
const answers = ['Где ваша совесть?', 'Кто тут?', 'До свидания!', 'Не пишите нам больше!'];

document.querySelector('.chat-widget__side').addEventListener('click', () => {
    document.querySelector('.chat-widget').classList.add('chat-widget_active');
})

document.addEventListener('keyup', (event) => {
    if (event.key.charCodeAt('0') === 69) {
        const date = new Date();
        message.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">
            ${document.getElementById('chat-widget__input').value}
            </div>
        </div>
        `;
        document.getElementById('chat-widget__input').value = '';
        let randomIndex = Math.floor(Math.random() * answers.length);
        message.innerHTML += `
        <div class="message">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">
            ${answers[randomIndex]}
            </div>
        </div>
        `;
    }
})