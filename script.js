// let main = document.querySelector("#main");
// const scroll = new LocomotiveScroll({
//   el: main,
//   smooth: true,
// });

gsap.registerPlugin(ScrollTrigger);

Shery.mouseFollower();
Shery.makeMagnet(".magnet");
// Try without any config first
Shery.hoverWithMediaCircle(".hvr", {
  images: [
    "https://images.unsplash.com/photo-1524638067-feba7e8ed70f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=398&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1571380401583-72ca84994796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHByb2R1Y3R8ZW58MHwxfDB8fHww",
  ],
});

gsap.to(".fleftelem", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: "power1.out",
});

let sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images", {
/*Need to change the effect inface thia whole section 🤔👇because right we are getting
  a negative image efect which dose t looks good at all*/
  style: 1,
  //   config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    ScrollTrigger.create({
      trigger: "#fimages",
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
      onUpdate: function (prog) {
        // Calculate which section should be active based on the overall progress
        let sectionProgress = prog.progress * (sections.length - 1);
        let currentSection = Math.floor(sectionProgress);
        let sectionOffset = sectionProgress - currentSection;

        // Set the scroll position for the image effect
        setScroll(currentSection + sectionOffset);
      },
    });
  },
});

