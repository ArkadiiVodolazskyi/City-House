
// Use GMaps
function initMap() {
  const coordinates = {
    lat: 46.404120327360655,
    lng: 30.731437746037800
  };
  const map = new google.maps.Map(document.querySelector("#map"), {
    center: coordinates,
    zoom: 17,
    disableDefaultUI: false,
    scrollwheel: false,
  });
  const marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    title: "Delicate Car Wash"
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Init AOS
  AOS.init({
    // Global settings:
    disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 90, // was 120 - offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });

  AOS.refresh();

  // Slicks options
  slickOptions = {
    'hs1': {
      arrows: true,
      draggable: false,
      touchThreshold: 300,
      focusOnSelect: false,
      infinite: false,
      autoplay: false,
      dots: false,
      variableWidth: false,
      vertical: false,
      verticalSwiping: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(".slick_nav.hs1 .slick-prev"),
      nextArrow: $(".slick_nav.hs1  .slick-next")
    },
    'hs2': {
      arrows: true,
      draggable: false,
      touchThreshold: 300,
      focusOnSelect: false,
      infinite: false,
      autoplay: false,
      dots: false,
      variableWidth: true,
      vertical: false,
      verticalSwiping: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: $(".slick_nav.hs2 .slick-prev"),
      nextArrow: $(".slick_nav.hs2  .slick-next"),
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
          },
        },
      ],
    },
    'hs3': {
      arrows: false,
      draggable: false,
      swipe: false,
      swipeToSlide: false,
      touchMove: false,
      focusOnSelect: false,
      infinite: false,
      autoplay: false,
      dots: true,
      variableWidth: true,
      vertical: false,
      verticalSwiping: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: $(".slick_nav.hs3 "),
      customPaging: function(slider, i) {
        return '<button class="change_tab">' + $(slider.$slides[i]).attr('data-title') + '</button>';
      },
      responsive: [
        {
          breakpoint: 481,
          settings: {
            dots: true,
            draggable: false
          },
        },
      ],
    },
    'hs4': {
      arrows: true,
      draggable: false,
      touchThreshold: 300,
      focusOnSelect: false,
      infinite: false,
      autoplay: false,
      dots: false,
      variableWidth: true,
      vertical: false,
      verticalSwiping: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: $(".slick-prev.hs4"),
      nextArrow: $(".slick-next.hs4"),
      initialSlide: 1
    },
    'hs5': {
      arrows: true,
      draggable: false,
      touchThreshold: 300,
      focusOnSelect: false,
      infinite: false,
      autoplay: false,
      dots: false,
      variableWidth: false,
      vertical: false,
      verticalSwiping: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(".slick-prev.hs5"),
      nextArrow: $(".slick-next.hs5"),
      responsive: [
        {
          breakpoint: 481,
          settings: {
            draggable: true,
            touchThreshold: 300
          },
        },
      ],
    },
    'hs6': {
      arrows: true,
      draggable: false,
      swipe: false,
      touchMove: false,
      focusOnSelect: false,
      infinite: false,
      autoplay: false,
      dots: false,
      variableWidth: false,
      vertical: false,
      verticalSwiping: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(".slick-prev.hs6"),
      nextArrow: $(".slick-next.hs6"),
      responsive: [
        {
          breakpoint: 481,
          settings: {
            draggable: false,
            swipe: false,
            touchMove: false,
          },
        },
      ],
    },
    'hs7': {
      arrows: true,
      draggable: false,
      touchThreshold: 300,
      focusOnSelect: false,
      infinite: false,
      autoplay: false,
      dots: false,
      variableWidth: true,
      vertical: false,
      verticalSwiping: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $(".slick-prev.hs7"),
      nextArrow: $(".slick-next.hs7"),
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
          },
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            draggable: true,
            touchThreshold: 300,
          },
        },
      ],
    },
    'vs1': {
      arrows: true,
      draggable: true,
      touchThreshold: 300,
      focusOnSelect: false,
      infinite: false,
      autoplay: false,
      dots: false,
      variableWidth: false,
      adaptiveHeight: true,
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: $(".slick-prev.vs1"),
      nextArrow: $(".slick-next.vs1"),
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            centerMode: false,
            vertical: false,
            verticalSwiping: false,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            centerMode: false,
            vertical: false,
            verticalSwiping: false,
          },
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            centerMode: false,
            vertical: false,
            verticalSwiping: false,
          },
        },
      ],
    },
  }

  // Init desktops
  const toSlicks = document.querySelectorAll('.toSlick[data-type]:not([data-mobile=true])');
  if (toSlicks.length) {
    toSlicks.forEach(toSlick => {
      const type = toSlick.getAttribute('data-type');
      $(toSlick).slick(slickOptions[type]);
    });
  }

  // Init mobiles
  const toSlicksMob = document.querySelectorAll('.toSlick[data-mobile=true]');
  if (toSlicksMob.length) {
    toSlicksMob.forEach(toSlick => {
      if (window.innerWidth <= toSlick.getAttribute('data-screen')) {
        const type = toSlick.getAttribute('data-type');
        $(toSlick).slick(slickOptions[type]);
      }
    });
  }
});

