// ? String veriyi int tipine cevirmek
 debugger;
let a = 12
let b = "6"

// * 1. yol --->   b = parseInt(b)
// * 2. yol 
b = Number(b)



console.log("b : "+typeof b)
console.log(a+b)


// ? Number veri tipinden String veri tipine cevirmek 

let c = 12
let d = 4


// * 1.yol ------>     c = c.toString(), d = d.toString()

// * 2. yol
c = String(c)
d = String(d)


console.log("c : "+typeof c)
console.log("d : "+typeof d)