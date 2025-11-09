
let count=1;

function addTask() {
    let taskInput;
let input;
let text;
let div;
let button;
let img;
let br;
let hr;
let newDiv;

    taskInput=document.getElementById("task").value;
    if (taskInput==""){
        alert("Please enter a task!");
        return;
    }

    // div=document.createElement(`<div id="task+${count++}"><input type="checkbox">${taskInput}<button class="delete-btn"><img src="delete.png" alt="icon" width="20" height="20" onclick="deleteTask()"></button><br><hr></div>`);
    // document.getElementById("task-list").appendChild(div);
    newDiv = document.createElement("div");
    newDiv.setAttribute("id", `task${count++}`); 
    input = document.createElement("input");
    input.setAttribute("type", "checkbox");

    text = document.createTextNode(`${taskInput}`);
    div = document.getElementById("task-list");
    button = document.createElement("button");
    button.setAttribute("class", "delete-btn");
    img = document.createElement("img");
    img.setAttribute("src", "delete.png");
    img.setAttribute("alt", "icon");
    img.setAttribute("width", "20");
    img.setAttribute("height", "20");
    button.appendChild(img);
    br = document.createElement("br");
    hr = document.createElement("hr"); 
    newDiv.appendChild(input);
    newDiv.appendChild(text);
    input.onclick = ()=>{
        newDiv.style.textDecoration = input.checked? "line-through":"none";

    }
    newDiv.appendChild(button);
    newDiv.appendChild(br);
    newDiv.appendChild(hr);
    img.onclick = () =>{
     newDiv.remove();
    };    
    div.appendChild(newDiv);
    document.getElementById("task").value = "";
}
