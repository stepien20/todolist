const butAdd=document.querySelector(`#butAdd`)
const todoList=[]
const displayToDoList=document.querySelector(`ul`)
const title=document.querySelector(`#title`)
const description=document.querySelector(`#description`)
const dueToDate=document.querySelector(`#dueToDate`)
const done=document.querySelector(`#done`)
butAdd.addEventListener(`click`,evt=>{
    evt.preventDefault()
    const Task={
        id: new Date().getTime(),
        title: title.value,
        description: description.value,
        dueToDate:dueToDate.value,
        isDone: done.checked? true : false
    }
    console.log(Task)
    todoList.push(Task)
    displayToDoList.innerText=''
    todoList.forEach(element => {
        const elem=document.createElement(`li`)
        elem.classList.add(`list-group`)
        elem.classList.add(`bg-info-subtle`)
        elem.classList.add(`border`)
        elem.classList.add(`p-3`)
        elem.innerHTML=`
                        <h4 class="text-info h4">${element.title}</h4>
                        <p>${element.description}</p>
            `
        if(element.isDone){
            elem.innerHTML+=`
            <p class="">do: ${element.dueToDate}</p>
            <h5 class="fw-bold text-success h5"><input type="checkbox" checked disabled> Zrealizowano!</h5>`
        }
        else{
            elem.innerHTML+=`<p class="text-danger h5">do: <span class="fw-bold">${element.dueToDate}</span></p>`
        }
        elem.innerHTML+=`${element.id}`
        displayToDoList.appendChild(elem)
        
    });
    // const check=document.createElement(`input`)
    // check.type="checkbox"
    // check.checked=true
    // displayToDoList.append(check)
    // const check2=document.createElement(`input`)
    // check2.type="checkbox"
    // check2.checked=false
    // displayToDoList.append(check2)
})