window.addEventListener("load", () => {

  // ------------ General ------------

  // Globals
  const body = document.body;
  const overlay = document.querySelector('#overlay');
  const overlay_mobile = document.querySelector('#overlay_mobile');
  const header = document.querySelector('header');

  // Loaded animations
  const loading = document.querySelectorAll('.loading');
  loading.forEach(el => {
    el.classList.add('loaded');
  });

  // Masked Inputs
  (function() {
    const inputTels = document.querySelectorAll('input[type=tel]');

    if (inputTels.length) {

      $(inputTels).click(function() {
        $(this).setCursorPosition(5);
      }).mask(
        "+38 (999) 999-9999",
        {autoclear: false}
      );

      // Fix masked input cursor
      $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
          $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
          var range = $(this).get(0).createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
      };
    }
  })();

  // Smooth anchors
  (function() {
    $("a[href^='#']").on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $(this.hash).offset().top - 150
        }, 400, function(){
      });
    });
  })();

  // Header roll
  (function() {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50) {
        header.classList.add('roll');
      } else {
        header.classList.remove('roll');
      }
    }, true);
  })();

  // Expand mobile
  (function() {
    const header_main = document.getElementById('header_main');
    const header_mobile = document.getElementById('header_mobile');
    const expand_menu = document.getElementById('expand_menu');
    expand_menu.addEventListener('click', () => {
      header_main.classList.toggle('active');
      header_mobile.classList.toggle('active');
      expand_menu.classList.toggle('active');
    }, true);
  })();

  // Toggle pros
  (function() {
    const prosImages = document.querySelectorAll('section.pros .left img');
    const prosItems = document.querySelectorAll('section.pros .right li');
    for (let i = 0; i < prosItems.length; i++) {
      prosItems[i].addEventListener('mouseover', (e) => {
        for (let j = 0; j < prosItems.length; j++) {
          prosItems[j].classList.remove('active');
          prosImages[j].classList.remove('active');
        }
        prosItems[i].classList.add('active');
        prosImages[i].classList.add('active');
      }, true);
    }
  })();

  // fullscreen-portfolio - gallery : .right .image -> change .left .image
  (function() {
    const galleries = document.querySelectorAll('#fullscreen-portfolio .gallery');
    for (let i = 0; i < galleries.length; i++) {
      const miniatures = galleries[i].querySelectorAll('.right .image');
      const fullImgs = galleries[i].querySelectorAll('.left .image');
      for (let j = 0; j < miniatures.length; j++) {
        miniatures[j].addEventListener('click', () => {
          for (let k = 0; k < miniatures.length; k++) {
            miniatures[k].classList.remove('active');
            fullImgs[k].classList.remove('active');
          }
          fullImgs[j].classList.add('active');
          miniatures[j].classList.add('active');
        }, true);
      }
    }
  })();

  // .open-fullscreen-portfolio > #fullscreen-portfolio + goToSlide(data-slide)
  (function() {
    const openFullscreenPortfolio = document.querySelectorAll('.open-fullscreen-portfolio');
    const fullscreenPortfolio = document.getElementById('fullscreen-portfolio');
    const closeFullscreenPortfolio = document.getElementById('close-fullscreen-portfolio');
    for (let i = 0; i < openFullscreenPortfolio.length; i++) {
      openFullscreenPortfolio[i].addEventListener('click', (e) => {
        const slideIndex = e.target.getAttribute('data-slide');
        $('.toSlick[data-type="hs6"]').slick('slickGoTo', slideIndex);
        fullscreenPortfolio.classList.add('active');
      }, true);
    }
    closeFullscreenPortfolio.addEventListener('click', (e) => {
      fullscreenPortfolio.classList.remove('active');
    }, true);
  })();

  // open-request
  (function() {
    const modalRequest = document.getElementById('modal-request');
    const openRequests = document.querySelectorAll('.open-request');
    const closeRequest = document.getElementById('close-request');

    if (openRequests.length) {
      openRequests.forEach(openRequest => {
        openRequest.addEventListener('click', () => {
          overlay.classList.add('active');
          modalRequest.classList.add('active');
          overlay.addEventListener('click', () => {
            overlay.classList.remove('active');
            modalRequest.classList.remove('active');
          }, true);
        }, true);
      });
    }
    if (closeRequest) {
      closeRequest.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.remove('active');
        modalRequest.classList.remove('active');
      }, true);
    }
  })();

  AOS.refresh();
});

window.addEventListener('load', AOS.refresh);