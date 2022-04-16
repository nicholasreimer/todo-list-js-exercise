/* ORIGINAL CODE:
// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title) {
  taskTitles.push(title);
  taskComplete.push(false);
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(taskIndex) {
  taskComplete[taskIndex] = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(taskIndex) {
  const title = taskTitles[taskIndex];
  const complete = taskComplete[taskIndex];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
}

// ORIGINAL DRIVER CODE BELOW
newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed
*/

//-----------------------------------------------------------------------------
//NEW CODE #1:
/*
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false
  };
  return task;
}

// prints out the provided task's details
function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}

// marks the provided task as completed
function completeTask(task) {
  task.complete = true;
}

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks);
*/
//-----------------------------------------------------------------------------
// NEW CODE #2:  FUNCTIONS BECOME METHODS WITHIN THE OBJECT

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

//Accessing properties or methods of our tasks is as simple as writing:
task1.title
task1.markCompleted();

// DRIVER CODE CHANGES BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

//-----------------------------------------------------------------------------
/*  SUMMARY:
-We are using objects to group state and logic in order to keep the code more
organized. Now everything associated to a task has been encapsulated inside the
task object.

-the func newTask takes two args var title and var description which are both
properties within an object named task which is within the funcs body.
The newTask func outputs the value of the task object as its func output

-within the func is an object called task that contains a series of key value pairs

-also within the func is a method (a func within a func) called logState that
prints out a concateted string to the console if called

-below the method while still inside the original func is another merthod called
markCompleted in its body ther is code that when called will change the boolean
value of the original funcs object property "complete:" to TRUE

*/
