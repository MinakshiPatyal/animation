
let tl=gsap.timeline()

tl.from(".logo, .nav-2 h3, .nav-3 h4, .nav-3 button",{
    y:-100,
    duration:0.5,
    delay:0.5,
    opacity:0.5,
stagger:0.2
})


tl.from(".content h1",{
    y:100,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.3
})
tl.from(".content>img",{
    scale:0,
    opacity:0,
    stagger:0.3
})
tl.from(".scroll",{
    scale:0,
    opacity:0,
    // stagger:0.3,
    // yoyo:true,
})
tl.to(".scroll",{
  repeat:-1,
  duration:1,
  y:10,
    stagger:0.3,
    yoyo:true,
})