$(document).ready(function(){
    $('.card-slider').slick({
        arrows: true,
        dots: true,
    });

    $("#fader").ionRangeSlider({
        type: "double",
        min: 0,
        max: 15000,
        from: 5000,
        to: 10000,
        drag_interval: false,
        min_interval: null,
        max_interval: null
    });

    document.querySelector("#priceRange").innerHTML = document.querySelector(".irs-from").innerHTML + " - " + document.querySelector(".irs-to").innerHTML + "₽";
    document.querySelector(".irs-from").addEventListener("DOMSubtreeModified", function() {
        document.querySelector("#priceRange").innerHTML = document.querySelector(".irs-from").innerHTML + " - " + document.querySelector(".irs-to").innerHTML + "₽";
    });
});