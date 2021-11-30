var deviceSize = window.matchMedia("(min-width: 768px)");
let animHeight =650;
let animWidth=100;

if(!deviceSize.matches){
    animHeight=700;
}
console.log(animHeight);
function creatSquare() {
        const secttion = document.querySelector("#pizza-anim");
        const square = document.createElement("img");
        if(Math.random()*2>=1){
            square.src = "images/Floatpizza.png";
        }
        else{
            square.src = "images/asset-burger.png";
        }
        var size = Math.random() * 85;
        square.style.width = 30 + size + "px";
        square.style.height = 30 + size + "px";
        square.classList.add("animate-pizza");
        square.style.top = Math.random() * (innerHeight -animHeight ) + "px";
        square.style.left = Math.random() * (innerWidth - animWidth) + "px";

        secttion.appendChild(square);

        setTimeout(() => {
            square.remove()
        }, 5000);
    }

setInterval(creatSquare, 150);
