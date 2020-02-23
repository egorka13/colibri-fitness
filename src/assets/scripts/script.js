// Script for c-block-1 -->

let location_popup = document.getElementById('location-popup'),
    phone_popup = document.getElementById('phone-popup'),
    c_block_1_bg_layer = document.getElementById('c-block-1-bg_layer'),
    location_icon = document.getElementById('location-icon'),
    phone_icon = document.getElementById('phone-icon'),
    whatsapp_icon = document.getElementById('whatsapp-icon'),
    c_block_1_button = document.getElementById('c-block-1-button'),
    c_block_promotion = document.getElementById('c-block-promotion'),
    c_block_1_popup = document.getElementById('c-block-1-popup'),
    c_block_1_close_button = document.getElementById('c-block-1-close');

let burger_icon = document.getElementById('burger_icon');
let burger__menu = document.getElementById('burger__menu');
let nav_items = document.getElementsByClassName('c-block-burger__menu-item');

// c_block_promotion.addEventListener("click", function () {
//     c_block_1_popup.style.display = "flex";
//     c_block_1_bg_layer.style.display = "block";
// }, passive = true);

function customSetInterval() {
    return setInterval(() => {
        if (phone_icon.style.display === "none" && whatsapp_icon.style.display === "block") {
            whatsapp_icon.style.display = "none";
            phone_icon.style.display = "block";
            setTimeout(() => {
                phone_icon.style.transform = 'rotateY(360deg)';
                phone_icon.style.transition = 'transform 1s ease';
            }, 100);
        } else if (phone_icon.style.display === "block" && whatsapp_icon.style.display === "none") {
            phone_icon.style.display = "none";
            whatsapp_icon.style.display = "block";
            setTimeout(() => {
                whatsapp_icon.style.transform = 'rotateY(360deg)';
                whatsapp_icon.style.transition = 'transform 1s ease';
            }, 100);
        }

        phone_icon.style.transform = null;
        phone_icon.style.transition = null;
        whatsapp_icon.style.transform = null;
        whatsapp_icon.style.transition = null;
    }, 5000);
}

if ($(window).width() < 450) {
    phone_icon.style.display = "block";
} else {
    phone_icon.style.display = "none";
}

window.addEventListener("resize", function () {
    if ($(window).width() < 450) {
        phone_icon.style.display = "block";
        whatsapp_icon.style.display = "none";
    } else {
        phone_icon.style.display = "none";
        whatsapp_icon.style.display = "none";
    }
})

var refreshIntervalId = customSetInterval();

location_icon.addEventListener("click", function () {
    location_popup.style.display = "flex";
    c_block_1_bg_layer.style.display = "block";
    clearInterval(refreshIntervalId);
}, passive = true);

phone_icon.addEventListener("click", function () {
    phone_popup.style.display = "flex";
    c_block_1_bg_layer.style.display = "block";
    clearInterval(refreshIntervalId);
}, passive = true);

c_block_1_button.addEventListener("click", function () {
    c_block_1_popup.style.display = "flex";
    c_block_1_bg_layer.style.display = "block";
    clearInterval(refreshIntervalId);
}, passive = true);

c_block_1_close_button.onclick = function () {
    c_block_1_popup.style.display = "none";
    c_block_1_bg_layer.style.display = "none";
    refreshIntervalId = customSetInterval();
};

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        c_block_1_popup.style.display = "none";
        c_block_1_bg_layer.style.display = "none";
        refreshIntervalId = customSetInterval();
    }
}, passive = true);

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        location_popup.style.display = "none";
        phone_popup.style.display = "none";
        c_block_1_bg_layer.style.display = "none";
        refreshIntervalId = customSetInterval();
    }
}, passive = true);

document.addEventListener("click", function () {
    if (location_popup.style.display === "flex" || phone_popup.style.display === "flex") {
        location_popup.style.display = "none";
        phone_popup.style.display = "none";
        c_block_1_bg_layer.style.display = "none";
        refreshIntervalId = customSetInterval();
    }
}, passive = true);

// Обработчики события показа иконки с меню
burger__menu.style.display = "none";

burger_icon.addEventListener("click", function () {
    if (burger__menu.style.display === "none") {
        burger__menu.style.display = "flex";
        clearInterval(refreshIntervalId);
    } else {
        burger__menu.style.display = "none";
        refreshIntervalId = customSetInterval();
    }
}, passive = true);

