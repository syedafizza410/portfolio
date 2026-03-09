let icon = document.querySelector('#icon');
let nav = document.querySelector('.navbar');

icon.onclick = () => {
    icon.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

// Scroll spy
let sections = document.querySelectorAll('section');
let links = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            links.forEach(link => {
                link.classList.remove('active');
            });
            let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
            if(activeLink) activeLink.classList.add('active');
        }
    });

    let head = document.querySelector('header');
    head.classList.toggle('sticky', top > 100);

    icon.classList.remove('bx-x');
    nav.classList.remove('active');
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-page, .h1', {origin: 'top'});
ScrollReveal().reveal('.home-img, .project, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-page h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-page p, .about-me', {origin: 'right'});

const typed = new Typed('.text', {
    strings: ['AI Agent Developer', 'Full Stack Developer', 'Frontend Developer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const type = new Typed('.abouttext', {
    strings: ['AI Agent Developer', 'Full Stack Developer', 'Frontend Developer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function sendToWhatsApp() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let phoneNumber = "923408066537"; 

    let url = "https://wa.me/" + phoneNumber + "?text="
        + "Name: " + encodeURIComponent(name) + "%0a"
        + "Email: " + encodeURIComponent(email) + "%0a"
        + "Phone: " + encodeURIComponent(phone) + "%0a"
        + "Subject: " + encodeURIComponent(subject) + "%0a"
        + "" + encodeURIComponent(message);

    window.open(url, "_blank");
}