// todo     Mouse events

// DOMContentLoaded
// load
// click
// dbclick
// mouseover
// mouseout
// mouseenter
// mouseleave

////////////////////////

// document.addEventListener("DOMContentLoaded",function(){
//     alert("merhaba")
// })

////////////////////////

// window.addEventListener("load",function(){
//     this.alert("merhaba dunya")
// })

////////////////////////

const todoHead = document.querySelectorAll(".card-title")[1];
// todoHead.addEventListener("click",function(){
//     console.log("aferin");
// });

////////////////////////

// todoHead.addEventListener("dblclick",hello)

// function hello(e) {
//     console.log(e.type);
//     console.log("aferin la");
// }

////////////////////////

const cardBody = document.querySelectorAll(".card-body")[1];

// cardBody.addEventListener("mouseover",run);

function run(e) {
    console.log(e.type);
}

////////////////////////

// cardBody.addEventListener("mouseout",run);

////////////////////////

// cardBody.addEventListener("mouseenter",run);

////////////////////////

cardBody.addEventListener("mouseleave",run);




