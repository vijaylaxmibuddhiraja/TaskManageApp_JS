// TASK MANAGER APPLICATION //

// To assign an initial value taskID is taken 

let taskID = 1;

//taskManager object

const taskManager = {
  tasks: [],
  
    askUserName: function() {
      const userName = prompt("Welcome! Please enter your name");
     // console.log("Welcome! Please enter your name");
      if(userName === "") {
        //console.log("Please enter a valid name");
        alert("Please enter a valid name");
        this.askUserName();
      } else {
      // console.log(`Hello, ${this.userName}! Proceed to the menu`);
        alert(`Hello, ${userName}! Proceed to the menu`);
      }
    },

// To add tasks
    addTask: function() {
      const taskDescription = prompt("Please add a task description");
      if(taskDescription.trim() === "") {
       // console.log("Task description cannot be empty!");
        alert("Task description cannot be empty!");
        this.addTask();
      }
// To get new task object 
      const task = {
        id: taskID++,
        description: taskDescription,
        complete: false,
      };
// To add 'push' is used in task 
      this.tasks.push(task);
      //alert("Task is added!");
      menu();
    },

// To mark the task as completed
    completeTask: function () {
        const showTaskId = parseInt(prompt("Enter the task ID"));
        const taskFound = this.tasks.find((task) => task.id === showTaskId);

        if (!taskFound) {
          alert("Task not found");
        } else {
          taskFound.complete = true;
          alert("Task marked as done!");
        }  
        menu();
    },
    
// Display tasks list
    listAllTasks: function() {
        let message = "";
        if(this.tasks.length === 0) {
            message = "No tasks to show";
        } else {
            message = "Tasks list\n";
            this.tasks.forEach((task) => {
                message +=
                "Id:" + task.id +
                 "Description:" + task.description +
                "Complete:" + task.complete + "\n";
            });
        }
        alert(message);
        menu();
    },

// Shows only those tasks are done
    listCompletedTasks: function() {
        let message = "";
        const completedTasks = this.tasks.filter((task) => task.complete);

        if(completedTasks.length === 0) {
            message = "No completed tasks!";
        } else {
            message = "Completed Tasks\n";
            completedTasks.forEach((task) => {
                message +=
                "Id:" +
                task.id +
                "Description" +
                task.description +
                "Complete:" +
                task.complete +
                "\n";
            });
        }
        alert(message);
        menu();
    },
    
// Remove the selected task from list 
    removeTask: function() {
        const taskId = parseInt(prompt("Enter the ID of the task"));
        const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    
        if(taskIndex === -1) {
            alert("Task not found!");
            menu();
        }

// 'splice' here is used to remove any task from the list     
        this.tasks.splice(taskIndex, 1);
        alert("Task is removed");
        menu();    
    },
}; 
    function menu() {
        const choice = parseInt (
            prompt (
                `Please choose an option:\n1. Add Task\n2. Complete Task\n3. List All Tasks\n4. List Completed Tasks\n5. Remove task\n6. Exit `
            )
        );

 // Chose switch option instead of if-else
     switch (choice) {
        case 1:
         taskManager.addTask();
         break;
        case 2:
         taskManager.completeTask();
         break;
        case 3:
         taskManager.listAllTasks();
         break;
        case 4:
         taskManager.listCompletedTasks();
         break;
        case 5:
         taskManager.removeTask();
         break;
        case 6:
         alert("GoodBye! See you again");
         return;
        default:
         alert("Invalid input, please choose between 1-6");
         menu();
         break;
    }
 }   
  
 // To initialize the app 
     taskManager.askUserName();
     menu();