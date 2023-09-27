let betumeret = "nincs";
//let atalakitas = true;
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

    } else if (betumeret == "nagybetu") {
        szoveg = szoveg.toUpperCase();
        atalakitas = true;
    // console.log(szoveg);
    }else{
        alert("Kérlek add meg az átalakítás típusát")
    }
    if(szoveg == ""){
        alert("Kérlek add meg az átalakítandó szöveget")
    }

    document.getElementById("szoveg").value = szoveg;
}

