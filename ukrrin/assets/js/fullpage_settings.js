var deleteLog = false;
const carousel_time = 120000
var carousel_timer

const myFullpage = new fullpage('#fullpage', {
    css3: true,
    continuousVertical: true,
    continuousHorizontal: true,
    easing: 'easeInOutCubic',
    controlArrows: true,
    resetSliders: true,
    normalScrollElements: '.iframe',
    onLeave: function (origin, destination, direction) {

        document.getElementById("page_icon").classList.add("element_fade_out")
        document.getElementById("page_name").classList.add("element_fade_out")

        animation_timer = setTimeout(function () {
            document.getElementById("page_icon").classList.remove("element_fade_out")
            document.getElementById("page_name").classList.remove("element_fade_out")
            document.getElementById("page_icon").src = destination.item.dataset.icon
            document.getElementById("page_name").innerHTML = destination.item.title
            document.getElementById("page_icon").style.opacity = 0
            document.getElementById("page_name").style.opacity = 0
        }, 500)

    },
    afterLoad: function (origin, destination, direction) {

        // document.getElementById("page_icon").src = destination.item.dataset.icon
        // document.getElementById("page_name").innerHTML = destination.item.title

        document.getElementById("page_icon").classList.add("element_fade_in")
        document.getElementById("page_name").classList.add("element_fade_in")

        animation_timer = setTimeout(function () {
            document.getElementById("page_icon").classList.remove("element_fade_in")
            document.getElementById("page_name").classList.remove("element_fade_in")
            document.getElementById("page_icon").style.opacity = 1
            document.getElementById("page_name").style.opacity = 1
        }, 500)

        clearTimeout(carousel_timer)
        carousel_timer = setTimeout(move_section, carousel_time)

    },
    afterSlideLoad: function (origin, destination, direction) {
        clearTimeout(carousel_timer)
        carousel_timer = setTimeout(move_section, carousel_time)
    }
});

// $(document).ready(function(){
//     $("iframe").on("load", function(){
//         $(this).contents().on("mousedown, mouseup, click, keydown, keyup", function(){
//             console.log('Key Pressed')
//             clearTimeout(carousel_timer)
//             carousel_timer = setTimeout(move_section, carousel_time)
//         });
//     });
// });

document.onkeydown = function (e) {
    clearTimeout(carousel_timer)
    carousel_timer = setTimeout(move_section, carousel_time)
}

document.onmousemove = function (e) {
    clearTimeout(carousel_timer)
    carousel_timer = setTimeout(move_section, carousel_time)
}

// window.addEventListener('blur', () => {
//     if (document.activeElement === document.querySelector('iframe')) {
//         console.log('Clicked')
//         clearTimeout(carousel_timer)
//         carousel_timer = setTimeout(move_section, carousel_timer)
//     }
// })

// document.querySelector('iframe').addEventListener('keydown', function (e) {
//     clearTimeout(carousel_timer)
//     carousel_timer = setTimeout(move_section, carousel_time)
// });

// document.onmouseover = function (e) {
//     console.log('Key Pressed')
//     clearTimeout(carousel_timer)
//     carousel_timer = setTimeout(move_section, carousel_time)
// };

document.ontouchstart = function (e) {
    clearTimeout(carousel_timer)
    carousel_timer = setTimeout(move_section, carousel_time)
};

function move_section() {

    var sectionItem = fullpage_api.getActiveSection().item;
    var numslides = sectionItem.querySelectorAll(".fp-slide").length

    if (numslides === 1) {
        myFullpage.moveSectionDown()
    } else {
        slide = fullpage_api.getActiveSlide()
        console.log(slide.index)
        if (slide.index === (numslides - 1)) {
            myFullpage.moveSlideRight()
            myFullpage.moveSectionDown()
        } else {
            myFullpage.moveSlideRight()
        }
    }

}