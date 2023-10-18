// keypress -> harf ve sayıları anlar
// keydown -> harf , sayılar ve sembolleri anlar
// keyup -> tuştan elini kaldırdığında çalışır

// document.addEventListener("keypress",run);

// function run(e) {
//     console.log(e.keyCode);
// }


const todoText = document.querySelector("#todoSearch");
const todoHead = document.querySelectorAll(".card-title")[1];

todoText.addEventListener("keyup",run);

function run(e) {
    todoHead.textContent = e.target.value;
}

