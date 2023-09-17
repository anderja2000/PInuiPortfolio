let h1 = document.getElementById("love");
// comment
function changeH1() {
    h1.innerHTML = "I'm so proud of my big pinguino";
    h1.style.backgroundColor = "pink";
    h1.style.color = "purple";
    h1.style.textShadow = "2px 2px pink";
}

function resetH1Styles() {
    h1.innerHTML = "I love my pinguino!";
    h1.style.backgroundColor = "rgb(207, 106, 56)";
    h1.style.color = "white";
    h1.style.textShadow = "3px 3px 3px pink";
}

let btn = document.getElementById("btn");
btn.addEventListener("click", changeH1);

let resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetH1Styles);


// a comment