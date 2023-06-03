// Change header
const header = document.querySelector(".header");
// function changeHeader() {
//   window.addEventListener("scroll", function () {
//     const scrollY = window.pageYOffset;
//     if (scrollY > header.clientHeight) {
//       header.classList.add("active");
//     } else {
//       header.classList.remove("active");
//     }
//   });
// }
// changeHeader();
// Back to top
backToTop = (e) => {
  const btt = document.querySelector(".footer__btt");
  const backToTop = document.querySelector(".backToTop");
  window.addEventListener("scroll", () => {
    let y = window.scrollY;
    if (y > document.body.offsetHeight / 2) {
      backToTop.classList.add("active");
    } else {
      backToTop.classList.remove("active");
    }
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
  btt.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
  });
};
backToTop();
// Select Languages
const lang = document.querySelector(".header__lang");
const langSelect = document.querySelectorAll(".header__lang-select a");
const langSpan = document.querySelector(
  ".header__lang .header__lang-check span"
);
handleLanguages = () => {
  lang.addEventListener("click", function (e) {
    e.stopPropagation();
    this.classList.toggle("active");
  });
  langSelect.forEach((item) => {
    item.addEventListener("click", function () {
      let langItem = this.textContent;
      let langNew = langSpan.textContent;
      langSpan.innerHTML = langItem;
      this.innerHTML = langNew;
    });
  });
  document.addEventListener("click", function () {
    lang.classList.remove("active");
  });
};
handleLanguages();
// Nav
navigattion = () => {
  const btn = document.querySelector(".btnmenu");
  const nav = document.querySelector(".nav");
  const menu = document.querySelectorAll(".nav a");
  menu.forEach(item);
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("active");
    function hideNav() {
      btn.classList.remove("active");
      nav.classList.remove("active");
    }
    window.addEventListener("resize", function () {
      let wWindow = this.window.innerWidth;
      if (wWindow > 992) {
        hideNav();
      }
    });
  });
};
navigattion();
// Section
const menu = document.querySelectorAll(".header .header__menu a");
const headerScroll = document.querySelector(".header").offsetHeight;
let sections = [];
function removeActive() {
  menu.forEach((element) => {
    element.classList.remove("active");
  });
}
menu.forEach((item) => {
  const href = item.getAttribute("href");
  const className = href.replace("#", "");
  const section = document.querySelector("." + className);
  sections.push(section);
  item.addEventListener("click", function (e) {
    e.stopPropagation();
    let positionSection = section.offsetTop;
    window.scrollTo({
      top: positionSection - headerScroll + 1,
    });
    removeActive();
    item.classList.add("active");
  });
});
window.addEventListener("scroll", function () {
  let positionScroll = window.pageYOffset;
  sections.forEach((section, index) => {
    if (
      positionScroll > section.offsetTop - header.offsetHeight &&
      positionScroll <
        section.offsetTop + section.offsetHeight + header.offsetHeight
    ) {
      removeActive();
      menu[index].classList.add("active");
    } else {
      menu[index].classList.remove("active");
    }
  });
});

// SectionMoblie
const menuMb = document.querySelectorAll(".nav a");
let sectionMb = [];

