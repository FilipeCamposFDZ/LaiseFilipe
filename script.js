function backToTop(){
    window.scrollTo(0,0)
}

function daysLeft(){
    document.querySelector('#diasRestantes').textContent = `Faltam ${days+1} dias`
}


let deadline = new Date("sep 17, 2022 00:00:01").getTime(); 
let now = new Date().getTime();
let final = deadline - now;
let days = Math.floor(final / (1000 * 60 * 60 * 24));

// window.onload = backToTop, daysLeft;
// window.onload = 
