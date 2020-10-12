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




function kalendarz() {
    let today = new Date();

    let dzien = today.getDate();
    if (dzien<10) dzien='0'+miesiac;
    let miesiac = today.getMonth();
    if (miesiac<10) miesiac='0'+miesiac;
    let rok = today.getFullYear();

    document.getElementById('kalendarz').innerHTML=
    dzien+', '+miesiac+', '+rok;

    setTimeout('kalendarz()',64000);
}




function generator() {
    let genMax = document.getElementById('genMax').value;
    let genLiczba = Math.floor(Math.random()*genMax);

    document.getElementById('generator').innerHTML='Losowa liczba od 0 do '+genMax+' to ';
    document.getElementById('generator').innerHTML=genLiczba;
}





function dodaj() {
    var kalkA=parseInt(document.getElementById('kalkPole1').value);
    var kalkB=parseInt(document.getElementById('kalkPole2').value);
    document.getElementById('kalkWynik').innerHTML=kalkA+kalkB;
}

function odejmij() {
    var kalkA=parseInt(document.getElementById('kalkPole1').value);
    var kalkB=parseInt(document.getElementById('kalkPole2').value);
    document.getElementById('kalkWynik').innerHTML=kalkA-kalkB;
}

function pomnoz() {
    var kalkA=parseInt(document.getElementById('kalkPole1').value);
    var kalkB=parseInt(document.getElementById('kalkPole2').value);
    document.getElementById('kalkWynik').innerHTML=kalkA*kalkB;
}

function podziel() {
    var kalkA=parseInt(document.getElementById('kalkPole1').value);
    var kalkB=parseInt(document.getElementById('kalkPole2').value);
    document.getElementById('kalkWynik').innerHTML=kalkA/kalkB;
}




let slajdNumer = Math.floor(Math.random()*5)+1;

function SliderSchowaj()
{
    $("#slider").fadeOut(500);
}

function SliderZdjecia()
{
slajdNumer++; if (slajdNumer>5) slajdNumer=1;

let plik = "<img src=\"img/slajdy/slajd" + slajdNumer + ".jpg\" />";
document.getElementById('slider').innerHTML = plik;

$("#slider").fadeIn(500)

setTimeout("SliderZdjecia()", 5000);
setTimeout("SliderSchowaj()", 4500);
}




