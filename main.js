let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let input = document.getElementById('inputField');
var counter = 20;







addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText =( "⚫ " + inputField.value);
    toDoContainer.appendChild(paragraph);
    inputField.value = "" ;
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through"
        
    })





    paragraph.addEventListener('dblclick', function () {
        toDoContainer.removeChild(paragraph);
        
    })
})