for (let i = 0; i < nav_items.length; i++) {
    nav_items[i].addEventListener("click", function () {
        burger__menu.style.display = "none";
        burger_icon.checked = false;
        refreshIntervalId = customSetInterval();
    }, passive = true);
}

$(document).ready(function () {
    $("#burger__menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});


// Script for c-block-5 -->

jQuery(document).ready(function ($) {
    let slideCount = $('#c-block-5-slider ul li').length;
    let slideWidth = $('#c-block-5-slider ul li').width();
    let slideHeight = $('#c-block-5-slider ul li').height();
    let sliderUlWidth = slideCount * slideWidth;

    let prichina01 = document.getElementById("prichina01");
    let prichina02 = document.getElementById("prichina02");
    let prichina03 = document.getElementById("prichina03");

    prichina01.style.display = "block";

    let prichina01_text = document.getElementById("prichina01_text");
    let prichina02_text = document.getElementById("prichina02_text");
    let prichina03_text = document.getElementById("prichina03_text");

    prichina01_text.style.display = "block";

    $('#c-block-5-slider').css({ width: slideWidth, height: slideHeight });

    $('#c-block-5-slider ul').css({ width: sliderUlWidth, marginLeft: -slideWidth });

    $('#c-block-5-slider ul li:last-child').prependTo('#c-block-5-slider ul');

    function moveLeft() {
        $('#c-block-5-slider ul').animate({
            left: +slideWidth
        }, 200, function () {
            $('#c-block-5-slider ul li:last-child').prependTo('#c-block-5-slider ul');
            $('#c-block-5-slider ul').css('left', '');
        });
    }

    function moveRight() {
        $('#c-block-5-slider ul').animate({
            left: -slideWidth
        }, 200, function () {
            $('#c-block-5-slider ul li:first-child').appendTo('#c-block-5-slider ul');
            $('#c-block-5-slider ul').css('left', '');
        });
    }

    $('.c-block-5-control_prev').click(function () {
        moveLeft();
        if (prichina01.style.display === "block" && prichina01_text.style.display === "block") {
            prichina01.style.display = "none";
            prichina03.style.display = "block";

            prichina01_text.style.display = "none";
            prichina03_text.style.display = "block";
        } else if (prichina02.style.display === "block" && prichina02_text.style.display === "block") {
            prichina02.style.display = "none";
            prichina01.style.display = "block";

            prichina02_text.style.display = "none";
            prichina01_text.style.display = "block";
        } else {
            prichina03.style.display = "none";
            prichina02.style.display = "block";

            prichina03_text.style.display = "none";
            prichina02_text.style.display = "block";
        }
    });

    $('.c-block-5-control_next').click(function () {
        moveRight();
        if (prichina01.style.display === "block" && prichina01_text.style.display === "block") {
            prichina01.style.display = "none";
            prichina02.style.display = "block";

            prichina01_text.style.display = "none";
            prichina02_text.style.display = "block";
        } else if (prichina02.style.display === "block" && prichina02_text.style.display === "block") {
            prichina02.style.display = "none";
            prichina03.style.display = "block";

            prichina02_text.style.display = "none";
            prichina03_text.style.display = "block";
        } else {
            prichina03.style.display = "none";
            prichina01.style.display = "block";

            prichina03_text.style.display = "none";
            prichina01_text.style.display = "block";
        }
    });

});


// Script for c-block-5-mobile -->

jQuery(document).ready(function ($) {
    let prichina01_mobile = document.getElementById("prichina1-mobile");
    let prichina02_mobile = document.getElementById("prichina2-mobile");
    let prichina03_mobile = document.getElementById("prichina3-mobile");

    prichina01_mobile.style.display = "block";

    let prichina01_text_mobile = document.getElementById("prichina01_text_mobile");
    let prichina02_text_mobile = document.getElementById("prichina02_text_mobile");
    let prichina03_text_mobile = document.getElementById("prichina03_text_mobile");

    prichina01_text_mobile.style.display = "block";

    let prichina01_img_mobile = document.getElementById("prichina1-img-mobile");
    let prichina02_img_mobile = document.getElementById("prichina2-img-mobile");
    let prichina03_img_mobile = document.getElementById("prichina3-img-mobile");

    prichina01_img_mobile.style.display = "block";

    function moveLeft() {
        if (prichina01_mobile.style.display === "block"
            && prichina01_img_mobile.style.display === "block"
            && prichina01_text_mobile.style.display === "block") {
            prichina01_mobile.style.display = "none";
            prichina03_mobile.style.display = "block";

            prichina01_img_mobile.style.display = "none";
            prichina03_img_mobile.style.display = "block";

            prichina01_text_mobile.style.display = "none";
            prichina03_text_mobile.style.display = "block";
        } else if (prichina02_mobile.style.display === "block"
            && prichina02_img_mobile.style.display === "block"
            && prichina02_text_mobile.style.display === "block") {
            prichina02_mobile.style.display = "none";
            prichina01_mobile.style.display = "block";

            prichina02_img_mobile.style.display = "none";
            prichina01_img_mobile.style.display = "block";

            prichina02_text_mobile.style.display = "none";
            prichina01_text_mobile.style.display = "block";
        } else {
            prichina03_mobile.style.display = "none";
            prichina02_mobile.style.display = "block";

            prichina03_img_mobile.style.display = "none";
            prichina02_img_mobile.style.display = "block";

            prichina03_text_mobile.style.display = "none";
            prichina02_text_mobile.style.display = "block";
        }
    }

    function moveRight() {
        if (prichina01_mobile.style.display === "block"
            && prichina01_img_mobile.style.display === "block"
            && prichina01_text_mobile.style.display === "block") {
            prichina01_mobile.style.display = "none";
            prichina02_mobile.style.display = "block";

            prichina01_img_mobile.style.display = "none";
            prichina02_img_mobile.style.display = "block";

            prichina01_text_mobile.style.display = "none";
            prichina02_text_mobile.style.display = "block";
        } else if (prichina02_mobile.style.display === "block"
            && prichina02_img_mobile.style.display === "block"
            && prichina02_text_mobile.style.display === "block") {
            prichina02_mobile.style.display = "none";
            prichina03_mobile.style.display = "block";

            prichina02_img_mobile.style.display = "none";
            prichina03_img_mobile.style.display = "block";

            prichina02_text_mobile.style.display = "none";
            prichina03_text_mobile.style.display = "block";
        } else {
            prichina03_mobile.style.display = "none";
            prichina01_mobile.style.display = "block";

            prichina03_img_mobile.style.display = "none";
            prichina01_img_mobile.style.display = "block";

            prichina03_text_mobile.style.display = "none";
            prichina01_text_mobile.style.display = "block";
        }
    }

    $('.c-block-5-control_prev-mobile').click(function () {
        moveLeft();
    });

    $('.c-block-5-control_next-mobile').click(function () {
        moveRight();
    });

});


// Script for c-block-6 -->

jQuery(document).ready(function ($) {
    var slideCount = $('#c-block-6-slider ul li').length;
    var slideWidth = $('#c-block-6-slider ul li').width();
    var slideHeight = $('#c-block-6-slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#c-block-6-slider').css({ width: slideWidth, height: slideHeight });

    $('#c-block-6-slider ul').css({ width: sliderUlWidth, marginLeft: -slideWidth });

    $('#c-block-6-slider ul li:last-child').prependTo('#c-block-6-slider ul');

    function moveLeft() {
        $('#c-block-6-slider ul').animate({
            left: +slideWidth
        }, 200, function () {
            $('#c-block-6-slider ul li:last-child').prependTo('#c-block-6-slider ul');
            $('#c-block-6-slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#c-block-6-slider ul').animate({
            left: -slideWidth
        }, 200, function () {
            $('#c-block-6-slider ul li:first-child').appendTo('#c-block-6-slider ul');
            $('#c-block-6-slider ul').css('left', '');
        });
    };

    $('.c-block-6-control_prev').click(function () {
        moveLeft();
    });

    $('.c-block-6-control_next').click(function () {
        moveRight();
    });

});


// Script for c-block-7 -->

let c_block_7_buttons = document.querySelectorAll('.c-block-7-button'),
    c_block_7_popup = document.getElementById('c-block-7-popup'),
    c_block_7_close_button = document.getElementById('c-block-7-close');

for (let i = 0; i < c_block_7_buttons.length; i++) {
    c_block_7_buttons[i].addEventListener("click", function () {
        c_block_7_popup.style.display = "flex";
        c_block_1_bg_layer.style.display = "block";
    });
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        c_block_7_popup.style.display = "none";
        c_block_1_bg_layer.style.display = "none";
    }
}, passive = true);

c_block_7_close_button.onclick = function () {
    c_block_7_popup.style.display = "none";
    c_block_1_bg_layer.style.display = "none";
};


// Script for c-block-8 -->

let recipes_popup = document.getElementById('recipes-popup'),
    c_block_8_bg_layer = document.getElementById('c-block-8-bg_layer'),
    recipes_download_button = document.getElementById('recipes-download'),
    recipes_popupClose = document.querySelector('.c-block-8__recipes-popup-close');

recipes_download_button.addEventListener("click", function () {
    recipes_popup.style.display = "flex";
    c_block_8_bg_layer.style.display = "block";
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        recipes_popup.style.display = "none";
        c_block_8_bg_layer.style.display = "none";
    }
}, passive = true);

recipes_popupClose.onclick = function () {
    recipes_popup.style.display = "none";
    c_block_8_bg_layer.style.display = "none";
};


// Script for c-block-10 -->

document.getElementById('c-block-10-content1').style.display = 'block';

document.getElementById('c-block-10-wrapper').addEventListener('click', () => {
    document.getElementById('c-block-10-tab_1').checked
        ? document.getElementById('c-block-10-content1').style.display = 'block'
        : document.getElementById('c-block-10-content1').style.display = 'none';
    document.getElementById('c-block-10-tab_2').checked
        ? document.getElementById('c-block-10-content2').style.display = 'block'
        : document.getElementById('c-block-10-content2').style.display = 'none';
    document.getElementById('c-block-10-tab_3').checked
        ? document.getElementById('c-block-10-content3').style.display = 'block'
        : document.getElementById('c-block-10-content3').style.display = 'none';
});


// Обработчики события показа окна видеоплеера -->

let player = document.getElementById('vimeo-block'),
    bg_layer = document.getElementById('bg_layer'),
    play_button = document.getElementById('play-button'),
    // play_button2 = document.getElementById('play-button2'),
    // play_button2_mobile = document.getElementById('play-button2-mobile'),
    popupClose = document.querySelector('.close');

let $frame = $('iframe#vimeo-iframe');

// saves the current iframe source
let vidsrc = $frame.attr('src');

play_button.addEventListener("click", function () {
    player.style.display = "block";
    bg_layer.style.display = "block";
}, passive = true);

// play_button2.addEventListener("click", function () {
//     player.style.display = "block";
//     bg_layer.style.display = "block";
// });

// play_button2_mobile.addEventListener("click", function () {
//     player.style.display = "block";
//     bg_layer.style.display = "block";
// });

for (i = 0; i < popupClose.length; i++) {
    popupClose[i].onclick = function () {
        player.style.display = "none";
        bg_layer.style.display = "none";

        // sets the source to nothing, stopping the video
        $frame.attr('src', '');

        // sets it back to the correct link so that it reloads immediately on the next window open
        $frame.attr('src', vidsrc);
    };
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        player.style.display = "none";
        bg_layer.style.display = "none";

        // sets the source to nothing, stopping the video
        $frame.attr('src', '');

        // sets it back to the correct link so that it reloads immediately on the next window open
        $frame.attr('src', vidsrc);
    }
}, passive = true);

