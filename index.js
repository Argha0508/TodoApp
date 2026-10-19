
let todoList= [];
todoShow();
let date = '';
function todoAdd()
{  
    let dateInput = document.querySelector('#Date-Input');
    date  = dateInput.value;
    let inputElement = document.querySelector('#Text-input');
    let inputValue = inputElement.value ;
    if(!inputValue){
        alert('Please enter a valid work to do!!');
    }
    else if(!date){
        alert('Enter a valid date for your work!!');
    }
    else {
    console.log(inputValue);
    todoList.push({item : inputValue , dueDate : date});
    localStorage.setItem('list',JSON.stringify(todoList));
    inputElement.value = '';
    dateInput.value ='';
    console.log(todoList);
   todoShow();
    }
}

function todoShow() {
     let strList = localStorage.getItem('list');
    if(strList) {
        todoList = JSON.parse(strList);
    }
     let newHTML='';
     let todoShow = document.querySelector('#show');
     
    for(let i=0;i<todoList.length;i++)
         {
  newHTML += ` <div id="Added-Lists">
   <span class="List-Elements">${todoList[i].item}</span>  <span class="List-Elements">${todoList[i].dueDate }</span>  <button class="List-Elements" id="Delete-Button" onclick="
    todoList.splice(${i},1);
    localStorage.setItem('list',JSON.stringify(todoList));
    console.log(todoList);
    todoShow();
   "> Delete </button>
 </div>
 
  ` 
    }
todoShow.innerHTML = newHTML;
localStorage.setItem('list',JSON.stringify(todoList));
}
