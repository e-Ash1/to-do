//Initilizes taskForm/taskList containers
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

//Initilizes local array through the DOM by instantiating an empty array, in the event of no predisposed 'tasks'
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
console.log(tasks);

//
taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from auto-submitting
        
        const taskInput = document.querySelector('input[name="task"]');
        const taskValue = taskInput.value;
        
        const newTask = document.createElement('li');
        const taskText = document.createElement('span');
        const removeButton = document.createElement('button');
        const completeButton=document.createElement('button');
        removeButton.className='btn--remove';
        completeButton.className='btn--complete';

            taskText.textContent = taskValue;
            completeButton.textContent= '\u2713';
            removeButton.textContent = 'X';
            newTask.appendChild(taskText);
            newTask.appendChild(removeButton);
            newTask.appendChild(completeButton);
            taskList.appendChild(newTask);
            taskInput.value = ''; // clear the input field
            tasks.push(taskValue); // add new task to the array
    
    localStorage.setItem('tasks', JSON.stringify(tasks)); // save the updated array to local storage

    removeButton.addEventListener('click', function() {
        newTask.remove(); // remove the task element from the list
        tasks.splice(tasks.indexOf(taskValue), 1); // remove the task from the tasks array
        localStorage.setItem('tasks', JSON.stringify(tasks)); // save the updated array to local storage
    });

});

// Loads the same tasks on page refresh
for (let i = 0; i < tasks.length; i++) {
    
    const newTask = document.createElement('li');
    const taskText = document.createElement('span');
    const removeButton = document.createElement('button');
    const completeButton = document.createElement('button');
    removeButton.className='btn--remove';
    completeButton.className='btn--complete';
   
    taskText.textContent = tasks[i]; //Creates a new <span> element for every item update
    completeButton.textContent= '\u2713';
    removeButton.textContent = 'X'; //Creates a new <button> element for every 'task' item
    newTask.appendChild(taskText); //Attaches 'task' item to <li> element on index.html
    newTask.appendChild(removeButton);  //Attaches 'removeButton' to every <li> element on index.html
    newTask.appendChild(completeButton); //Attaches 'completeButton' to every <li> element on index.html
    taskList.appendChild(newTask); //Attaches <li> element to <ul> element on index

    removeButton.addEventListener('click', function(){
        newTask.remove();
        tasks.splice(i, 1);
        localStorage.setItem('tasks',JSON.stringify(tasks));
    });

}