document.addEventListener("click", function () {
    if (player.style.display === "block") {
        player.style.display = "none";
        bg_layer.style.display = "none";

        // sets the source to nothing, stopping the video
        $frame.attr('src', '');

        // sets it back to the correct link so that it reloads immediately on the next window open
        $frame.attr('src', vidsrc);
    }
}, passive = true);


// Подсвечивание активных элементов в форме -->

function active(container, itemId, active) {
    // Get the container element
    let btnContainer = document.getElementById(container);

    // Get all buttons with class="btn" inside the container
    let btns = btnContainer.getElementsByClassName(itemId);

    // Loop through the buttons and add the active class to the current/clicked button
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            let current = document.getElementsByClassName(active);
            current[0].className = current[0].className.replace(' ' + active, "");
            this.className += ' ' + active;
        }, passive = true);
    }
}

active('checkboxes_wr_1', 'c-block-2__form-checkboxes_btn1', 'active1');
active('checkboxes_wr_2', 'c-block-2__form-checkboxes_btn2', 'active2');


// Переключение между вкладками в квизе -->

let valCSS = 0;

let progressBar = document.getElementById('progress-bar');
let progressVal = document.getElementById('progress-val');
let tab_pane = document.getElementsByClassName('tab-pane');
let btn_next = document.getElementsByClassName('btn-next');
let valText = parseInt(progressVal.innerText);

