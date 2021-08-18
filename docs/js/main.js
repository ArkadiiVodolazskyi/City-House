
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
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });

  AOS.refresh();

  // Lightbox params
  lightbox.option({
    'albumLabel': false,
    'disableScrolling': true,
    'fadeDuration': 100,
    'imageFadeDuration': 100,
    'showImageNumberLabel': false,
    'fitImagesInViewport': true,
    'resizeDuration': 200,
    'wrapAround': true
  });

  // Init hs1
  $(".toSlick[data-type='hs1']").slick({
    arrows: false,
    draggable: false,
    swipe: false,
    focusOnSelect: false,
    infinite: false,
    autoplay: false,
    dots: false,
    variableWidth: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: false
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false
        },
      },
    ],
  });
});

window.addEventListener("load", () => {

  // ------------ General ------------

  // Globals
  const body = document.body;
  const overlay = document.querySelector('#overlay');
  const header = document.getElementById('header_main');

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
    const headerLinks = document.querySelectorAll('#header_main .nav_link');
    const sectionTop = [];
    for (let i = 0; i < headerLinks.length; i++) {
      const section = document.querySelector(headerLinks[i].getAttribute('href'));

      // Fix strange bug with sections Yoffset
      if (i === 0) {
        sectionTop.push(section.offsetTop);
      } else {
        sectionTop.push(section.offsetTop - window.innerHeight);
      }
    }

    window.addEventListener('scroll', () => {
      let currentPos = window.pageYOffset;

      if (currentPos > 50) {
        header.classList.add('roll');
      } else {
        header.classList.remove('roll');
      }

      for (let i = 0; i < sectionTop.length; i++) {
        if (currentPos >= sectionTop[i] - 200) {
          headerLinks.forEach(link => {
            link.classList.remove('active');
          })
          headerLinks[i].classList.add('active');
        }
      }

    }, true);
  })();

  // Expand mobile
  (function() {
    const header_mobile = document.getElementById('header_mobile');
    const expand_menu = document.getElementById('expand_menu');
    expand_menu.addEventListener('click', () => {
      header.classList.toggle('active');
      header_mobile.classList.toggle('active');
      expand_menu.classList.toggle('active');
      body.classList.toggle('discroll');
    }, true);

    // Close menu on nav item click
    const mobile_navs = header_mobile.querySelectorAll('nav ul li');
    mobile_navs.forEach(item => {
      item.addEventListener('click', () => {
        header.classList.remove('active');
        header_mobile.classList.remove('active');
        expand_menu.classList.remove('active');
        body.classList.remove('discroll');
      }, true);
    });
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

  // Open fullscreen
  (function() {
    const markers = document.querySelectorAll('.plan_markers .marker');
    const fullscreen = document.getElementById('fullscreen-portfolio');
    const houses = fullscreen.querySelectorAll('.wrapper');
    const closeFullscreen = document.getElementById('close-fullscreen-portfolio');

    // Open house + first slider + fullscreen
    for (let i = 0; i < markers.length; i++) {
      markers[i].addEventListener('click', () => {
        const house_index = markers[i].getAttribute('data-marker');
        const firstSlider = houses[house_index].querySelector('.left .section_sliders');
        houses[house_index].classList.add('active');
        firstSlider.classList.add('active');
        fullscreen.classList.add('active');
        header.classList.add('active');
        body.classList.add('discroll');
      }, true);
    }

    closeFullscreen.addEventListener('click', () => {
      fullscreen.classList.remove('active');
      header.classList.remove('active');
      body.classList.remove('discroll');
      houses.forEach(house => {
        house.classList.remove('active');
        house.querySelectorAll('.left .section_sliders').forEach(slider => {
          slider.classList.remove('active');
        });
      });
    }, true);
  })();

  // Slider gallery enwide and change slides
  (function() {
    let slideIndex = 0;

    const gallerySlider = document.querySelectorAll('section.gallery .toSlick');
    const gallerySlides = document.querySelectorAll('section.gallery .slick-slide');

    const galleryPrev = document.querySelector('.slick-prev.hs1');
    const galleryNext = document.querySelector('.slick-next.hs1');

    $(gallerySlides).click(function(e) {
      $(gallerySlides).removeClass('slick-current');
      e.currentTarget.classList.add('slick-current');
      slideIndex = e.currentTarget.getAttribute('data-slick-index');
      if (slideIndex > 0) {
        galleryPrev.classList.remove('slick-disabled');
      } else {
        galleryPrev.classList.add('slick-disabled');
      }
      if (slideIndex < gallerySlides.length - 1) {
        galleryNext.classList.remove('slick-disabled');
      } else {
        galleryNext.classList.add('slick-disabled');
      }
      setTimeout(() => {
        $(gallerySlider).slick('slickGoTo', parseInt(e.currentTarget.getAttribute('data-slick-index')));
      }, 220);
    });

    // Init
    if (gallerySlides.length < 5) {
      galleryPrev.classList.add('slick-disabled');
    }

    galleryPrev.addEventListener('click', () => {
      slideIndex--;
      galleryNext.classList.remove('slick-disabled');
      const nextSlide = document.querySelector(`section.gallery .slick-slide[data-slick-index="${slideIndex}"]`);
      if (nextSlide) {
        $(gallerySlides).removeClass('slick-current');
        nextSlide.classList.add('slick-current');
        setTimeout(() => {
          $(gallerySlider).slick('slickGoTo', slideIndex);
        }, 220);
        galleryPrev.classList.remove('slick-disabled');

        // Check if the first slide
        if (slideIndex - 1 === 0) {
          galleryPrev.classList.add('slick-disabled');
        }
      }
    }, true);

    galleryNext.addEventListener('click', () => {
      slideIndex++;
      galleryPrev.classList.remove('slick-disabled');
      const nextSlide = document.querySelector(`section.gallery .slick-slide[data-slick-index="${slideIndex}"]`);
      if (nextSlide) {
        $(gallerySlides).removeClass('slick-current');
        nextSlide.classList.add('slick-current');
        setTimeout(() => {
          $(gallerySlider).slick('slickGoTo', slideIndex);
        }, 220);
        galleryNext.classList.remove('slick-disabled');

        // Check if the last slide
        if (slideIndex + 1 > gallerySlides.length - 1) {
          galleryNext.classList.add('slick-disabled');
        }
      }
    }, true);
  })();

  // .open-fullscreen-portfolio > #fullscreen-portfolio + goToSlide(data-slide)
  (function() {
    const openFullscreenPortfolio = document.querySelectorAll('.open-fullscreen-portfolio');
    const fullscreenPortfolio = document.getElementById('fullscreen-portfolio');
    const closeFullscreenPortfolio = document.getElementById('close-fullscreen-portfolio');
    for (let i = 0; i < openFullscreenPortfolio.length; i++) {
      openFullscreenPortfolio[i].addEventListener('click', (e) => {
        fullscreenPortfolio.classList.add('active');
      }, true);
    }
    closeFullscreenPortfolio.addEventListener('click', (e) => {
      fullscreenPortfolio.classList.remove('active');
    }, true);
  })();

  // open-request
  (function() {
    const modalRequest = document.getElementById('wpcf7-f6-o1');
    const openRequests = document.querySelectorAll('.open-request');
    const closeRequest = document.getElementById('close-request');

    if (openRequests.length) {
      openRequests.forEach(openRequest => {
        openRequest.addEventListener('click', () => {
          overlay.classList.add('active');
          modalRequest.classList.add('active');
          overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
              overlay.classList.remove('active');
              modalRequest.classList.remove('active');
            }
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

  // Popup change sections
  (function() {
    const houses = document.querySelectorAll('#fullscreen-portfolio .wrapper');
    const markers = document.querySelectorAll('.plan_markers .marker');

    for (let i = 0; i < houses.length; i++) {
      const sectionBtns = houses[i].querySelectorAll('.sections button');
      const sectionSliders = houses[i].querySelectorAll('.left .section_sliders');
      const sectionPros = houses[i].querySelectorAll('.right .pros');

      // Init sliders
      for (let j = 0; j < sectionSliders.length; j++) {
        const mini = sectionSliders[j].querySelector('.minigallery .toSlick');
        const miniPrev = sectionSliders[j].querySelector('.minigallery .slick-prev');
        const miniNext = sectionSliders[j].querySelector('.minigallery .slick-next');
        const full = sectionSliders[j].querySelector('.fullimage .toSlick');

        // Init hs2
        $(full).slick({
          arrows: false,
          draggable: false,
          focusOnSelect: false,
          infinite: false,
          autoplay: false,
          dots: false,
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                draggable: true,
                touchThreshold: 300,
                swipe: true
              },
            },
          ],
        });

        // Init hs3
        $(mini).slick({
          arrows: true,
          draggable: false,
          focusOnSelect: false,
          infinite: false,
          autoplay: false,
          dots: false,
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: $(miniPrev),
          nextArrow: $(miniNext),
          asNavFor: $(full),
          responsive: [
            {
              breakpoint: 1281,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
              },
            },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                draggable: true,
                touchThreshold: 300,
                swipe: true
              },
            },
          ],
        });

        // Click on slide
        const mini_slides = mini.querySelectorAll('.slide');
        $(mini_slides).click(function(e) {
          $(mini_slides).removeClass('slick-current');
          e.currentTarget.classList.add('slick-current');
          $(mini).slick('slickGoTo', parseInt(e.currentTarget.getAttribute('data-slick-index')));
          $(full).slick('slickGoTo', parseInt(e.currentTarget.getAttribute('data-slick-index')));
        });
      }

      // Chenge sections
      for (let j = 0; j < sectionBtns.length; j++) {
        sectionBtns[j].addEventListener('click', () => {
          if (!sectionBtns[j].classList.contains('active')) {
            for (let k = 0; k < sectionBtns.length; k++) {
              sectionBtns[k].classList.remove('active');
              sectionSliders[k].classList.remove('active');
              sectionPros[k].classList.remove('active');
            }
            sectionBtns[j].classList.add('active');
            sectionSliders[j].classList.add('active');
            sectionPros[j].classList.add('active');
          }
        }, true);
      }
    }

  })();
});

window.addEventListener('load', AOS.refresh);