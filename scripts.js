function timer()
{
    let today = new Date();

    let dzien = today.getDate();
    let miesiac = today.getMonth();
    let rok = today.getFullYear();

    let godzina = today.getHours();
    if (godzina<10)  godzina = '0' + godzina;
    let minuta = today.getMinutes();
    if (minuta<10) minuta = '0' + minuta;
    let sekunda = today.getSeconds();
    if (sekunda<10) sekunda = '0' + sekunda;

    document.getElementById('zegar').innerHTML=
    godzina+':'+minuta+':'+sekunda;

    setTimeout('timer()',1000);
}