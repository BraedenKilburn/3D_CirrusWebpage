// Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items
const title = document.querySelector('.title');
const airplane = document.querySelector('.airplane img');
const purchase = document.querySelector('.purchase button');
const info = document.querySelector('.info h3');
const models = document.querySelector('.models');

// Moving Animation Event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';

    // Popout Effect
    title.style.transform = 'translateZ(150px)';
    airplane.style.transform = 'translateZ(200px) rotateZ(5deg)';
    info.style.transform = 'translateZ(125px)';
    models.style.transform = 'translateZ(100px)';
    purchase.style.transform = 'translateZ(75px)';
});

// Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    // Popback Effect
    title.style.transform = 'translateZ(0px)';
    airplane.style.transform = 'translateZ(0px) rotateZ(0deg)';
    info.style.transform = 'translateZ(0px)';
    models.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
});