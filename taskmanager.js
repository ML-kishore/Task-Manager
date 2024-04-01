const addform = document.querySelector('.add');
const tasks = document.querySelector('.tasks');
const msg = document.querySelector('.message span');
const clearAll = document.querySelector('.clear');

const search = document.querySelector('.search');


function updatemsg(){
    const msgtext = tasks.children.length;
    msg.textContent = `You have ${msgtext} pending tasks`;
}
updatemsg()
addform.addEventListener("submit", event =>{
     event.preventDefault();
     const value = addform.task.value.trim()

     if(value.length){
        tasks.innerHTML += `<li><span>${value}</span> <i class="bi bi-trash-fill delete"></i></li>`
        addform.reset();
        updatemsg()
     }


});

// delete task

tasks.addEventListener("click", event =>{
    if(event.target.classList.contains("delete")){
        event.target.parentElement.remove();
        updatemsg()
    }
});

clearAll.addEventListener("click", event =>{
    const taskitems = tasks.querySelectorAll("li");
    taskitems.forEach(item => {
        item.remove();
    });
    updatemsg()
})
function filterTask(term){
    Array.from(tasks.children)
    .filter(task => {
        return !task.textContent.toLowerCase().includes(term);
    })
    .forEach(task => {
        task.classList.add("hide");
    });
    Array.from(tasks.children)
    .filter(task => {
        return task.textContent.toLowerCase().includes(term);
    })
    .forEach(task => {
        task.classList.remove("hide");
    })
}
search.addEventListener("keyup" , event =>{
    const term = search.task.value.trim().toLowerCase();
    filterTask(term);

})
search.addEventListener("click", event =>{
    if (event.target.classList.contains("reset")){
        search.reset();
        const term = search.task.value.trim();
        filterTask(term);


    }
})