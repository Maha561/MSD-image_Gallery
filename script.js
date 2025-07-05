
let lightBtn = document.getElementById("lightBtn");

let darkBtn = document.getElementById("darkBtn");

lightBtn.addEventListener("click",function(){
    document.body.style.backgroundColor="#f3e5f5";
    document.body.style.color="black";
});

darkBtn.addEventListener("click",function(){
    document.body.style.backgroundColor="#1c1c1c";
    document.body.style.color="white";
});