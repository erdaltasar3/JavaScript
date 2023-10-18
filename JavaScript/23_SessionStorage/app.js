
// deger ekleme

sessionStorage.setItem("1", "Erdal");
sessionStorage.setItem("132", "Ahmet");
sessionStorage.setItem("423", "Messi");

// deger silme
// sessionStorage.removeItem("132");

// deger alma

// let value = sessionStorage.getItem("1");
// if (value === null) {
//     console.log("bu kisi bulunamadi");
// } else {
//     console.log("Kisi bulundu : ",value);
// }


// hepsini silme

// sessionStorage.clear();


// ? session storage - array yazdirma

let names = ["Messi","Erdal","Dzeko","tadic"];

sessionStorage.setItem("names", JSON.stringify(names));

let value = JSON.parse(sessionStorage.getItem("names"));

value.forEach(function(name){
    console.log(name);
})



// todo     NOT : LOCAL STORAGE İLE HİÇBİR FARKI YOK KODLAR OLARAK. ARALARINDA Kİ TEK FARK LOCAL STORAGE DE SİTE KAPANINCA DA VERİLER SİLİNMİYOR

