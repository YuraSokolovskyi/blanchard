// header burger
document.querySelectorAll(".header__burger__btn").forEach(function (item){
    item.addEventListener("click", function (){
        item.classList.add("header__burger__btn-active");
        document.querySelector(".header__menu").classList.add("header__burger_open-active");
        document.querySelectorAll(".header__search__btn").forEach(function (item){
            item.setAttribute("tabindex", "-1");
        })
    })
})

document.querySelector(".header__menu__close").addEventListener("click", function (){
    document.querySelectorAll(".header__burger__btn").forEach(function (item){
        item.classList.remove("header__burger__btn-active");
    })
    document.querySelector(".header__menu").classList.remove("header__burger_open-active");
    document.querySelectorAll(".header__search__btn").forEach(function (item){
        item.setAttribute("tabindex", "0");
    })
})


// header search
document.querySelectorAll(".header__search__btn").forEach(function (item){
    item.addEventListener("click", function (){
        document.querySelectorAll(".header__search__btn").forEach(function (item){
            item.classList.add("header__search__btn-active");
        })
        document.querySelector(".header__search__input").classList.add("header__search__input-active");
        document.querySelector(".header__search__input").setAttribute("tabindex", "0");
        document.querySelector(".header__search__close").classList.add("header__search__close-active");
        document.querySelector(".header__container__search_background").classList.add("header__container__search_background-open");
    })
})
document.querySelector(".header__search__close").addEventListener("click", function (){
    document.querySelectorAll(".header__search__btn").forEach(function (item){
        item.classList.remove("header__search__btn-active");
    })
    document.querySelector(".header__search__input").classList.remove("header__search__input-active");
    document.querySelector(".header__search__input").setAttribute("tabindex", "-1");
    document.querySelector(".header__search__close").classList.remove("header__search__close-active");
    document.querySelector(".header__container__search_background").classList.remove("header__container__search_background-open");
})


// choice hero_filters
// realism
new Choices(document.querySelector('#realism'), {
    searchEnabled: false,
    position: 'dawn',
    shouldSort: false,
    allowHTML: true
});

// impressionism
new Choices(document.querySelector('#impressionism'), {
    searchEnabled: false,
    position: 'dawn',
    shouldSort: false,
    allowHTML: true
});

// postimpressionism
new Choices(document.querySelector('#postimpressionism'), {
    searchEnabled: false,
    position: 'dawn',
    shouldSort: false,
    allowHTML: true
});

// avant-garde
new Choices(document.querySelector('#avant-garde'), {
    searchEnabled: false,
    position: 'dawn',
    shouldSort: false,
    allowHTML: true
});

// futurism
new Choices(document.querySelector('#futurism'), {
    searchEnabled: false,
    position: 'dawn',
    shouldSort: false,
    allowHTML: true
});


// hero_filters scrollbar

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.hero__filters__form .choices__list[role="listbox"]').forEach(function (item){
        new PerfectScrollbar(item);
    })
})


// hero background
document.addEventListener("DOMContentLoaded", function (){
    setTimeout(changeBackground, 4000);
})
let numberOfBack = 1;
function changeBackground(){
    document.querySelector(".hero").classList.remove("hero-background_" + String(numberOfBack));
    numberOfBack = numberOfBack + 1;
    if (numberOfBack > 3){
        numberOfBack = 1;
    }
    document.querySelector(".hero").classList.add("hero-background_" + String(numberOfBack));
    setTimeout(changeBackground, 4000);
}


// gallery slider

const gallery_swiper = new Swiper('.gallery__container__swiper', {
    loop: true,
    navigation: {
        nextEl: '.gallery__container__slider__navigation__btn-next',
        prevEl: '.gallery__container__slider__navigation__btn-prev',
    },
    pagination: {
        el: '.gallery_container__filters__slider__slider_navigation__progress',
        type: 'fraction'
    },
    breakpoints: {
        1700: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 38,
            slidesPerGroup: 2,
        }
    }
});
document.querySelector(".gallery__container__slider__navigation__btn-prev").setAttribute("aria-label", "Предыдущий слайд")
document.querySelector(".gallery__container__slider__navigation__btn-next").setAttribute("aria-label", "Следующий слайд")


// gallery choices

const element = document.querySelector('#gallery_type_of_art');
const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    position: 'dawn',
});


// catalog accordion

$(".catalog__contain__accordion__list").accordion({
    heightStyle: 'content',
    collapsible: true
});


// catalog tabs

