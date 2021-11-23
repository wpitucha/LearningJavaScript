let lightsOutMainDiv = document.getElementById('lightsOut')
let lights_arr = [
    [],
    [],
    [],
    [],
    []
]

for(let i=0; i<5; i++)
    lights_arr[i].length = 5;

/*
for (let i=0; i<25; i++) {
    if (i%5 == 0)
        lightsOutMainDiv.innerHTML += '<div id="'+i+'" onClick="lightsOutFunc(this.id)" class="lightsOFF lights" style="clear: both"></div>'
    else
        lightsOutMainDiv.innerHTML += '<div id="'+i+'" onClick="lightsOutFunc(this.id)" class="lightsOFF lights" ></div>'
}
*/

let light_counter = 1
for(let i=0; i<5; i++) {
    for(let j=0; j<5; j++) {
        lightsOutMainDiv.innerHTML += '<div id="'+light_counter+'" onClick="lightsOutFunc(this.id)" class="lightsOFF lights" style="clear: both"></div>'
        lights_arr[i][j] = document.getElementById(light_counter)
        light_counter++
    }
}

console.log(lights_arr)

let lightsOutDivs = document.querySelectorAll('.lights')
lightsOutDivs = [...lightsOutDivs]

let lightsOutBool = []
lightsOutBool.length = 24
//console.log(lightsOutBool)

for(let i=0; i<25; i++) {
    lightsOutDivs[i] = document.getElementById(i)
    lightsOutBool[i] = false
}

function changeLight(clicked_id) {
    //console.log(clicked_id)
    if (clicked_id > 24) return
    else {
        if (lightsOutBool[clicked_id] == false) {
            lightsOutBool[clicked_id] = true
            lightsOutDivs[clicked_id].classList.add('lightsON')
            lightsOutDivs[clicked_id].classList.remove('lightsOFF')
            console.log(clicked_id)
        }
        else {
            lightsOutBool[clicked_id] = false
            lightsOutDivs[clicked_id].classList.add('lightsOFF')
            lightsOutDivs[clicked_id].classList.remove('lightsON')
            console.log(clicked_id)
        }
    }
}

function lightsOutFunc(clicked_id) {
    ///console.log(clicked_id) // id kliknietego diva
    clicked_id = Number(clicked_id)
    changeLight(clicked_id)
    changeLight(clicked_id+1)
    changeLight(clicked_id+5)
    changeLight(clicked_id-1)
    changeLight(clicked_id-5)
}
