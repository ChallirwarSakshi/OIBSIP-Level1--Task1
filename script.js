const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets:true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints:{
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

//Third Page Image Change
let project1Images = ["image/image4.png", "image/image5.jpg", "image/image3.jpg"];
let project1Index = 0;
let project2Images = document.querySelectorAll('.photos');

function changeProject1Image() {
    project1Index = (project1Index + 1) % project1Images.length;
    document.getElementById('project1-image').src = project1Images[project1Index];
}

function changeProject2Image() {
    project2Images.forEach((photo, index) => {
        if (photo.classList.contains('selected')) {
            photo.classList.remove('selected');
            const nextIndex = (index + 1) % project2Images.length;
            project2Images[nextIndex].classList.add('selected');
            document.getElementById('project1-image').src = project2Images[nextIndex].getAttribute('data-image');
        }
    });
}

setInterval(changeProject1Image, 3000);
setInterval(changeProject2Image, 3000);

document.querySelectorAll('.photos').forEach(photo => {
    photo.addEventListener('click', function() {
        document.querySelectorAll('.photos').forEach(p => p.classList.remove('selected'));
        this.classList.add('selected');
        document.getElementById('project1-image').src = this.getAttribute('data-image');
    });
});