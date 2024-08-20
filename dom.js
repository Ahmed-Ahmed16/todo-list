// let selectDropDown = document.getElementById('selectt');
// let paragraph = document.getElementById('paragraph1');
// let span = document.createElement('span')
// selectDropDown.getAttribute('id');
// console.log(selectDropDown.getAttribute('id'));

// selectDropDown.addEventListener('change', (e) =>{
//     console.log(e.target.value);
//     paragraph.innerHTML = `<div></div>`
    
// });


// let random = Math.ceil(Math.random()*10);


// let randomBtn = document.getElementById('random-btn');
// randomBtn.addEventListener('click', (e) => {
//     document.getElementById('random-no').innerText = Math.ceil(Math.random()*10);
// })


let toDo = document.getElementById('inputTASK');
let toDoBtn = document.getElementById('todo-Btn');
let list = document.getElementById('listHead');
let deleteAllBtn = document.getElementById('delete-all-btn');
let deleteBtn = document.getElementById('delete-one-btn');
let currentDate = new Date();
let formattedDate = currentDate.toString().slice(0, 16);
let taskText;
let listItem ;

toDoBtn.addEventListener('click', () => {
    taskText = toDo.value.trim();
    if (taskText!== "") {
        listItem = document.createElement('li');
        listItem.textContent = `${formattedDate}: ${taskText}`
        list.appendChild(listItem);
        toDo.value = "";
    }
});

//delete-
// deleteBtn.addEventListener('click', (e) => {
//     list.removeChild(listItem)
// })
deleteAllBtn.addEventListener('click',(e) => {
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
      }

} )

