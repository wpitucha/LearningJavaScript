// -------------------------------- ZEGAR

function timer()
{
    let today = new Date();

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


// ------------------------------- KALENDARZ

function kalendarz() {
    let today = new Date();

    let dzien = today.getDate();
    if (dzien<10) dzien='0'+miesiac;
    let miesiac = today.getMonth();
    if (miesiac<10) miesiac='0'+miesiac;
    let rok = today.getFullYear();

    document.getElementById('kalendarz').innerHTML='Dzisiaj jest: '+dzien+' - '+miesiac+', '+rok;

    setTimeout('kalendarz()',64000);
}


// -------------------------------- GENERATOR

function generator() {
    let genMax = document.getElementById('genMax').value;
    let genLiczba = Math.floor(Math.random()*genMax);

    document.getElementById('generator').innerHTML='Losowa liczba od 0 do '+genMax+' to ';
    document.getElementById('generator').innerHTML=genLiczba;
}


// --------------------------- KALKULATOR

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


// ------------------------- SLIDER

let slajdNumer = Math.floor(Math.random()*5)+1;

function SliderSchowaj() {
    $("#slider").fadeOut(500);
}

function SliderZdjecia() {

slajdNumer++; if (slajdNumer>5) slajdNumer=1;

let plik = "<img src=\"img/slajdy/slajd" + slajdNumer + ".jpg\" />";
document.getElementById('slider').innerHTML = plik;

$("#slider").fadeIn(500)

setTimeout("SliderZdjecia()", 3500);
setTimeout("SliderSchowaj()", 3000);
}


// ------------------------------- LICZBA PIERWSZA


function podajLiczbePierwsza() {
    let pierwszaLiczba = document.getElementById('liczbaPierwsza').value;
    let dzielnikLiczby = 2;

    while (pierwszaLiczba%dzielnikLiczby!=0)
        dzielnikLiczby=dzielnikLiczby+1

    if (pierwszaLiczba==dzielnikLiczby)
        document.getElementById('liczbaPierwszaDiv').innerHTML='To jest liczba pierwsza';
    else
        document.getElementById('liczbaPierwszaDiv').innerHTML='To jest liczba złożona';
}


// --------------------------------------- OBLICZANIE POLA

function obliczPole() {
    let bok1 = parseInt(document.getElementById('bok1figury').value);
    let bok2 = parseInt(document.getElementById('bok2figury').value);
    let typ = document.getElementById('figura').value;

    if (typ == 'Kwadrat')
    document.getElementById('poleWynik').innerHTML=bok1*bok1;
    if (typ == 'Prostokąt')
    document.getElementById('poleWynik').innerHTML=bok1*bok2;
}


// -------------------------------------------- PRZEDZIAL

function przedzial() {
    let liczba = document.getElementById('liczbax').value;
    let warunek1 = document.getElementById('warunek1przedzialu').value;
    let warunek2 = document.getElementById('warunek2przedzialu').value;


    if (liczba != '') {
        if (liczba>=warunek1) {
            if (liczba<=warunek2)
            document.getElementById('polePrzedzial').innerHTML="Liczba należy do przedziału <"+warunek1+', '+warunek2+'>';
            else if (liczba>=warunek2)
            document.getElementById('polePrzedzial').innerHTML="Liczba nie należy do przedziału <"+warunek1+', '+warunek2+'>';
        }
        if (liczba<warunek1) 
            document.getElementById('polePrzedzial').innerHTML="Liczba nie należy do przedziału <"+warunek1+', '+warunek2+'>';
        if (warunek1>=warunek2)
            document.getElementById('polePrzedzial').innerHTML="Nie ma takiego przedziału";
    }
    else
    document.getElementById('polePrzedzial').innerHTML="Podaj liczbę!";
}

// -------------------------------------------- ROK 

function sprawdzRok() {
    let rok = document.getElementById('rok').value;

    if (rok != '') {
        if (rok % 4 == 0 && rok % 100 != 0 || rok % 400 == 0)
        document.getElementById('rokWynik').innerHTML=rok+' jest rokiem przestepnym';
        else
        document.getElementById('rokWynik').innerHTML=rok+' nie jest rokiem przestepnym';
}
    else
    document.getElementById('rokWynik').innerHTML='Nie wpisano roku!';
}






