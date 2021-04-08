document.addEventListener("DOMContentLoaded", () => {
document.querySelector('#create-task-form').addEventListener('submit', submitButtonHandler)
console.log(document.querySelector('#create-task-form'))
  
  
});
function submitButtonHandler(event) {
  event.preventDefault()
  console.log('teachme')

  const tasks = document.querySelector('#tasks')
  const newElement = document.createElement('li')
  newElement.innerText = document.querySelector('#new-task-description').value
  let button = document.createElement('button')
  button.innerText = 'X'

  newElement.appendChild(button)
  
  button.addEventListener('click', event => {
    event.preventDefault();
    console.dir(event.target)
    event.target.closest('li').remove()
  })
  

  
  tasks.appendChild(newElement)
  
}

