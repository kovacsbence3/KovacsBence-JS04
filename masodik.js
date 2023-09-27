const lista = [];

document.addEventListener("DOMContentLoaded", () => {
    const urlap = document.forms["urlap"]
    urlap.addEventListener("submit", (event) => {
        event.preventDefault();
        const nev = urlap["nev"].value;
        const email = urlap["email"].value;
        const jelszo = urlap["jelszo"].value;
        const jelszoRe = urlap["jelszoRe"].value;
        const datum = urlap["datum"];
        nevhossz = nev.lenght;
        console.log(nev, email, jelszo, jelszoRe, nevhossz);
        let megfelelo = true;
        if (nev.lenght <= 4 || nev.lenght >= 17){
            alert("A név hossza 5 és 16 betű között legyen!")
            megfelelo = false;
        }
        if (jelszo != jelszoRe){
            alert("A jelszavaknak meg kell egyezniük!")
            megfelelo = false;
        }
        if (jelszo.lenght <= 4){
            alert("A jelszó minimum 5 karakter kell, hogy legyen!")
            megfelelo = false;
        }
        if(megfelelo){
            const adatok ={
                nev: nev,
                email: email,
                jelszo: jelszo,
                datum: datum,
            }
            lista.push(adatok);
            console.log(lista);
        }

    })
    
});

