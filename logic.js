// ....Univesal Stracture of function and others......
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::




// .....All Element Selections will be undernith here...........
const expandableButtons = document.querySelectorAll('[data-expandable-button]')
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::




// .....All EventListener go undernith here...........
expandableButtons.forEach( button =>{
    button.addEventListener('click',toggleText)
})
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::




// ......All Function will go here undernith.......
function toggleText(e){
  expandableElement = e.target.closest('[data-expandable]')
  expandableElement.classList.toggle('expanded')
  setExpandedButtonText(e.target)
}

function setExpandedButtonText(button){
 const expandableElement = button.closest('[data-expandable]')
 const Axpanded = expandableElement.classList.contains('expanded')
 button.innerText = Axpanded ? 'Read Less' : 'Read More'
}
// ::::::::::::::::::::::::::::::::::::::::::::::::

//All code will be deleted here.............
function printOut(text){
    const div = document.createElement('div')
    div.innerHTML = text
    document.body.appendChild(div)
}
// addEventListener('click',()=>{
//     alert("this is working")
// })
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::