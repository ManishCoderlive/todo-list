const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
    addTask();
});

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa', 'fa-trash', 'delete-icon');
    listItem.appendChild(deleteIcon);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Mark as Completed';
    completeButton.className = 'complete-button';
    listItem.appendChild(completeButton);

    taskList.appendChild(listItem);

    taskInput.value = '';

    deleteIcon.addEventListener('click', () => {
        listItem.remove();
    });

    completeButton.addEventListener('click', () => {
        listItem.classList.add('completed');
        completeButton.textContent = 'Completed';
        completeButton.disabled = true;
    });
}