// Slider
// let listItem = document.querySelectorAll(".slider__item");
// let number = document.querySelector(".slider__bottom .slider__number span");
// let dots = document.querySelectorAll(".slider__dots-item");
// let currentSlider = 0;
// listItem.forEach((item, index) => {
//   if (item.classList.contains("active")) {
//     currentSlider = index;
//   }
// });
// function showNumber(index) {
//   number.innerHTML = index.toString().padStart(2, "0");
// }
// function goTo(index) {
//   listItem[currentSlider].classList.remove("active");
//   dots[currentSlider].classList.remove("active");
//   dots[index].classList.add("active");
//   listItem[index].classList.add("active");
//   currentSlider = index;
//   showNumber(currentSlider + 1);
// }
// document
//   .querySelector(".btn__trans.--after")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     if (currentSlider < listItem.length - 1) {
//       goTo(currentSlider + 1);
//     } else {
//       goTo(0);
//     }
//   });
// document
//   .querySelector(".btn__trans.--prev")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     if (currentSlider > 0) {
//       goTo(currentSlider - 1);
//     } else {
//       goTo(listItem.length - 1);
//     }
//   });
// dots.forEach((li, index) => {
//   li.addEventListener("click", function () {
//     goTo(index);
//   });
// });
// Popup Video
function handle() {
  let video = document.querySelectorAll(".circle"),
    popupVideo = document.querySelector(".popupvideo"),
    iframeVideo = document.querySelector(
      ".popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe"
    ),
    btnClose = document.querySelector(".popupvideo__inner-close");
  video.forEach((item) => {
    item.addEventListener("click", function () {
      popupVideo.classList.add("active");
      let getData = this.getAttribute("data-video-src");
      iframeVideo.setAttribute(
        "src",
        `https://www.youtube.com/embed/${getData}?autoplay=1`
      );
    });
  });
  function closeVideo() {
    popupVideo.classList.remove("active");
    iframeVideo.setAttribute("src", "");
  }
  btnClose.addEventListener("click", () => {
    closeVideo();
  });
  popupVideo.addEventListener("click", () => {
    closeVideo();
  });
}
handle();
// Progressbar
function progressbar() {
  progress = document.querySelector(".progressbar");
  window.addEventListener("scroll", () => {
    let Y = window.scrollY;
    let percent =
      (scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;
    progress.style.width = `${percent}%`;
  });
}
progressbar();
// Slider libs
function handleSlider() {
  var elem = document.querySelector(".slider__wrap");
  var flktySlider = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true,
    draggable: ">1",
    prevNextButtons: false,
    wrapAround: true,
    on: {
      ready: function () {
        dotsSlider();
      },
      change: function (index) {
        handleNumber(index);
      },
    },
  });
  // BTN
  let btnPrev = document.querySelector(".btn__trans.--after");
  let btnNext = document.querySelector(".btn__trans.--prev");
  btnPrev.addEventListener("click", function (e) {
    e.preventDefault();
    flktySlider.previous(true);
  });
  btnNext.addEventListener("click", function (e) {
    e.preventDefault();
    flktySlider.next(true);
  });
  // Dots
  function dotsSlider() {
    let dots = document.querySelector(".flickity-page-dots"),
      sliderBottom = document.querySelector(".slider__number");
    sliderBottom.appendChild(dots);
  }
  function handleNumber(index) {
    document.querySelector(".slider__number span").innerHTML = (index + 1)
      .toString()
      .padStart(2, "0");
  }
}
handleSlider();
// Gallery bot
function handleBottom() {
  var galleryBot = document.querySelector(".gallerybottom");
  var proBar = document.querySelector(".progressSpan");
  // dotBottom.appendChild(galleryBot);
  var flkty = new Flickity(galleryBot, {
    // options
    cellAlign: "left",
    contain: true,
    draggable: ">1",
    prevNextButtons: false,
    wrapAround: true,
    pageDots: false,
    freeScroll: true,
    lazyLoad: 3,
  });
  flkty.on("scroll", (progress) => {
    progress = Math.max(0, Math.min(1, progress));
    proBar.style.width = `${progress * 100}%`;
  });
}
handleBottom();
window.addEventListener("load", () => {
  progressbar();
  handleSlider();
  handleBottom();
  handle();
});

Fancybox.bind('[data-fancybox="image"]', {
  infinite: true,
  keyboard: {
    Escape: "close",
    Delete: "close",
    Backspace: "close",
    PageUp: "next",
    PageDown: "prev",
    ArrowUp: "next",
    ArrowDown: "prev",
    ArrowRight: "next",
    ArrowLeft: "prev",
  },
});
// Tabs
function handleTabs() {
  let btnTabs = document.querySelectorAll(".btn__news");
  let listCard = document.querySelectorAll(".news__card-wrap");
  btnTabs.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      btnTabs.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
      listCard.forEach((item) => {
        item.classList.remove("active");
      });
      let id = item.dataset.tab;
      document
        .querySelector(".news__card-wrap.list-" + id)
        .classList.add("active");
    });
  });
}
handleTabs();
function changeHeader() {
  window.addEventListener("scroll", function () {
    const scrollY = window.pageYOffset;
    if (scrollY > header.clientHeight) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
}
changeHeader();
