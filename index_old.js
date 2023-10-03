var container = document.getElementById("container");
const play_buttons = document.querySelectorAll('.playstop');
const save_buttons = document.querySelectorAll('.toevoegen');
teller_1 = 0;
teller_2 = 0;
var timerOn_1;
var timerOn_2;

window.onload = function(e){
    let k = 'array'
    let l = 'timerOn'
    for(var i=0; i<play_buttons.length; i++){
        window[`${k}_${i + 1}`] = [];
        window[`${l}_${i + 1}`];
        //eval('var ' + k + '_' + (i + 1) + '=[];');
        //window[`array_${i}`].push("test");
        console.log(window[`${l}_${i + 1}`])
        window[`${k}_${i + 1}`].push("test", "test2", window[`${l}_${i + 1}`]);
    }
    console.log(array_1, array_2)

}

for(var i=0; i < play_buttons.length; i++){
    play_buttons[i].addEventListener("click", function(){
        //this.parentElement.id.charAt(this.parentElement.id.length - 1)
        toggleButton(this)
    });
}

for(var i=0; i < save_buttons.length; i++){
    save_buttons[i].addEventListener("click", function(){
        console.log("werkt")
        slaOp(this)
    });
}

function toggleButton(knop){
    if(knop.innerText == 'Start'){
        knop.innerText = 'Stop'
        knop.style.backgroundColor = "Red"
        var teller = window[`teller_${knop.parentElement.id.charAt(knop.parentElement.id.length - 1)}`]
        timerOn = setInterval(function(){ //start_timer
            teller ++;
            //console.log(teller);
            window[`teller_${knop.parentElement.id.charAt(knop.parentElement.id.length - 1)}`] = teller;
            knop.previousElementSibling.innerText = tijdConverter(teller)
        }, 1000);
    } else {
        knop.innerText = 'Start'
        knop.style.backgroundColor = "Green"
        clearInterval(timerOn) //stop_timer
    }
}

function tijdConverter(nummer){
    var uur = Math.floor(nummer / 3600);
    var min = Math.floor(nummer / 60) - uur*60;
    var sec = nummer%60
    //console.log(sec, sec < 10, (sec < 10 ? "0" : ""))
    return `${(uur < 10 ? "0" : "")}${uur}:${(min < 10 ? "0" : "")}${min}:${(sec < 10 ? "0" : "")}${sec}`
}

function tellerConverter(tijd){
    const tijdteller = tijd.split(":")
    var uur = parseInt(tijdteller[0])*3600
    var min = parseInt(tijdteller[1])*60
    var sec = parseInt(tijdteller[2])
    return uur + min + sec
}

function slaOp(knop){
    (knop.previousElementSibling.innerText == "Stop" ? toggleButton(knop.previousElementSibling) : null)
    var resultaat = window[`teller_${knop.parentElement.id.charAt(knop.parentElement.id.length - 1)}`]
    window[`teller_${knop.parentElement.id.charAt(knop.parentElement.id.length - 1)}`] = 0
    knop.previousElementSibling.previousElementSibling.innerText = '00:00:00'
    knop.nextElementSibling.childNodes[1].innerText = tijdConverter(tellerConverter(knop.nextElementSibling.childNodes[1].innerText) + resultaat);
    //console.log(resultaat, dagtotaal, knop.nextElementSibling.childNodes[1], tellerConverter("01:01:01"), knop.previousElementSibling)
}



//console.log(window[`teller_${knop.parentElement.id.charAt(knop.parentElement.id.length - 1)}`], teller)


