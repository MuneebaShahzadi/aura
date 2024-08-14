function changeImage() {
    let main = document.getElementById('main');
    let i = 0;
    const images = [
        '../images/cover4.jpg',
        '../images/cover6.jpg',
        '../images/cover7.jpg',
    ];
    

    function updateImage() {
        main.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)),url('${images[i]}')`;
        i = (i + 1) % images.length;
    }

    updateImage(); 
    setInterval(updateImage, 4000); 
}

document.addEventListener('DOMContentLoaded', changeImage);
