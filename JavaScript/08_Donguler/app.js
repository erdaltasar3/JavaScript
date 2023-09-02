// TODO  FOR dongusu
// let i = 0;
// for (i; i < 10; i++) {
//     console.log("i : "+i)
// }

// TODO While Dongusu

// let i = 0;
// while (i<10) {
//     console.log("Erdal");
//     i++;
// }


// let a = 1;
// let toplam = 0;
// do {
//     if (a%2 == 1) {
//         toplam+=a;
//     }
//     a++;
// } while (a<=20);

// console.log("toplam : "+toplam)


// ? Carpim tablosu 

// for (let i = 1;i<10;i++){
//     for (let j = 1;j<10;j++){
//         console.log(i+"*"+j+" = "+(i*j))
//     }
// }

// ? 0 1000 arasi asal sayilar

// let i = 2;
// let control = 0;
// while (i<=1000) {
//     for (let j =2;j<i;j++){
//         if (i%j == 0){
//             control = 1;
//             break;
//         }
//     }

//     if (control == 0){
//         console.log(i)
//     }
//     control=0;
//     i++;
// }

// ? amstrog sayisi bulma

let sayi = prompt("Lutfen bir sayi giriniz : ")
let toplam = 0

for (let i = 0;i<sayi.length;i++){
    let s = Number(sayi[i])
   toplam+=s**3  
}

if (toplam==sayi){
    console.log(sayi+" sayisi amstrog sayidir")
}else {
    console.log(sayi+" sayisi amstrog sayi degildir")
}