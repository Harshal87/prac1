// form element 
let form=document.getElementById('addForm');
var list= document.getElementById('items');


// list elements in page
var items=document.querySelector('.list-group-item');


//elements in list description
var descp_elem=document.getElementById('descp-value')


//filter search
var filter=document.getElementById('filter')

//form submit event
form.addEventListener('submit',additem);

// form description event
//descp_elem.addEventListener('submit',additem);

//list delete event
list.addEventListener('click',delonClick);

//filter keyup event
let sum=0
var container=document.getElementById('addForm')
var final_value=document.createElement('strong')
    final_value.textContent="Expense Sum : "+sum
    final_value.classList="form-control p-3 background-color:red"
    container.append(final_value)
filter.addEventListener('keyup',filter_text);

//description keyup event
//descp_elem.addEventListener('keyup',descp_txt)

//get the form text to add to list
let text=document.getElementById('text-value')

let desc=document.getElementById('text-desc')

let exp_item=document.getElementById('exp-items')

//get the description for the items in list
// let descp=document.getElementById('descp-value')

//function invoked by submit event
function additem(event)
{
// prevent the default action of submit event   
event.preventDefault();
console.log(text.value,desc.value,exp_item.value);

localStorage.setItem(text.value,desc.value+exp_item.value)

axios.post('https://crudcrud.com/api/a3ad20c4f0164b76b35b6ddfd9e3912d/appointmentEntries' ,{
Expense_Amount:text.value,
Description:desc.value,
Expense_Item:exp_item.value
}
).catch(err=>console.error(err));


// New list element
var li=document.createElement('li')

// bootstrap classes for li element
li.className='list-group-item'

// add text value to new li element

//create title element to append in list
var title=document.createElement('strong')
title.textContent=text.value;

var content=document.createElement('p')
content.textContent=desc.value

var sel_item=document.createElement('strong')
sel_item.textContent=exp_item.value
li.append(title,content,sel_item)


list.appendChild(li)

console.log('nice',li)

// document.appendChild(li)
var btn=document.createElement('button')

btn.append('X')
btn.className='btn btn-danger  btn-sm float-right delete'

// button for edit
var btn1=document.createElement('button')

btn1.append('edit')

btn1.className="btn btn-sm btn-info float-right edit"


console.log(btn)

li.append(btn)
li.append(btn1)

text.value=''
desc.value=''

}
var edit_btn=document.createElement('button')

edit_btn.append('edit')
edit_btn.className="btn btn-secondary "

list.appendChild(edit_btn)


function delonClick(event)
{
 if(event.target.classList.contains('delete'))
 {
    event.target.parentNode.remove()
 }

 else if(event.target.classList.contains('edit'))
 {
    text.value=event.target.parentNode.firstChild.textContent;
    desc.value=event.target.parentNode.children[1].textContent;
    event.target.parentNode.remove()
 }



}

//text filter

function filter_text(event)
{
sum=0

// convert text to lowercase    
var text= event.target.value.toLowerCase()

// convert the list to array and iterate each element of array
Array.from(list.getElementsByTagName('li')).forEach(function(item)
{
   // if('one',item.children[2]==text)
    if(item.children[2].textContent.toLowerCase().indexOf(text)!=-1)
    {
        console.log('one',item.firstChild.textContent)
    let val=parseInt(item.firstChild.textContent)
    sum=sum+val
        item.style.display='block'
    }

    else{
        item.style.display='none'

    }
}

)

final_value.textContent="Expense Sum : "+sum




}



function descp_txt(event)
{
var text= event.target.value.toLowerCase()

Array.from(list.getElementsByTagName('li')).forEach( (item)=>
{
if(item.firstChild.textContent.toLowerCase().indexOf(text)!=-1)
{
console.log(item.style.display="block")    
}
else
{
    console.log(item.style.display="none")    
}
}



)

}


// Select the edit button from HTML

// let geteditbtn=document.querySelectorAll(".edit")

// filter.addEventListener('click',edit_on_click);
// let a=document.querySelectorAll('b-edit')
// console.log(a)
// a.addEventListener('click',edit_on_click)
// console.log(a)
// console.log(items.querySelectorAll('.edit'))





// function edit_on_click(event)
// {
//  if(event.target.classList.contains('edit'))
//  {
//     event.target.parentNode.remove()
//  }


// }