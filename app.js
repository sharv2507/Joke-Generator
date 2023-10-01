const btnTrigger = document.querySelector("#btn-jokecall");
const output = document.querySelector(".joke-display");

function printting (_something){
    output.innerHTML = _something.setup + "<br><br>" +_something.delivery;
    
}

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit";


btnTrigger.addEventListener("click", ()=> {
    fetch(url)
.then(joke => joke.json())
.then(json => printting(json))
})
    

