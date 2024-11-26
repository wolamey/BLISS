
function get_line_one()  {
if(window.innerWidth<=1024 && window.innerWidth >= 768) return 200
else if(window.innerWidth<=600) return 200

else return 300
}
function get_line_two()  {
  if(window.innerWidth<=1024 && window.innerWidth >= 768 )return 200
  else if(window.innerWidth<=600) return 200
  else return 340
  }
  
gsap.registerPlugin(ScrollTrigger);

gsap.to(".circle", {
  scrollTrigger: {
    trigger: ".line",
    start: "top center", 
    end: "bottom center", 
    scrub: true, 
  },
  y: get_line_one(), 
  duration: 15,
});
gsap.to(".circle2", {
  scrollTrigger: {
    trigger: ".line2",
    start: "top center", 
    end: "bottom center", 
    scrub: true,
  },
  y: get_line_two(), 
  duration: 15,
});


document.addEventListener("DOMContentLoaded", () => {
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

document.querySelectorAll(".faq__item_question").forEach((question) => {
  question.addEventListener("click", function () {
    const currentItem = this.parentElement;
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      document.querySelectorAll(".faq__item").forEach((item) => {
        item.classList.remove("active");
      });
      currentItem.classList.add("active");
    }
  });
});











const dollarInput = document.getElementById('dollar');
const blsInput = document.getElementById('bls');
const rate = 0.014; 

dollarInput.addEventListener('input', () => {
    const dollarValue = parseFloat(dollarInput.value);
    if (!isNaN(dollarValue)) {
        blsInput.value = (dollarValue / rate).toFixed(2);
    } else {
        blsInput.value = '';
    }
});

blsInput.addEventListener('input', () => {
    const blsValue = parseFloat(blsInput.value);
    if (!isNaN(blsValue)) {
        dollarInput.value = (blsValue * rate).toFixed(2);
    } else {
        dollarInput.value = '';
    }
});











  const containerOuter = document.querySelector('.container_outer');

  // Устанавливаем ширину контейнера равной ширине окна
  function setContainerWidth() {
    const screenWidth = window.innerWidth;
    containerOuter.style.width = `${screenWidth}px`;
  }

  // Запуск функции при загрузке страницы
  setContainerWidth();

  // Обновляем ширину контейнера при изменении размеров окна
  window.addEventListener('resize', setContainerWidth);
});
