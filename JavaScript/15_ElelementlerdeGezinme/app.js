let todo = document.getElementsByClassName("list-group-item")[0];
const todoList = document.querySelector(".list-group");
let lastTodo = document.querySelectorAll(".list-group-item")[document.querySelectorAll(".list-group-item").length - 1];
const card = document.querySelector(".card w-100 mt-3");



// ? Anneden çocuklara erişmek

let value = todoList;

// value = todoList.children[0];
// value = todoList.children[todoList.children.length-1];

//  value = todoList.children[4].textContent = "Degisti";
//  value = todoList.children[3].innerHTML = "<b>Kalın Oldu<b/>";


// value = Array.from(todoList.children);

// value.forEach(function(todo){
//     console.log(todo.textContent);
// });



// ? Çocuktan anneye erişmek

// value = todo;

// value = todo.parentElement.parentElement;
// value = value.parentElement.parentElement.parentElement;


// console.log(value);

// ? kardeşler arası erişim 



// while (true) {
//     if (todo != null) {
//         console.log(todo.textContent);
//         todo = todo.nextElementSibling;
//     } else {
//         break;
//     }
// }

// console.log("******************************************************")

// while (true) {
//     if (lastTodo != null) {
//         console.log(lastTodo.textContent);
//         lastTodo = lastTodo.previousElementSibling;
//     } else {
//         break;
//     }
// }


let row = document.querySelector(".row");

let target = row.children[0].children[3].children[2].children[2];

target.textContent = "Buldum hahahhah";
target.style.backgroundColor ="green";
console.log(target);