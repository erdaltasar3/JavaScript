const cardBody = document.querySelectorAll(".card-body")[1];

// <h5 class="card-title">Todo List Sayfası </h5>

const newTitle = document.createElement("h2");
newTitle.className = "card-title";
newTitle.textContent = "Todo List Sayfası - Yeni";


const head = document.querySelectorAll(".card-title")[1];


// 1. yol
cardBody.replaceChild(newTitle, cardBody.childNodes[1]);



// 2. yol 
//cardBody.replaceChild(newTitle, head);

