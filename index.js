var container = document.getElementById("container");
const play_buttons = document.querySelectorAll('.playstop');
teller_1 = 0;
teller_2 = 0;
var timerOn;

for(var i=0; i < play_buttons.length; i++){
    play_buttons[i].addEventListener("click", function(){
        //this.parentElement.id.charAt(this.parentElement.id.length - 1)
        console.log("werkt", this.parentElement.id, this.innerText)
        toggleButton(this)
    });

}

//const timerOn = setInterval(startTimer(), 1000);

function stopTimer(){
    clearInterval(timerOn)
}

function toggleButton(knop){
    if(knop.innerText == 'Start'){
        knop.innerText = 'Stop'
        knop.style.backgroundColor = "Red"
        var teller = window[`teller_${knop.parentElement.id.charAt(knop.parentElement.id.length - 1)}`]
        timerOn = setInterval(function(){
            teller ++;
            console.log(teller);
        }, 1000);
        window[`teller_${knop.parentElement.id.charAt(knop.parentElement.id.length - 1)}`] = teller;
        console.log(window[`teller_${knop.parentElement.id.charAt(knop.parentElement.id.length - 1)}`], teller)
        console.log(window[`teller_${knop.parentElement.id.charAt(knop.parentElement.id.length - 1)}`])
    } else {
        knop.innerText = 'Start'
        knop.style.backgroundColor = "Green"
        stopTimer()
        console.log(window[`teller_${knop.parentElement.id.charAt(knop.parentElement.id.length - 1)}`], teller)
    }
}
