document.addEventListener('DOMContentLoaded', function() {
    const tasksContainer = document.getElementById('tasksContainer');
    const addButton = document.querySelector('.add');
    const baseUrl = 'http://localhost:3000/api/tasks';
    
    // Load tasks when page loads
    loadTasks();
    
    // Add new empty task when + button is clicked
    addButton.addEventListener('click', function() {
        createNewTaskElement('', false); // Create empty task
    });
    
    // Function to load tasks from server
    async function loadTasks() {
        try {
            const response = await fetch(baseUrl);
            const tasks = await response.json();
            
            // Clear container first
            tasksContainer.innerHTML = '';
            
            // Add tasks from server
            tasks.forEach(task => {
                createNewTaskElement(task.text, task.completed, task.id);
            });
        } catch (error) {
            console.error('Error loading tasks:', error);
            // If error, at least show empty task
            createNewTaskElement('', false);
        }
    }
    
    // Function to create a new task element
    function createNewTaskElement(text, completed, id) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        
        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'check';
        checkbox.checked = completed;
        
        // Create task input
        const taskInput = document.createElement('input');
        taskInput.type = 'text';
        taskInput.className = 'taskInput';
        taskInput.value = text;
        taskInput.placeholder = 'Write your task here';
        
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete';
        deleteBtn.innerHTML = '❌';
        
        // Append elements to task div
        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskInput);
        taskDiv.appendChild(deleteBtn);
        
        // Add to container
        tasksContainer.appendChild(taskDiv);
        
        // Focus on new empty task
        if (text === '') {
            taskInput.focus();
        }
        
        // Event listeners
        checkbox.addEventListener('change', function() {
            if (id) {
                toggleTaskCompletion(id, this.checked);
            }
        });
        
        taskInput.addEventListener('blur', function() {
            const taskText = this.value.trim();
            if (id) {
                // Update existing task
                if (taskText === '') {
                    deleteTask(id, taskDiv);
                } else {
                    updateTaskText(id, taskText);
                }
            } else if (taskText !== '') {
                // Create new task
                addNewTask(taskText, checkbox.checked).then(newId => {
                    id = newId; // Update the id for future reference
                });
            } else {
                // Empty new task - remove it
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
    
    // Function to add a new task to server
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
    
    // Function to toggle task completion status
    async function toggleTaskCompletion(taskId, completed) {
        try {
            await fetch($,{baseUrl}/$,{taskId}, {
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
    
    // Function to update task text
    async function updateTaskText(taskId, newText) {
        try {
            await fetch($,{baseUrl}/$,{taskId}, {
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
    
    // Function to delete a task
    async function deleteTask(taskId, taskElement) {
        try {
            await fetch($,{baseUrl}/$,{taskId}, {
                method: 'DELETE'
            });
            taskElement.remove();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    }
});