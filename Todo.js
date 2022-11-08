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
        let divParent= document.createElement('div');
        let divChild= document.createElement('div');
        let p = document.createElement('p');
        let deleteIcon = document.createElement('i');

        divParent.className="tasks";
        divChild.className="item";
        p.innerHTML=`${input.value}`;
        deleteIcon.classList="fa-solid fa-circle-xmark";
        divChild.appendChild(p);
        divChild.appendChild(deleteIcon);


        //delete task from the list;
        deleteIcon.addEventListener('click',function(){
            divParent.remove();
        })

        divParent.appendChild(divChild);

        tasks.appendChild(divParent);
        input.value='';
    }

    else{
        alert('Enter some list item');
    }
})


