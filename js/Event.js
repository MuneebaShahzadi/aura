
let i = 0;
const images = ['../images/cover4.jpg', '../images/cover6.jpg', '../images/cover7.jpg'];
const duration = 8000; 

function changeImage() {
    const main = document.getElementById('main');
    
    main.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url('${images[i]}')`;
    
    main.classList.remove('zoom');
    void main.offsetWidth; 
    main.classList.add('zoom');
    
    i = (i + 1) % images.length; 
    
    setTimeout(changeImage, duration);
}

function toggleNavLinks() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

