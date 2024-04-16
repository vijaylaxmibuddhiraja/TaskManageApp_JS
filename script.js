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
        console.log(`Hello, ${this.userName}! Proceed to the menu`);
      }
    },

// To add tasks
    addTask: function() {
      const taskDescription = prompt("Please add a task description");
      console.log("Please add a description");
      if(taskDescription.trim() === "") {
        alert("Task description cannot be empty!");
        console.log("Task description cannot be empty!");
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
      console.log("New task added");
      alert("Task is added!");
      menu();
    },

// To mark the task as completed
    
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
        console.log("List of Tasks", message);
        alert(message);
        menu();
    }
}