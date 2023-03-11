<<<<<<< HEAD

window.onload = function(){
   
document.getElementById("text").onfocus = function  ()  { 
    let div = document.crealement('div');
    document.body.append(div);
}

document.getElementById("text").onblur = function ()  { 
    const square = document.querySelector("div");
    square.remove();
}

}




=======
document.querySelector("#btnPrompt").addEventListener('click', promtMe);

function promtMe () {
    link = prompt("Введіть посилання:");
    if (link.startsWith('http') === false && link.startsWith('https') === false) {
        link = `https://${link}`;
    }
}

document.querySelector("#btnLink").addEventListener("click", transferLink);

function transferLink () {
    location.href = link;
}








>>>>>>> 57a022c (home work 29)
