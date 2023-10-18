
const cardBody = document.querySelectorAll(".card-body")[1];

const link = document.createElement("a");
link.id = "goBlogWebSite";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "https://www.instagram.com/";
link.target = "_blank";
link.innerHTML = "Kişisel Web siteme git";

cardBody.appendChild(link);


// {/* <li class="list-group-item d-flex justify-content-between">Todo 3
//     <a href="#" class="delete-item">
//         <i class="fa fa-remove"></i>
//     </a>
// </li> */}

const todo = document.createElement("li");
const todoLink = document.createElement("a");
const todoI = document.createElement("i");

todoI.className = "fa fa-remove";

todoLink.href = "#";
todoLink.className = "delete-item"; 


todo.className = "list-group-item d-flex justify-content-between";
todo.innerHTML = "Todo 9";


todoLink.appendChild(todoI);

todo.appendChild(todoLink);

const ul = document.querySelector(".list-group");

ul.appendChild(todo)



