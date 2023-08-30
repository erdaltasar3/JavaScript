/* 

TODO    var : global 
TODO    let : sadece olusturuldugu kisimda kullanilir
TODO    cons : constant = sabit ; degeri degistirilemez

*/

var sayi = 12;

function selamVer(){
    if (true){
        let b = "bana if disinda erisilemez !";
        console.log(b);
    }
    // * console.log(b) bunu yazarsak hata aliriz cunku b degiskeni let ile olusturulmus.
}

selamVer();

const e = "Erdal"
// ? e ="Messi" bunu yazarsak hata aliriz cunku const sabit degisken demektir.
console.log(e)

const user = {
    username : "erdaltsar3",
    password : "erdal123"
}

user.password = "messi123"

console.log(user)