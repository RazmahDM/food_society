// import Swiper, { Navigation } from 'swiper';


// const {Navigation} = Swiper
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.gallery__block', {
        // Optional parameters
        autoplay: {
            delay:5000,
        }, 
        loop: true,
        direction: 'horizontal',
        observer: true, 
        observeParents: true,
        parallax:true,
        slidesPerView: 1,
        // modules: [Navigation],
        // Navigation arrows
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
    
    });


    let burger_button = document.querySelector('.burger')
    let burger_list = document.querySelector('.burger_menu')


    burger_button.addEventListener('click', (e) => {
        burger_list.classList.toggle('active')
    })



})
