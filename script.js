document.addEventListener("DOMContentLoaded", () => {
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
const rateElement = document.getElementById('rate');

function getRate() {
    return parseFloat(rateElement.textContent);
}

dollarInput.addEventListener('input', () => {
    const dollarValue = parseFloat(dollarInput.value);
    const rate = getRate();
    if (!isNaN(dollarValue)) {
        blsInput.value = (dollarValue / rate).toFixed(2);
    } else {
        blsInput.value = '';
    }
});

blsInput.addEventListener('input', () => {
    const blsValue = parseFloat(blsInput.value);
    const rate = getRate();
    if (!isNaN(blsValue)) {
        dollarInput.value = (blsValue * rate).toFixed(2);
    } else {
        dollarInput.value = '';
    }
});


const headerNavItemOne = document.querySelector('.header__nav_item_one');
const modal = document.querySelector('.modal');
const headerLogoText = document.querySelector('.header_logo_text');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

headerNavItemOne.addEventListener('click', () => {
    headerLogoText.classList.toggle('active');
    modal.classList.toggle('active');
    headerNavItemOne.classList.toggle('active')

    menuIcon.style.display = menuIcon.style.display === 'none' ? 'block' : 'none';
    closeIcon.style.display = closeIcon.style.display === 'none' ? 'block' : 'none';
});





  const containerOuter = document.querySelector('.container_outer');
const header = document.querySelector('.header')
const modal2 = document.querySelector('.modal')
  // Устанавливаем ширину контейнера равной ширине окна
  function setContainerWidth() {
    const screenWidth = window.innerWidth;
    containerOuter.style.width = `${screenWidth}px`;
    // header.style.width =  `${screenWidth}px`
    modal2.style.width = `${screenWidth}px`
  }

  // Запуск функции при загрузке страницы
  setContainerWidth();

  // Обновляем ширину контейнера при изменении размеров окна
  window.addEventListener('resize', setContainerWidth);





function scaleContent() {
  const content = document.querySelector('.container_outer');
  const screenWidth = window.innerWidth;

  if (screenWidth > 1200) {
    const scale = screenWidth / 1200; // Вычисляем масштаб
    content.style.transform = `scale(${scale})`;
  } else {
    content.style.transform = 'scale(1)'; // Отключаем масштабирование
  }
}

// Вызываем при загрузке страницы
scaleContent();

// Вызываем при изменении размера окна
window.addEventListener('resize', scaleContent);






const tokenomicsItems = document.querySelectorAll('.tokenomics_item_number');
const tokenomics_item_description = document.querySelectorAll('.tokenomics_item_description')
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animateNumber(entry.target, 500); // Укажите новое значение для анимации
          observer.unobserve(entry.target); // Отменяем наблюдение после анимации
      }
  });
});

tokenomicsItems.forEach(item => {
  observer.observe(item);
});

tokenomics_item_description.forEach(item => {
  observer.observe(item);
});




function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = {
  root: null, 
  rootMargin: "0px", 
};

let observer2 = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer2.observe(elm);
}


window.addEventListener("scroll", () => {
  elements.forEach((elm) => {
    const rect = elm.getBoundingClientRect();
    if (rect.top < window.innerHeight - 500) {
     
      elm.classList.add("element-show");
    }
  });
});
});