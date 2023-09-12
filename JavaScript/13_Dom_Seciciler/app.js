// selectors (seçiciler) 
// classname, id, tag name

// ? getElementById : id'ye göre elementi yakalar

// let button;

// button = document.getElementById("todoAddButton")

// console.log(button)

// const buttonClassList = button.classList;

// console.log(buttonClassList)

// buttonClassList.forEach(function(name){
//     console.log("name : ",name)
// })

// const text1 = button.textContent;
// const text2 = button.innerHTML;

// console.log(text1);
// console.log(text2);

// button.textContent = "<b>Todo Ekleyin<b/>";
// console.log(button.textContent);

// button.innerHTML = "<b>Todo Ekleyin<b/>";
// console.log(button.textContent);

// const todoList = Array.from(document.getElementsByClassName("list-group-item"));

// todoList.forEach(function(isim){
//     console.log("isim : ",isim);
// })

// getElementById
// getElementByClassName
// getElementByTagName


// yukarıda ki 3 metodunun birleşimi olan metot :

// querySelector - querySelectorAll

// const clearButton = document.querySelector("#todoClearButton");

// console.log(clearButton.textContent);

// const todoList = document.querySelectorAll(".list-group-item");
// console.log(todoList);


const todoList = document.querySelectorAll("li:nth-child(odd)");

console.log(todoList);


