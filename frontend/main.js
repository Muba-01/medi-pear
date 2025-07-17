

const circle = document.querySelector('.circle');
const sidebar = document.querySelector('.side-navbar');
// const sidebarLinks = document.querySelectorAll('.side-navbar ul li a');

    circle.addEventListener('click', () => {
    sidebar.classList.toggle('closed');
    circle.classList.toggle('closed');

    const icon = circle.querySelector('i');
    icon.classList.toggle('fa-angle-right');
    icon.classList.toggle('fa-angle-left');

    });

 

