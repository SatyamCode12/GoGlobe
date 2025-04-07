document.addEventListener('DOMContentLoaded', function() {
    const tasksContainer = document.getElementById('tasksContainer');
    const addButton = document.querySelector('.add');
    const baseUrl = 'http://localhost:3000/api/tasks';

    loadTasks();
    
    addButton.addEventListener('click', function() {
        createNewTaskElement('', false); 
    });

    async function loadTasks() {
        try {
            const response = await fetch(baseUrl);
            const tasks = await response.json();

            tasksContainer.innerHTML = '';

            tasks.forEach(task => {
                createNewTaskElement(task.text, task.completed, task.id);
            });
        } catch (error) {
            console.error('Error loading tasks:', error);
            createNewTaskElement('', false);
        }
    }
    
    function createNewTaskElement(text, completed, id) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'check';
        checkbox.checked = completed;
        

        const taskInput = document.createElement('input');
        taskInput.type = 'text';
        taskInput.className = 'taskInput';
        taskInput.value = text;
        taskInput.placeholder = 'Write your task here';

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete';
        deleteBtn.innerHTML = '❌';

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskInput);
        taskDiv.appendChild(deleteBtn);
        
        tasksContainer.appendChild(taskDiv);
        

        if (text === '') {
            taskInput.focus();
        }
        

        checkbox.addEventListener('change', function() {
            if (id) {
                toggleTaskCompletion(id, this.checked);
            }
        });
        
        taskInput.addEventListener('blur', function() {
            const taskText = this.value.trim();
            if (id) {

                if (taskText === '') {
                    deleteTask(id, taskDiv);
                } else {
                    updateTaskText(id, taskText);
                }
            } else if (taskText !== '') {
                addNewTask(taskText, checkbox.checked).then(newId => {
                    id = newId;
                });
            } else {

                taskDiv.remove();
            }
        });
        
        taskInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                this.blur();
            }
        });
        
        deleteBtn.addEventListener('click', function() {
            if (id) {
                deleteTask(id, taskDiv);
            } else {
                taskDiv.remove();
            }
        });
    }

    async function addNewTask(taskText, completed) {
        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    text: taskText,
                    completed: completed 
                })
            });
            
            const newTask = await response.json();
            return newTask.id;
        } catch (error) {
            console.error('Error adding task:', error);
        }
    }

    async function toggleTaskCompletion(taskId, completed) {
        try {
            await fetch(`${baseUrl}/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ completed })
            });
        } catch (error) {
            console.error('Error updating task:', error);
        }
    }

    async function updateTaskText(taskId, newText) {
        try {
            await fetch(`${baseUrl}/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: newText })
            });
        } catch (error) {
            console.error('Error updating task:', error);
        }
    }

    async function deleteTask(taskId, taskElement) {
        try {
            await fetch(`${baseUrl}/${taskId}`, {
                method: 'DELETE'
            });
            taskElement.remove();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    }
});