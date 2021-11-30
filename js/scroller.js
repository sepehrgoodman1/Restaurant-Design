const header = document.querySelector("header");
const bugfixer=document.querySelector(".fix-bug");


let fixed = false;

window.addEventListener('scroll', (event) => {
    let Scroll = this.scrollY;
    if (deviceSize.matches) {
        if (Scroll > 250 && !fixed) {
            fixed = true;
            header.classList.add("pos-fix");
            bugfixer.style.padding="5% 0";
        } else if (Scroll < 250 && fixed) {
            fixed = false;
            header.classList.remove("pos-fix");
            bugfixer.style.padding="0% 0";

        }
    }
    else{
        if (Scroll > 250 && !fixed) {
            fixed = true;
            header.classList.add("pos-fix");
            bugfixer.style.padding="5% 0";
        } else if (Scroll < 250 && fixed) {
            fixed = false;
            header.classList.remove("pos-fix");
            bugfixer.style.padding="0% 0";
        }
    }
});