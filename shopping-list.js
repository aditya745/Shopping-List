//select elements
	let newTask = document.querySelector("#new-task");
	let newTask2 = document.querySelector("#new-task1");
	let addTaskBtn = document.querySelector("#addTask");
	let toDoUl = document.querySelector(".todo-list ul");
	let completeUl = document.querySelector(".complete-list ul");
	//Creating actual task list


	let createNewTask = (task1,task2) =>{

	let listItem = document.createElement("li");
	let checkbox = document.createElement("input");
	let label1 = document.createElement("label");
	let label2 = document.createElement("label");
	let button = document.createElement("span");
	button.classList.add("delete");
	label1.innerText = task1;
	label2.innerText = task2;
	checkbox.type = "checkbox";
	button.innerText = "DELETE";
	button.addEventListener("click" ,(event) => {
		deleteTask(event);
	
	});
	checkbox.addEventListener("click" , (event) =>{
		checkboxMethod(event);
	});
	
	listItem.appendChild(checkbox);
	listItem.appendChild(label1);
	listItem.appendChild(label2);
	listItem.appendChild(button);
	return listItem;
	};

	let addTask = () =>{
		if(!newTask.value || !newTask2.value){
      alert("please fill the input fields");
    }
    else{
		let listItem = createNewTask(newTask.value,newTask2.value);


		
    //let listItem2 =  createNewTask(newTask2.value);
		toDoUl.appendChild(listItem);
		}
		//bindIncompleteItems(listItem,completeTask);
		//bindIncompleteItems(listItem2,completeTask);
	};

	
	let deleteTask = (event) =>{
  		
  		console.log(event.target);
  		console.log(event.target.parentNode);
  		  		/*let parentUl = document.getElementById("ul1");
  		      	parentUl.removeChild(event.target.parentNode); */


  		      	event.target.parentNode.parentNode.removeChild(event.target.parentNode);

  		};

  		let checkboxMethod = (event)=>{
  			let checkboxClicked = event.target;
  			if(checkboxClicked.checked === true){
  				let ul2 = document.getElementById("ul2");
  				let childLI = checkboxClicked.parentNode;
  				childLI.checked;
  				ul2.appendChild(childLI);
  			}
  			else{
  				let ul1 = document.getElementById("ul1");
  				let childLI = checkboxClicked.parentNode;
  				
  				ul1.appendChild(childLI);
  			}

  		};