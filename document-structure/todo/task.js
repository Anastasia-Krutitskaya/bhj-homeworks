const tasks = document.querySelector('.tasks__list');

document.getElementById('tasks__add').addEventListener('click', (event) => {
    const text = document.getElementById('task__input').value;
    if (text.trim() !== '') {
        tasks.insertAdjacentHTML('afterend', 
        `<div class="task">
            <div class="task__title">
                ${text}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`);
        event.preventDefault();
        document.getElementById('task__input').value = '';
        document.querySelector('.task__remove').addEventListener('click', () => {
            document.querySelector('.task__remove').closest('.task').remove();
        })
    }
})


