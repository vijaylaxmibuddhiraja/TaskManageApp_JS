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
    } else {
        alert(`Hello, ${this.userName}! Proceed to the menu`);
    }
},
    
}