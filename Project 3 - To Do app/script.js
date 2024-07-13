const add_btn = document.querySelector('#add');
const display_div = document.querySelector('.display');

const savetask = () =>{

    const tasklist = Array.from(display_div.children)
    .filter((elements) => !elements.classList.contains('strike'))
    .map((elements) => elements.outerHTML)
    .join('');

    localStorage.setItem('tasklist',tasklist);
}


const loadtask = () =>{
    const task_saved = localStorage.getItem('tasklist');
    if(task_saved){
        display_div.innerHTML = task_saved;
    }
}



document.addEventListener('DOMContentLoaded',loadtask);










add_btn.addEventListener('click',()=>{
    const task = document.querySelector('#task');
    const task_input = task.value.trim(); 
    const container = document.createElement('div');
    if (task_input !== '') {
        let content = `<i class="fa-regular fa-square click"></i>
        <p>${task_input}</p>
        <i class="fa-solid fa-square-xmark cut"></i>`

        container.innerHTML = content;
        display_div.appendChild(container);
        task.value = '';
    }
    savetask()

})

display_div.addEventListener('click',(event)=>{

    const clicked_element = event.target;

    if (clicked_element.classList.contains('click')) {
        const para_element = clicked_element.nextElementSibling;
        para_element.classList.add('strike');       
        clicked_element.classList.remove('fa-regular', 'fa-square');
        clicked_element.classList.add('fa-solid' ,'fa-square-check'); 
    }
    else if(clicked_element.classList.contains('cut')){
        const current_div = clicked_element.parentElement;
        current_div.remove()
    }
    savetask()
})


