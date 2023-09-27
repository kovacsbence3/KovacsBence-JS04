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
    szoveg = document.getElementById("szoveg").value;
    // console.log(szoveg)
    if (betumeret == "kisbetu"){
        szoveg = szoveg.toLowerCase();
    } else if ("nagyBetu"){
        szoveg = szoveg.toUpperCase();
    } else if ("nincs"){
        alert("nem választottad ki, hogy kis vagy nagybetűre történjen az átalakítás")
    }
    // console.log(szoveg);
    document.getElementById("szoveg").value = szoveg;

}
