let betumeret = "nincs";
function kisBetu(){
    betumeret = document.getElementById("kisBetu").value;
    // console.log(betumeret);
}
function nagyBetu(){
    betumeret = document.getElementById("nagyBetu").value;
    // console.log(betumeret);

}
function varazsoljunk(){
    let atalakitas = true;
    szoveg = document.getElementById("szoveg").value;
    // console.log(szoveg)
    if (betumeret == "kisbetu"){
        szoveg = szoveg.toLowerCase();
    } else if (betumeret == "nagyBetu"){
        szoveg = szoveg.toUpperCase();
    } else if (betumeret == "nincs"){
        alert("Nem választottad ki, hogy kis vagy nagybetűre történjen az átalakítás.")
    }
    // console.log(szoveg);
    if (atalakitas){
    document.getElementById("szoveg").value = szoveg;
    }
}
