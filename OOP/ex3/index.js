import {  } from './.js';

window.addEventListener("DOMContentLoaded", function(){
    
    let addBtn = document.getElementById("add-btn");
    let list = document.getElementById("todolist");
    let taskArray = [];
    addBtn.addEventListener("click", function()
    {
        let task = document.createElement("li");
        let task1 = document.createTextNode("Example1")
        let task2 = document.createTextNode("Example2")
        let task3 = document.createTextNode("Example3")
        let task4 = document.createTextNode("Example4")
        let task5 = document.createTextNode("Example5")
        for(let i = 0; i < taskArray.length; i++)
        {
            list.appendChild(task);
        }
        
    });
    
});

function addElement() 
{
  
  let task = document.createElement("li");

  let newTask = document.createTextNode("Example 1");
  
  task.appendChild(newTask);

  let currentList = document.getElementById("todolist");
  document.body.insertBefore(task, currentList);
}