
// toggle icon in nav bar 
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick =() =>{
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active")
}

//scroll section active link

let section = document.querySelector("section")
let navlink = document.querySelector("header nav a");

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let hight = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + hight){
            navlink.forEach.apply(link=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ] ').classList.add('active');

            });
        };
    });
}

// Stikey navbar 

let header = document.querySelector("header");
header.classList.toggle('sticky' , window.scrollY > 100);

// remove toggle icon and nav bar

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

// Scroll reveal 

ScrollReveal({
    distance :'80px',
    duration : 2000,
    delay : 200,
 });

 ScrollReveal().reveal('.home-content , .heading ' , { origin: 'top' });
 ScrollReveal().reveal('.home-img , .portfolio-box, .contact form' , { origin: 'bottom'});
 ScrollReveal().reveal( '.home-content h1, .about-img ,.services-box ' , {origin: 'left'});
 ScrollReveal().reveal('.home-content p , .about-content ' , {origin: 'right'});

// typed.js libarry its animation labrary

const typed = new Typed(".multiple-text" , {
    strings : ['Frontend Developer' , 'Web Developer'],
    TypeSpeed : 70,
    backSpeed : 70,
    backDelay : 1000,
    loop: true,
});





