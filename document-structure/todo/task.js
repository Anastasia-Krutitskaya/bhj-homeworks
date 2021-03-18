const tasks = document.querySelector('.tasks__list');

document.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.key.charCodeAt('0') === 69 && document.getElementById('task__input').value !== '') {
        tasks.innerHTML +=
        `<div class="task">
            <div class="task__title">
                ${document.getElementById('task__input').value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`;   
      document.getElementById('task__input').value = '';
    } 
})

document.getElementById('tasks__add').addEventListener('click', (event) => {
    tasks.innerHTML += 
    `<div class="task">
        <div class="task__title">
            ${document.getElementById('task__input').value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`;
    event.preventDefault();
    document.getElementById('task__input').value = '';
    Array.from(document.querySelectorAll('.task__remove')).forEach(item => {
        item.addEventListener('click', () => {
            item.closest('.task').remove();
        })
    })
})