for (let i = 0; i < tab_pane.length - 1; i++) {
    btn_next[i].onclick = () => {
        if (tab_pane[i].classList.contains('active')) {
            tab_pane[i].classList.remove('active');
            tab_pane[i + 1].classList.add('active');
        }

        if (valText <= 11) {
            valText += 4;
            valCSS += 20;
        } else if (valText >= 15) {
            valText += 0;
            valCSS += 0;
        } else {
            valText += 3;
            valCSS += 40;
        }

        progressBar.style.width = valCSS + '%';
        progressVal.innerText = valText + '%';
    }
}

// Обработчик закрытия окна с марафоном

// let marathon_popup = document.getElementById('marathon-popup'),
//     marathon_popup_tel = document.getElementById('marathon-popup-tel'),
//     marathon_popup_close = document.getElementById('marathon-popup-close');

// window.onload = function () {
//     if (localStorage.getItem("marathon") !== "viewed" && $(window).width() < 450) {
//         marathon_popup.style.display = "block";
//         c_block_1_bg_layer.style.display = "block";
//         clearInterval(refreshIntervalId);
//     }
// };

// marathon_popup_close.onclick = function () {
//     localStorage.setItem("marathon", "viewed");
//     marathon_popup.style.display = "none";
//     c_block_1_bg_layer.style.display = "none";
//     refreshIntervalId = customSetInterval();
// };

