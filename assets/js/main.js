<<<<<<< HEAD
let count = 0;
let iconOpen = document.getElementById("icon-open");
let iconClose = document.getElementById("icon-close");

iconClose.addEventListener("click", exit);

function exit(){
    
}

let menuOpen = document.getElementById("menu-open").addEventListener("click", openAndCloseMenu);

function openAndCloseMenu() {
    if(count % 2 == 0){
        iconOpen.classList.add("icon-hidden");
        iconClose.classList.remove("icon-hidden");
    }
    else{
        iconOpen.classList.remove("icon-hidden");
        iconClose.classList.add("icon-hidden");
    }
    count++;
}

=======
/* ANIMAÇÃO CONFORME FOR DANDO SCROLL */
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    navbar-nav,
    #baixo,
    .image-main,
    .group-cities
`);
>>>>>>> main
