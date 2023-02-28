const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } });
const button = document.querySelector("button");

tl.fromTo(
  ".cookie-container",
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1,0.4)", duration: 1.5 }
);
tl.fromTo(
  ".cookie",
  { opacity: 0, x: -50, rotation: "-45deg" },
  { opacity: 1, rotation: "0deg", x: 0 },
  "<50%"
);
tl.fromTo(".text", { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, "<");
// cookie jump
tl.fromTo(
  ".cookie",
  { y: 0, rotation: "0deg" },
  { y: -20, rotation: "-20deg", yoyo: true, repeat: -1 }
);
tl.fromTo(
  "#crumbs",
  { y: 0, rotation: "0deg" },
  { y: -20, rotation: "-20deg", yoyo: true, repeat: -1 },
  "<"
);
// fading the cookie out
button.addEventListener("click", () => {
  gsap.to(".cookie-container", {
    opacity: 0,
    y: 200,
    duration: 0.75,
    ease: "power1.out",
  });
});
