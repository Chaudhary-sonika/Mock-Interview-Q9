var btnInc = document.querySelector("#inc");
var btnDec = document.querySelector("#dec");
var counter = document.querySelector("#counter");

function increaseCont() {
    var currCounter= parseInt(counter.innerText);
    counter.innerText = currCounter + 1;
}
function decCount() {
    var currCounter= parseInt(counter.innerText);
    counter.innerText = currCounter - 1;
}
btnInc.addEventListener("click", increaseCont);
btnDec.addEventListener("click", decCount);