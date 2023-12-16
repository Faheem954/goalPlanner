const title = document.getElementById('title')
const description = document.getElementById('description')
const form = document.querySelector('form')
const container  = document.querySelector('.container')
// container.setAttribute('class','container')
const tasks = localStorage.getItem('tasks') ? JSON.parse( localStorage.getItem('tasks')): [];
showAllTasks();
function showAllTasks(){
        tasks.forEach((value,index)=>{
            //main div
const div = document.createElement('div');
div.setAttribute('class','task')  

//main div element
const innerDiv = document.createElement('div')
div.append(innerDiv)
const innerBtn = document.createElement('button')
innerBtn.innerText = '-'
innerBtn.setAttribute('class','delBtn')
innerBtn.addEventListener('click',()=>{
    removeAllTasks()
    tasks.splice(index,1)
    localStorage.setItem('tasks',JSON.stringify(tasks))
    showAllTasks()
})
div.append(innerBtn)
//inner div elements
const p = document.createElement('p')
p.innerText = value.title
innerDiv.append(p)
const span = document.createElement('span')
span.innerText = value.description
innerDiv.append(span)

container.append(div)
}
)}

function removeAllTasks(){
    tasks.forEach(()=>{
        const div =  document.querySelector('.task')
    div.remove()
    })
    
}

form.addEventListener('submit',(e)=>{
e.preventDefault()
removeAllTasks();
tasks.push({
    title:title.value,
    description:description.value
});
localStorage.setItem('tasks',JSON.stringify(tasks))
showAllTasks()

});
 

