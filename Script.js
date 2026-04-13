// navbar for mobile  
const lricHamburger = document.getElementById("lricNav-hamburgerBtn");
const lricMobilePanel = document.getElementById("lricNav-mobilePanel");
const lricCloseBtn = document.getElementById("lricNav-closeBtn");

if (lricHamburger && lricMobilePanel && lricCloseBtn) {

  lricHamburger.addEventListener("click", () => {
    lricMobilePanel.classList.add("lricNav-active");
    lricHamburger.classList.add("lricNav-active");
    document.body.classList.add("lricNav-noScroll");
  });

  lricCloseBtn.addEventListener("click", () => {
    lricMobilePanel.classList.remove("lricNav-active");
    lricHamburger.classList.remove("lricNav-active");
    document.body.classList.remove("lricNav-noScroll");
  });

}

// sub menu code 
const openExchange = document.getElementById("openExchange");
const exchangePopup = document.getElementById("exchangePopup");
const closeExchange = document.getElementById("closeExchange");

if (openExchange && exchangePopup && closeExchange) {

  openExchange.addEventListener("click", function (e) {
    e.preventDefault();
    lricMobilePanel.classList.remove("lricNav-active");
    exchangePopup.classList.add("active");
  });

  closeExchange.addEventListener("click", function () {
    exchangePopup.classList.remove("active");
    lricMobilePanel.classList.add("lricNav-active");
  });

}

// sub menu 2 
// Associated popup
const openAssociated = document.getElementById("openAssociated");
const associatedPopup = document.getElementById("associatedPopup");
const closeAssociated = document.getElementById("closeAssociated");

if (openAssociated && associatedPopup && closeAssociated) {

  openAssociated.addEventListener("click", function (e) {
    e.preventDefault();
    lricMobilePanel.classList.remove("lricNav-active");
    associatedPopup.classList.add("active");
  });

  closeAssociated.addEventListener("click", function () {
    associatedPopup.classList.remove("active");
    lricMobilePanel.classList.add("lricNav-active");
  });

}


// Second section code 
function lricRevealOnScroll() {
  const elements = document.querySelectorAll(
    ".lric-reveal-left, .lric-reveal-right, .lric-reveal-up"
  );

  elements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("lric-active");
    }
  });
}

window.addEventListener("scroll", lricRevealOnScroll);
window.addEventListener("load", lricRevealOnScroll);

// Thrid section - 3 code

const track = document.getElementById("sliderTrack");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const wrapper = document.querySelector(".slider-wrapper");

const pages = document.querySelectorAll(".slider-page");

let currentIndex = 0;
let isAnimating = false;
let autoSlideInterval;

// Update slide
function updateSlider() {
  isAnimating = true;

  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  setTimeout(() => {
    isAnimating = false;
  }, 700); // match CSS transition time
}

// Next Slide
function nextSlide() {
  if (isAnimating) return;

  currentIndex++;
  if (currentIndex >= pages.length) {
    currentIndex = 0; // loop back
  }

  updateSlider();
}

// Previous Slide
function prevSlide() {
  if (isAnimating) return;

  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = pages.length - 1;
  }

  updateSlider();
}

// Auto Slide
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 2000); // 4 seconds (balanced speed)
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Events
if(nextBtn && prevBtn){
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
}

// Pause on hover (premium UX)
if(wrapper){
  wrapper.addEventListener("mouseenter", stopAutoSlide);
  wrapper.addEventListener("mouseleave", startAutoSlide);
}

// Start on load
startAutoSlide();


// SECTION-4

const sec4Rows = document.querySelectorAll('.sec4-row');

if (sec4Rows.length > 0) {

  const sec4Observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('sec4-show');
      }
    });
  }, { threshold: 0.2 });

  sec4Rows.forEach(row => {
    sec4Observer.observe(row);
  });

}


// SECTION 4 Read More Button

document.querySelectorAll(".sec4-read-btn").forEach(button => {

  button.addEventListener("click", function () {

    const textBlock = this.previousElementSibling;

    textBlock.classList.toggle("sec4-active");

    if (textBlock.classList.contains("sec4-active")) {
      this.textContent = "Read Less";
    } else {
      this.textContent = "Read More";
    }

  });

});

/* section 5 */

const sec5Counters = document.querySelectorAll('.sec5-stat-number');
let sec5Started = false;

function sec5StartCounter() {

  if (sec5Started) return;
  sec5Started = true;

  sec5Counters.forEach(counter => {

    const target = +counter.getAttribute('data-target');
    let count = 0;

    const duration = 2000;
    const increment = target / (duration / 16);

    function updateCounter() {

      count += increment;

      if (count < target) {
        counter.innerText = Math.floor(count);
        requestAnimationFrame(updateCounter);
      }
      else {

        if (target >= 1000) {
          counter.innerText = (target / 1000) + "k +";
        }
        else {
          counter.innerText = target + " +";
        }

      }

    }

    updateCounter();

  });

}


(function () {

  const sec5ServiceObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("sec5-sc-show");
        sec5ServiceObserver.unobserve(entry.target);
      }

    });

  }, { threshold: 0.2 });

  document.querySelectorAll(".sec5-sc-left, .sec5-sc-right, .sec5-sc-top, .sec5-sc-bottom")
    .forEach(el => sec5ServiceObserver.observe(el));

})();


const sec5Observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      sec5StartCounter();
    }

  });

}, { threshold: 0.5 });

const sec5Stats = document.querySelector('.sec5-stats');

if (sec5Stats) {
  sec5Observer.observe(sec5Stats);
}

// section 6 here 
(function () {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("ts-active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const tsElements = document.querySelectorAll(".ts-left, .ts-top, .ts-bottom");

if(tsElements.length > 0){
  tsElements.forEach(el => observer.observe(el));
}

})();

// section 3 link add 
function goToPage(page) {
  window.location.href = page;
}