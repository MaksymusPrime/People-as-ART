

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {
    
    ScrollSmoother.create ({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
        
    })

    gsap.fromTo('.hero_section', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero_section',
            start: 'center',
            end: '700',
            scrub: true
        }
    })
}