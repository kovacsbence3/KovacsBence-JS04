const tarsasjatekList = [];
document.addEventListener("DOMContentLoaded", () => {
    const tarsasjatekUrlap = document.forms["tarsasjatekUrlap"];
    tarsasjatekUrlap.addEventListener("submit", (event) => {
        event.preventDefault();
        const jatekNev = tarsasjatekUrlap["Jateknev"].value;
        const jatekIdo = tarsasjatekUrlap["jatekIdo"].value;
        const tipus = tarsasjatekUrlap["tipus"].value;
        const ajanlottFo = tarsasjatekUrlap["ajanlottFo"].value;
        const kiadasiEv = tarsasjatekUrlap["kiadasiEv"].value;
        const ar = tarsasjatekUrlap["ar"].value;
        const hossz = ar.lenght;
        console.log(hossz)
        let kitoltve = true;

        if (jatekNev.lenght == 0) {
            alert("Milyen mágus akinek még neve sincsen. Kérlek add meg a játék nevét.");
            kitoltve = false;
        }
        if (jatekIdo.lenght == 0){
            alert("Ha csak nem vagy dr Strange, amíg játszol, az idő is telni fog. Kérlek add meg a játék időtartamát")
            kitoltve = false;
        }
        if (tipus.lenght == 0){
            alert("Bilbó egyszerre volt Zsákos és Tuk is, döntenie kellett, hogy melyik kedvtelése szerint éli az életét. Dönts te is, hogy milyen típusú a játék, hogy Bilbó és más is eldönthesse neki való-e.")
            kitoltve = false;
        }
        if (ajanlottFo.lenght == 0){
            alert("Nem baj az, ha a magad útját járod, de nem árt eldönteni, hogy kellenek-e csapattársak. Kérlek add meg az ajánlott létszámot.")
            kitoltve = false;
        }
        if (kiadasiEv.lenght == 0){
            alert("A mars terraformálása még valóban nem most történik, de valamikor azt a játékot is ki kellett adni. Kérlek add meg a játék kiadási évét.")
            kitoltve = false;
        }
        if (ar.lenght == 0){
            alert("A trinketen kívül semmit nem kapsz ingyen. Kérlek add meg mennyibe kerül a játék")
            kitoltve = false;
        }
       
        if(kitoltve){
            const adatok ={
                jatekNev: jatekNev,
                jatekIdo: jatekIdo,
                tipus: tipus,
                ajanlottFo: ajanlottFo,
                kiadasiEv: kiadasiEv,
                ar: ar
            }
                tarsasjatekList.push(adatok);
                console.log(tarsasjatekList);
        
        }


    })




})