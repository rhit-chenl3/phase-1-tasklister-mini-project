document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e.target.new_task_description.value);
    handleToDo(e.target.querySelector("#new-task-description").value);
  })
});

function handleToDo(todo){
  let p = document.createElement('p');
  p.textContent = todo;
  document.querySelector('#list').appendChild(p);

  
}


// test git