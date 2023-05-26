console.log("Hello")

let mening1;
let mening2;
let mening3;
let mening4;

let skicka;
let töm;
let output;
let sentences;
let audio;
 
window.addEventListener("load", function(){
    init();
})


function send(){
    first4 = mening1.value.split(" ").splice(0,4)
    restof1 = mening1.value.split (" ").splice(4,mening1.value.length)
    output.innerHTML = `${first4.join(" ").toUpperCase()}<br><br>${first4.join(" ")}
    <br>${restof1.join(" ")}<br>${first4.join(" ")}
    <br>${mening2.value}<br>${mening3.value}<br>${mening4.value}<br>${first4.join(" ")}`

}


function playAudio() {
    audio = document.getElementById("myAudio");
    audio.play();
  }
  
  document.addEventListener('DOMContentLoaded', playAudio);


function clear(){
    document.getElementsByClassName("form")[0].value = "";
    document.getElementsByClassName("form")[1].value = "";
    document.getElementsByClassName("form")[2].value = "";
    document.getElementsByClassName("form")[3].value = "";
    output.innerHTML = `Utmatning sker här...`

}

function init(){
   output = document.getElementsByClassName("outputtext")[0];
   mening1 = document.getElementsByClassName("form")[0]; 
   mening2 = document.getElementsByClassName("form")[1]; 
   mening3 = document.getElementsByClassName("form")[2]; 
   mening4 = document.getElementsByClassName("form")[3];
   
   töm = document.getElementsByClassName("button")[0];
   töm.addEventListener("click", function(){
    clear();
   })
   skicka = document.getElementsByClassName("button")[1];
   skicka.focus();
   skicka.addEventListener("click", function(){ 
    send();
})};
