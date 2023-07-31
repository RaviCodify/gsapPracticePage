var tl = gsap.timeline();

tl.from("nav, nav h1, nav h5", {
  opacity: 0,
  y: -100,
  duration: 1.5,
  delay: 1,
  stagger: 0.1,
});

tl.from(".row1 .right", {
  opacity: 0,
  duration: 3,
});

tl.from(".left-content-up h1, .left, .left-content-down", {
  opacity: 0,
  x: -100,
  duration: 1,
  stagger: 0.2,
});

gsap.from(".row2", {
  opacity: 0,
  x: 100,
  duration: 2,
  scrollTrigger: {
    trigger: ".row2",
    start: "bottom bottom",
  },
});