// function onMarathonButtonClick() {
//     marathon_popup_tel.click();
//     localStorage.setItem("marathon", "viewed");
//     marathon_popup.style.display = "none";
//     c_block_1_bg_layer.style.display = "none";
//     refreshIntervalId = customSetInterval();
// }

// Показывать всплывающее окно "Ваша заявка отправлена" -->

let thanks_popup1 = document.getElementById('thanks_popup1'),
    thanks_popup2 = document.getElementById('thanks_popup2'),
    thanksPopup_close = document.getElementById('thanks_popup-close');

function thanksPopup(id, elem, options = 1) {
    let form_block = document.getElementById(id);

    form_block.classList.remove('error');

    function isDataValid() {
        switch (options) {
            case 1: {
                if (form_block.user_name.checkValidity() &&
                    form_block.user_phone.checkValidity()) {
                    return true;
                } else {
                    return false;
                }
            }
            case 2: {
                if (form_block.user_phone_guest.checkValidity()) {
                    return true;
                } else {
                    return false;
                }
            }
            default:
                return false;
        }
    }

    if (isDataValid()) {

        if (elem != null) {
            elem.style.display = "none";
        }

        bg_layer.style.display = "block";

        if (id !== 'c-block-11-form') {
            thanks_popup1.style.display = "flex";
        }

        if (id === 'c-block-8-form') {
            setTimeout(() => {
                window.open('assets/files/recipe.pdf', '_blank');
            }, 1500);
        }

        if (id === 'c-block-11-form') {
            thanks_popup2.style.display = "flex";
            setTimeout(() => {
                window.open('assets/files/prices_merged.pdf', '_blank');
            }, 1500);
        }

        setTimeout(() => {
            form_block.submit();
        }, 2500);

    } else {
        form_block.classList.add('error');
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        thanks_popup1.style.display = "none";
        thanks_popup2.style.display = "none";
        bg_layer.style.display = "none";
    }
}, passive = true);

thanksPopup_close.onclick = function () {
    thanks_popup1.style.display = "none";
    thanks_popup2.style.display = "none";
    bg_layer.style.display = "none";
};


// Маска для ввода номера телефона -->

$(document).ready(function () {
    $(".phone_mask").mask("+7(999)999-99-99");
});