document.querySelectorAll(".catalog__contain__accordion__list__item__list__item__btn").forEach(function (item){
    item.addEventListener("click", function (i){
        const path = i.currentTarget.dataset.path;
        document.querySelectorAll('.catalog__contain__painter').forEach(function (k){
            k.classList.remove('catalog__contain__painter-active');
        })
        const target = document.querySelector(`[data-target="${path}"]`)
        if (target){
            target.classList.add("catalog__contain__painter-active");
        }else{
            document.querySelector(".catalog__contain__painter-empty").classList.add("catalog__contain__painter-active");
        }
        document.querySelectorAll(".catalog__contain__accordion__list__item__list__item__btn").forEach(function (p){
            p.classList.remove("catalog__contain__accordion__list__item__list__item__btn_active");
        })
        i.currentTarget.classList.add("catalog__contain__accordion__list__item__list__item__btn_active");
    })
})


// actions swiper

const actions_swiper = new Swiper('.actions__container__swiper', {
    loop: false,

    breakpoints: {
        1919: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
            navigation: {
                nextEl: '.actions__button_next',
                prevEl: '.actions__button_prev',
            },
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
            navigation: {
                nextEl: '.actions__button_next',
                prevEl: '.actions__button_prev',
            },
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 27,
            slidesPerGroup: 3,
            pagination: {
                clickable: true,
                el: '.actions__swiper-pagination',
                type: 'bullets',
                bulletClass: 'actions__swiper-pagination__bullet',
                bulletActiveClass: 'actions__swiper-pagination__bullet-active'
            }
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
            pagination: {
                clickable: true,
                el: '.actions__swiper-pagination',
                type: 'bullets',
                bulletClass: 'actions__swiper-pagination__bullet',
                bulletActiveClass: 'actions__swiper-pagination__bullet-active'
            }
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 17,
            slidesPerGroup: 1,
            pagination: {
                clickable: true,
                el: '.actions__swiper-pagination',
                type: 'bullets',
                bulletClass: 'actions__swiper-pagination__bullet',
                bulletActiveClass: 'actions__swiper-pagination__bullet-active'
            }
        }
    }
});
document.querySelector(".actions__button_prev").setAttribute("aria-label", "Предыдущий слайд")
document.querySelector(".actions__button_next").setAttribute("aria-label", "Следующий слайд")


// projects tooltip
tippy('#tooltip_1', {
    content: "Пример современных тенденций -\nсовременная методология разработки",
    theme: 'purple',
    maxWidth: 264,
})

tippy('#tooltip_2', {
    content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
    theme: 'purple',
    maxWidth: 264,
})

tippy('#tooltip_3', {
    content: "В стремлении повысить качество",
    theme: 'purple',
    maxWidth: 264,
})


// projects slider

new Swiper('.projects__swiper', {
    loop: true,
    navigation: {
        nextEl: '.projects__swiper_container__btn_next',
        prevEl: '.projects__swiper_container__btn_prev',
    },
    breakpoints: {
        1700: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 34,
            slidesPerGroup: 1,
            width: 194
        }
    }
});
document.querySelector(".projects__swiper_container__btn_prev").setAttribute("aria-label", "Предыдущий слайд")
document.querySelector(".projects__swiper_container__btn_next").setAttribute("aria-label", "Следующий слайд")


// form validation
var im = new Inputmask("+38 (099) 999-99-99");
im.mask(document.querySelector("#contact_us_tel"));

var contact_us_form = new JustValidate('.contact_us__form')
    .addField('#contact_us_name', [
        {
            rule: 'minLength',
            value: 2,
            errorMessage: 'Имя слишком короткое',
        },
        {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'Имя слишком длинное',
        },
        {
            validator: function (item){
                return /^[a-zA-Z() ]+$/.test(item);
            },
            errorMessage: 'Неверный формат',
        },
        {
            rule: 'required',
            errorMessage: 'Поле обязательное',
        }
    ])
    .addField('#contact_us_tel', [
        {
            rule: 'required',
            errorMessage: 'Поле обязательное',
        },
        {
            validator: function (item){
                for (var i = 0; i < item.length; i++){
                    if (item[i] === "_") return false;
                }
                return true;
            },
            errorMessage: 'Неверный формат',
        },
        {
            rule: 'maxLength',
            value: 20,
            errorMessage: 'Неверный формат',
        },
    ]);

function mail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "blanchardform@gmail.com",
        Password: "2095971B76EE02CD51119E8E05DD15F1C0EF",
        To: 'blanchardsubmissionform@gmail.com',
        From: "blanchardsubmissionform@gmail.com",
        Subject: "blanchard form",
        Body: "Имя: " + document.getElementById("contact_us_name").value
            + "<br>"
            + "Телефон: " + document.getElementById("contact_us_tel").value
    })
}
document.querySelector(".contact_us__form").onsubmit = function (){
    if (contact_us_form.isValid){
        mail();
        contact_us_form.refresh();
        document.querySelector("#contact_us_name").value = "";
        document.querySelector("#contact_us_tel").value = "";
    }
}
