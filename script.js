// 1) need to get the current position of the mouse every time it moves(x,y)

// 2) need to set those x and y values to circular dispatchEvent

// =============================

// every time mouse moves we should get notified = mouseMove Listener
// everytime listener gets notified , we need to get the values
// for x and y axis, and then update it to the circle
let circle = document.querySelector('#circle');
const btn = document.querySelector('#btn');
const svgelem = document.querySelector('#svg');
var tl = gsap.timeline();

window.addEventListener('mousemove', function(details){
    let xValue = details.clientX;
    let yValue = details.clientY;
    setTimeout(function(){
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    }, 75);
    
});

btn.addEventListener('click', function(){
   tl.reverse();
   setTimeout(function(){
    svgelem.classList.add('animate');
   }, 2000)
});








tl
.from('#wrapper',{
    duration: 4,
    scale: .7,
    ease: 'Expo.easeInOut',
    opacity: 0
})

.from('#whitestrip',{
    duration: 2,
    width: 0,
    ease: 'Expo.easeInOut'
}, '-=2.5')

.from('#blackcard',{
    duration: 1.5,
    x: 50,
    opacity: 0,
    ease: 'Expo.easeInOut'
}, '-=1.5')

.from('#linelem',{
    duration: 1.5,
    x: 50,
    opacity: 0,
    ease: 'Expo.easeInOut'
}, '-=1.5')
.from('#linelem .line',{
    duration: 1.5,
    width: 0,
    opacity: 0,
    ease: 'Expo.easeInOut'
}, '-=1.5')

.from('#blackcard p',{
    duration: 1.5,
    y : 30,
    opacity: 0,
    ease: 'Expo.easeInOut'
}, '-=1')

.from('#sidelem',{
    duration: 2,
    x : 30,
    opacity: 0,
    ease: 'Expo.easeInOut'
}, '-=1')