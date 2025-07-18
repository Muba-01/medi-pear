

const circle = document.querySelector('.circle');
const sidebar = document.querySelector('.side-navbar');
const middlemain = document.querySelector('.middle-main');
// const sortbar = document.querySelector('.sort-bar');
// const sidebarLinks = document.querySelectorAll('.side-navbar ul li a');


    circle.addEventListener('click', () => {
        sidebar.classList.toggle('closed');
        circle.classList.toggle('closed');
        middlemain.classList.toggle('closed');
        // sortbar.classList.toggle('closed');

        const icon = circle.querySelector('i');
        icon.classList.toggle('fa-angle-right');
        icon.classList.toggle('fa-angle-left');

    });