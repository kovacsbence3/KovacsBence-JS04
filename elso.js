let betumeret = "nincs";
let atalakitas = true;
function kisBetu(){
    betumeret = document.getElementById("kisBetu").value;
    console.log(betumeret);
}
function nagyBetu(){
    betumeret = document.getElementById("nagyBetu").value;
    console.log(betumeret);

}
function varazsoljunk(){
    
    szoveg = document.getElementById("szoveg").value;
    // console.log(szoveg)
    if (betumeret == "kisbetu"){
        szoveg = szoveg.toLowerCase();
        atalakitas = true;
    } else if (betumeret == "nagyBetu"){
        szoveg = szoveg.toUpperCase();
        atalakitas = true;
    } else if (betumeret == "nincs"){
        alert("Nem választottad ki, hogy kis vagy nagybetűre történjen az átalakítás.")
        atalakitas = false;
    }
    if (szoveg == ""){
        alert("Kérlek add meg az átalakítandó szöveget")
        atalakitas = false;
    }
    // console.log(szoveg);
    document.getElementById("szoveg").value = szoveg;
}
