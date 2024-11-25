gsap.registerPlugin(ScrollTrigger);

gsap.to(".circle", {
  scrollTrigger: {
    trigger: ".line",
    start: "top center", // Начало анимации, когда верх линии будет в центре экрана
    end: "bottom center", // Конец анимации, когда низ линии будет в центре экрана
    scrub: true, // Анимация синхронизирована со скроллом
  },
  y: 300, // Движение вправо на 400px
  duration: 15,
});
gsap.to(".circle2", {
  scrollTrigger: {
    trigger: ".line2",
    start: "top center", // Начало анимации, когда верх линии будет в центре экрана
    end: "bottom center", // Конец анимации, когда низ линии будет в центре экрана
    scrub: true, // Анимация синхронизирована со скроллом
  },
  y: 340, // Движение вправо на 400px
  duration: 15,
});






const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}