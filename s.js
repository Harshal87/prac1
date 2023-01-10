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
filter.addEventListener('keyup',filter_text);

//description keyup event
//descp_elem.addEventListener('keyup',descp_txt)

//get the form text to add to list
let text=document.getElementById('text-value')

let desc=document.getElementById('text-desc')

//get the description for the items in list
// let descp=document.getElementById('descp-value')

//function invoked by submit event
function additem(event)
{
// prevent the default action of submit event   
event.preventDefault();
console.log(text.value,desc.value);

// New list element
var li=document.createElement('li')

// bootstrap classes for li element
li.className='list-group-item'

// add text value to new li element
li.append(text.value,desc.value)


list.appendChild(li)

console.log(li)
// document.appendChild(li)

var btn=document.createElement('button')

btn.append('X')
btn.className='btn btn-danger  btn-sm float-right delete'

// button for edit
var btn1=document.createElement('button')

btn1.append('edit')

btn1.className="btn btn-sm btn-info float-right"


console.log(btn)

li.append(btn)
li.append(btn1)

}
var edit_btn=document.createElement('button')

edit_btn.append('edit')
edit_btn.className="btn btn-secondary"

list.appendChild(edit_btn)


function delonClick(event)
{
 if(event.target.classList.contains('delete'))
 {
    event.target.parentNode.remove()
 }


}

//text filter

function filter_text(event)
{
// convert text to lowercase    
var text= event.target.value.toLowerCase()

// convert the list to array and iterate each element of array

Array.from(list.getElementsByTagName('li')).forEach(function(item)
{
    if(item.firstChild.textContent.toLowerCase().indexOf(text)!=-1)
    {
        item.style.display='block'
    }

    else{
        item.style.display='none'

    }
}


)

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