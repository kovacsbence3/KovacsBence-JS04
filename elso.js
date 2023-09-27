let betumeret = "kisbetu";
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
    } else{
        szoveg = szoveg.toUpperCase();
    }
    // console.log(szoveg);
    document.getElementById("szoveg").value = szoveg;

}
