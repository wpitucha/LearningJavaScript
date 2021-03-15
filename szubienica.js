const alphabet = ["A","Ą","B", "C", "Ć","D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N","Ń", "O","Ó", "P","Q","R", "S","Ś", "T", "U", "V","W", "X", "Y", "Z", "Ź", "Ż"]
let alphabetDiv = '';
let missclicks = 0
let hit = false

let hangmanInscription = "na paryskie getto pada deszcz"
hangmanInscription = hangmanInscription.toUpperCase()
hangmanInscription = [...hangmanInscription]
//console.log(hangmanInscription);

let crypto = ''
//console.log(crypto)

for (let i=0; i<hangmanInscription.length; i++) {
    if (hangmanInscription[i] === ' ')
        crypto = crypto + ' '
    else
        crypto = crypto + '-'
}
//console.log(crypto);
document.getElementById('plansza').innerHTML = crypto
crypto = [...crypto];

for (let i=0; i<alphabet.length; i++) {
    if ((i)%7 != 0) 
        alphabetDiv = alphabetDiv + '<div class="litera">'+alphabet[i]+'</div>'
    else
        alphabetDiv = alphabetDiv + '<div class="litera" style="clear: both">'+alphabet[i]+'</div>'
}
document.getElementById('alfabet').innerHTML = alphabetDiv
let = letters = document.querySelectorAll('.litera')
letters = [...letters]

console.log(crypto)

letters.forEach(letter => {
    letter.addEventListener('click', function() {
        //console.log(letter.innerHTML)

        for (i=0; i<hangmanInscription.length; i++) {
            if (hangmanInscription[i] == letter.innerHTML) {
                crypto[i] = letter.innerHTML
                crypto = crypto.join("")
                document.getElementById('plansza').innerHTML = crypto
                crypto = [...crypto]
                hit = true
            }
        }
        if (hit === true) {
            letter.classList.add('correct')
            hit = false
        }
        else {
            letter.classList.add('notcorrect')
            missclicks++
            document.getElementById('szubienica').innerHTML = '<img src="img/szubienica/s'+missclicks+'.jpg" alt=""></img>'
        }

        if (crypto == hangmanInscription) {
            document.getElementById('pojemnik').innerHTML = 'WYGRANA!'
        }
        if (missclicks>=9) {
            document.getElementById('pojemnik').innerHTML = 'PRZEGRANA!'
        }
    })
})