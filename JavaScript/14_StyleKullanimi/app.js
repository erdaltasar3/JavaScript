const todo = document.querySelector(".list-group-item");

const todoList = Array.from(document.querySelectorAll("li:nth-child(odd)"))


todoList.forEach(function(name){
    name.style.backgroundColor="#a48b16"
})