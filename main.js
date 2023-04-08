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

        
        //Button elements
        const removeButton = document.createElement('button');
        const completeButton=document.createElement('button');
            removeButton.className='btn--remove'; //Adds className to button
            completeButton.className='btn--complete';
            completeButton.textContent= '\u2713'; //Styles value of button to be a checkmark
            removeButton.textContent = 'X';//Styles value of button to be a X

        const buttonsContainer=document.createElement('div'); //Intializes <div> element
            buttonsContainer.classList.add('btn--container'); //Adds className to <div> buttonsContainer
            buttonsContainer.appendChild(removeButton); //Attaches child element of remove button under buttonsContainer <div>
            buttonsContainer.appendChild(completeButton); //Attachs child element of complete button 
    

            taskText.textContent = taskValue;//Definition of <span> elucidates through user-input

            //Nesting <elements> under <ul>
            newTask.appendChild(taskText); //Attachs <span> element to <li>
            newTask.appendChild(buttonsContainer); //Attaches <div class='buttonsContainer'> as a nest to <li>
            taskList.appendChild(newTask); //Attaches <li> to source HTML <ul> element 
            taskInput.value = ''; // clear the input field
            tasks.push(taskValue); // add new task to the array
    
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Saves any updates within array to local storage

    //LEGACY CODE FOR FADE IN/AWAY FUNCTIONALITY

    // removeButton.addEventListener('click', function() {
    //     newTask.remove(); // Removes the task element from the list
    //     tasks.splice(tasks.indexOf(taskValue), 1); // Removes task from the tasks array
    //     localStorage.setItem('tasks', JSON.stringify(tasks)); 
    // });

    // completeButton.addEventListener('click', function() {
    //     newTask.remove(); // Removes the task element from the list
    //     tasks.splice(tasks.indexOf(taskValue), 1); // Removes task from the tasks array
    //     localStorage.setItem('tasks', JSON.stringify(tasks)); 
    // });

    const buttonCompletion=document.querySelectorAll('.btn--complete');
    
    buttonCompletion.forEach((button)=>{
        button.addEventListener('click', (event)=>{
            const fadeAway=event.target.parentElement.parentElement;
            fadeAway.classList.add('fade--complete');
            setTimeout(()=>{
                fadeAway.remove();
                tasks.splice(tasks.indexOf(taskValue), 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
            },500);
            
        });
    });

    const buttonRemove=document.querySelectorAll('.btn--remove');

    buttonRemove.forEach((button)=>{
        button.addEventListener('click',(event)=>{
            const fadeAway=event.target.parentElement.parentElement;
            fadeAway.classList.add('fade--remove');
            setTimeout(()=>{
                fadeAway.remove();
                tasks.splice(tasks.indexOf(taskValue),1);
                localStorage.setItem('tasks',JSON.stringify(tasks));
            },500)
        });
    });

});



// Loads the same content on page refresh
for (let i = 0; i < tasks.length; i++) {
    
    const newTask = document.createElement('li');
    const taskText = document.createElement('span');
    
        const removeButton = document.createElement('button');
        const completeButton=document.createElement('button');
            removeButton.className='btn--remove';
            completeButton.className='btn--complete';
            completeButton.textContent= '\u2713';
            removeButton.textContent = 'X';

        const buttonsContainer=document.createElement('div');
            buttonsContainer.classList.add('btn--container');
            buttonsContainer.appendChild(removeButton);
            buttonsContainer.appendChild(completeButton);
   
    taskText.textContent = tasks[i]; 
    completeButton.textContent= '\u2713';
    removeButton.textContent = 'X';
    newTask.appendChild(taskText); 
    newTask.appendChild(buttonsContainer);  
    taskList.appendChild(newTask); 

    //LEGACY CODE FOR FADE IN/AWAY FUNCTIONALITY

    // removeButton.addEventListener('click', function(){
    //     newTask.remove();
    //     tasks.splice(i, 1);
    //     localStorage.setItem('tasks',JSON.stringify(tasks));
    // });

    // completeButton.addEventListener('click', function(){
    //     newTask.remove();
    //     tasks.splice(i, 1);
    //     localStorage.setItem('tasks',JSON.stringify(tasks));
    // });

    const buttonCompletion=document.querySelectorAll('.btn--complete');
    
    buttonCompletion.forEach((button)=>{
        button.addEventListener('click', (event)=>{
            const fadeAway=event.target.parentElement.parentElement;
            fadeAway.classList.add('fade--complete');
            setTimeout(()=>{
                fadeAway.remove();
                
                tasks.splice(i, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
            },500);
        });
    });

    const buttonRemove=document.querySelectorAll('.btn--remove');

    buttonRemove.forEach((button)=>{
        button.addEventListener('click',(event)=>{
            const fadeAway=event.target.parentElement.parentElement;
            fadeAway.classList.add('fade--remove');
            setTimeout(()=>{
                fadeAway.remove();
                tasks.splice(i,i);
                localStorage.setItem('tasks',JSON.stringify(tasks));
            },500);
        });
    });

}

