// const hikeExp = document.querySelector('.hike-exp')

const slide = document.querySelector('.hike')

// window.addEventListener('scroll', scrollReveal)
//
// function scrollReveal() {
//     const hikePos = hikeExp.getBoundingClientRect().top
//     const windowHeight = window.innerHeight / 1.8
//     console.log(windowHeight)
//
//     if (hikePos < windowHeight) {
//         hikeExp.style.color = 'green'
//     }
// }

////////////////////////////////////////

// let options = {
//     threshold: 0.5
// }
//
// let observer = new IntersectionObserver(slideAnimate, options)
//
// function slideAnimate(entries) {
//     entries.forEach(entry => {
//         // console.log(entry)
//         if (entry.isIntersecting) {
//             slide.style.background = 'white'
//         }
//     })
// }
//
// observer.observe(slide)

//////////////////////////

const controller = new ScrollMagic.Controller()

const exploreScene = new ScrollMagic.Scene({
    triggerElement: '.hike-exp',
    triggerHook: 0.5
})
    .addIndicators({colorStart: 'white', colorTrigger: 'white'})
    .setClassToggle('.hike-exp', 'active')
    .addTo(controller)

// Intersection Observer API - https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API
// https://cdnjs.com/libraries/ScrollMagic