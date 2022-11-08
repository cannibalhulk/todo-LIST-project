let input = document.querySelector('.entered-list')
let addBtn = document.querySelector('.add-list')
let tasks = document.querySelector('.task-section')
let tsk = document.querySelector('.tasks');
let xButton = document.querySelector('.fa-circle-xmark');
let itemBox = document.querySelector('.item');


function buttonDisabled(){
    if(input.value.trim() != 0){
        addBtn.classList.add('active');
    } 
    else{
        addBtn.classList.remove('active');
    }
}

//add button disabled
input.addEventListener('keyup',()=>{
    buttonDisabled();
})

//add new item to the list

addBtn.addEventListener('click',()=>{
    if(input.value.trim() != 0){
        let newItem=document.createElement('div')
        newItem.classList.add('tasks');
        newItem.innerHTML = `
        <div class="item">
          <p>${input.value}</p>
          <i class="fa-solid fa-circle-xmark"></i>
        </div>`;

        tasks.appendChild(newItem);
        input.value='';
    }

    else{
        alert('Enter some list item');
    }
})

//delete item from  the list

itemBox.addEventListener('click',(e)=>{
    let target = e.target;
    if(target.classList.contains('fa-circle-xmark')){
        let item = target.parentElement.parentElement;
        item.remove();
    }

});

