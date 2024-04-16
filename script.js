// TASK MANAGER APPLICATION 

// To assign an initial value taskID is taken 

let taskID = 1;

//taskManager object

const taskManager = {
  tasks: [],
  userName: "",  //  to store user name

    askUserName: function() {
      this.askUserName = prompt("Welcome! Please enter your name");
      if(this.userName.trim() === "") {
        alert("Please enter a valid name");
        this.askUserName();
      } else {
        alert(`Hello, ${this.userName}! Proceed to the menu`);
       // console.log(`Hello, ${this.userName}! Proceed to the menu`);
      }
    },

// To add tasks
    addTask: function() {
      const taskDescription = prompt("Please add a task description");
      //console.log("Please add a description");
      if(taskDescription.trim() === "") {
        alert("Task description cannot be empty!");
       // console.log("Task description cannot be empty!");
        this.addTask();
      }
// To get new task object 
      const task = {
        id: taskd ++,
        description: taskDescription,
        complete: false,
      };
// To add 'push' is used in task 
      this.tasks.push(task);
     // console.log("New task added");
      alert("Task is added!");
      menu();
    },

// To mark the task as completed
    completeTask: function () {
        const showTaskId = parseInt(prompt("Enter the task ID"));
        //console.log("enter the atsk id", showTaskId);
        const taskFound = this.tasks.find((task) => task.id === showTaskId);

        if (!taskFound) {
            console.log("task not found");
            alert("Task not found");
            return;
        }

        taskFound.complete = true;
        //console.log("task done");
        alert("Task msrked as done!");
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
                "Id:" +
                task.id +
                "Description" +
                taskDescription +
                "Complete:" +
                task.complete +
                "\n";
            })
        }
        //console.log("List of Tasks", message);
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
                taskDescription +
                "Complete:" +
                task.complete +
                "\n";
            })
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
}