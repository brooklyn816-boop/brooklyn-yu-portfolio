// ==========================
// Brooklyn Yu Portfolio
// Version 0.2
// ==========================

console.log("Portfolio Loaded.");


document.querySelectorAll(".project-menu > a")
.forEach(function(link){

    link.addEventListener("click",function(e){

        e.preventDefault();


        const menu = this.parentElement;


        menu.classList.toggle("active");


        console.log(menu.classList);

    });

});


/* ==========================
   Butterfly Cursor Trail
   ========================== */

document.addEventListener("mousemove",function(e){

    const dot = document.createElement("div");

    dot.className = "cursor-dot";

    dot.style.left = e.clientX + "px";

    dot.style.top = e.clientY + "px";

    document.body.appendChild(dot);

    setTimeout(function(){

        dot.remove();

    },450);

});


/* ==========================
   Hero 3D Tilt
   ========================== */

// ==========================
// Hero Parallax
// ==========================

const photo = document.querySelector(".photo-card");

const hero = document.querySelector(".home");


if(photo && hero){

    hero.addEventListener("mousemove",function(e){

        const x = e.clientX / window.innerWidth - 0.5;

        const y = e.clientY / window.innerHeight - 0.5;


        const moveX = x * 40;

        const moveY = y * 25;


        photo.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

    });


    hero.addEventListener("mouseleave",function(){

        photo.style.transform =
        "translate(0,0)";

    });

}