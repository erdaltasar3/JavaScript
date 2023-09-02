// function Yazdir(){
//     console.log("Erdal Tasar")
// }
// Yazdir()

// function topla(sayi1,sayi2){
//     console.log("Toplam : "+(sayi1+sayi2));
// }

// topla(12,42)

// ? decimal to binary convert




// ? ikilik sayidan 10 luk sayiya cevirme


function convert(sayi){
    let j = sayi.length-1;
    let toplam = 0;
    for (let i=0;i<sayi.length;i++){
        if (Number(sayi.charAt(i)) == 1){
            toplam = toplam + (2**j)
        }
        j--;
    }
    console.log("toplam : "+toplam)
}

let sayi = prompt("Lutfen 2 lik sistemden 10 luk sisteme cevirmek istediginiz sayiyi giriniz : ")

convert(sayi)