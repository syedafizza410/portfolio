let icon = document.querySelector('#icon');
let nav = document.querySelector('.navbar');

icon.onclick = () => {
    icon.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let links = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            links.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }
    })

    let head = document.querySelector('heeader');

    head.classList.toggle('sticky', window.scrollY > 100);

    icon.classList.remove('bx-x');
    nav.classList.remove('active');
}

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-page, .h1', {origin: 'top'});
ScrollReveal().reveal('.home-img, .portfolio, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-page h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-page p, .about-me', {origin: 'rightp'});


const typed = new Typed('.text', {
    strings: ['Frontend and backend Developer', 'Student', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})