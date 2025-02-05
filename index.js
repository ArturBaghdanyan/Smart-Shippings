import { swiperData, sectionData, asideSwiperList } from "./data.js";

$(document).ready(function() {

    const swiper1 = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,  

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

$(document).ready(function() {
    $(".text").on("blur", function () {
        $(".text").css("color", "");
        $(".text2, .text3, .text4, .text5, .text6").css("color", "");
    });
    
    
    $("#desktop-nav a").on('click', function () {
        $("#desktop-nav a").css("color", "");
        $(this).css('color', 'blue');
    });
});

$(document).ready(function () {
    $(".bx-search").on('click', function () {
        $("#search-icon").toggle('slow');
        console.log('clicked');
    });

    $(".dropdown-toggle").hover(
        function () {
            $(".dropdown-menu").addClass("show");
        },
        function () {
            $(".dropdown-menu").removeClass("show");
        }
    );
    });
$(document).ready(function() {

    const swiperWrapper = $(".swiper-wrapper");

    function isInViewport(element) {
        var top = $(window).scrollTop();
        var offset = $(element).offset().top - 150;
        var height = $(element).outerHeight();
        return top >= offset && top <= offset + height;
    }

    // Function to handle scroll event
    function handleScroll() {
        $('.columns').each(function() {
            if (isInViewport(this)) {
                $(this).addClass('show-animate');
            } else {
                $(this).removeClass('show-animate');
            }
        });
    }

    // Initial check on page load
    handleScroll();

    // Event listener for scroll
    $(window).scroll(function() {
        handleScroll();
    });

    swiperData.forEach(item => {

        const slideHTML = `    
      <div class="swiper-slide columns" key=${item.id}
      style="background-image: url('${item.bgImage}')">
        <div class="column">
            <div class="lh-md d-flex flex-column swiper-image" 
                style="${item === swiperData[0] ? 'text-transform: uppercase;' : ''}">
                <span class="fs-1 md:fs-3" class="animate">${item.text1}</span>
                <span class="fs-2 fw-bold animate">${item.text2}</span>
                <span 
                style="padding-left: 5rem; ${item === swiperData[0] ? 'font-size: 64px;' : 'font-size: 18px'}"
                class="animate"
                >${item.text3}</span>
            </div>
            ${item === item.text4 ? `
              <div class="animate mt-3" style="font-size: 18px">
                  ${item.text4}
              </div>
            ` : ''}
            
            <button 
              class="w-auto p-3 bg-opacity-10 opacity-1 mt-4 border-0" 
              style="background: #2a2c32cc; border-radius: 3px">
                <a href="/" class="text-decoration-none text-white">${item.button}</a>
            </button>
        </div>
      </div>
      `;
        swiperWrapper.append(slideHTML);
})
});
$(document).ready(function() {

    const sectionWrapper = $('#section-wrapper');
    sectionData.forEach(item => {

        const listHTML = `
      <div class="section-piece">
        <div class="d-flex flex-column align-items-start w-100 h-100 gap-3" style="padding: 2rem">
        <img src="${item.icon}" alt="icon" style="width: 30px; height: 30px">
          <h2 style="font-weight: 600; font-size: 24px;">${item.title}</h2>
          <p style="font-size: 14px">${item.text}</p>
          <button class="border-0" style="background: none">
            <a href="#" class="text-decoration-none fw-bold text-#038ed3">
              ${item.button}
            </a>
          </button>
        </div>
      </div>
    `;
        sectionWrapper.append(listHTML);
    });
});

const asideWrapper = $('.aside-wrapper');
const asideSwiperListToShow = asideSwiperList.slice(0, 4);

asideSwiperListToShow.forEach(item => {
    
    let itemsHTML = '';
    item.info.forEach(i => {
         itemsHTML += `
            <div class="d-flex gap-3 w-100">
            <div style="width: 80px; height: 80px">
                <img src="${i.icon}" alt="icon" style="width: 100%; height: 100%;">
            </div>
            <div class="d-flex flex-column justify-content-center gap-1">
                <span>${i.title}</span>
                <p>${i.text}</p>
            </div>
            </div>
        `
    });
    const asideHTML = `
    <div key=${item.id} class="swiper-slide">
        ${(item <= 4) ? 
            `<div class="column">
            <h2 class="fw-bold">${item.header}</h2>
            <p style="font-size: 14px">${item.about}</p>
            <div>${itemsHTML}</div>
            </div>`
        : ''}
        
    </div>
    `;

asideWrapper.append(asideHTML);
});

$(document).ready(function() {
    $(".show-text").on('click', function() {
        $(this).closest('.accordion-item').find('.panel-text').toggle('slow');
        let img = $(this).find('img');


        img.attr('src', function(index, oldSrc) {
            return oldSrc.endsWith('plus.svg') ? '../assets/article/minus.svg' : '../assets/article/plus.svg';
        });

    });
    $('.panel-text').hide();
});