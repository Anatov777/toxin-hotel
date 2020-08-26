// Триггер для бургер меню
$('.header-burger-btn').on('click', function(){
    if (document.documentElement.clientWidth <= 525 && document.querySelector(".login-area")){
        document.querySelector(".header-navigation__content").append(document.querySelector(".login-area"));
        document.querySelector(".login-area").style.display = "block";
    }
    
    $('nav ul').slideToggle();
});

// Дополнительные удобства
$('.rooms-filter__add-comforts').on('click', function(){
    $('.add-comforts__content').slideToggle();
});

// Навигация
document.querySelector(".login-btn").addEventListener("click", function() {
    event.preventDefault();
    document.location="signin.html";
});
document.querySelector(".basic-btn").addEventListener("click", function() {
    event.preventDefault();
    document.location="registration.html";
});
if (document.querySelector(".find-rooms-button")) {
    document.querySelector(".find-rooms-button").addEventListener("click", function() {
        event.preventDefault();
        document.location="search_room.html";
    });
}

$(window).resize(function() {
    if (document.documentElement.clientWidth > 525){
        document.querySelector(".header-navigation").append(document.querySelector(".login-area"));
        document.querySelector(".login-area").style.display = "flex";
    }
    if (document.documentElement.clientWidth <= 525){
        document.querySelector(".header-navigation__content").append(document.querySelector(".login-area"));
        document.querySelector(".login-area").style.display = "block";
    }
});

// Скрыть выпадающее меню при клике не по меню
window.onclick = function(event) {
    guests_dropdown_btn = document.querySelectorAll('.guests__dropdown-btn');
    guests_dropdown_content = document.querySelectorAll('.guests__dropdown-content');
    for (let i=0; i<guests_dropdown_btn.length; i++) {
        if (!guests_dropdown_btn[i].contains(event.target) && !guests_dropdown_content[i].contains(event.target)) {
            var dropdowns = guests_dropdown_content[i];
            if (dropdowns.classList.contains('show')) {
                dropdowns.classList.remove('show');
            }
        }
    }
}

document.addEventListener("click", function() {
    // Показать/скрыть выпадающее меню при клике на кнопку выбора количества гостей
    if (event.target.id.match(/DropdownBtn/)) {
        event.preventDefault();
        document.querySelector('#'+event.target.id+' ~ .guests__dropdown-content').classList.toggle('show');
        document.querySelector('.guests__dropdown-btn').classList.toggle('guests__dropdown-btn_br2');
    }
    if (event.target.id.match(/IncrementBtn/) || event.target.id.match(/DecrementBtn/)) {
        event.preventDefault();
        dropdownCountNumberField = document.querySelector('#' + event.target.id).parentNode.children[1];
        countNumber = Number(dropdownCountNumberField.innerHTML);
        event.target.id.match(/IncrementBtn/) ? countNumber++ : countNumber--;
        dropdownCountNumberField.innerHTML = countNumber;
        dropdownCountNumberField.innerHTML === '0' ? dropdownCountNumberField.previousElementSibling.disabled = true : dropdownCountNumberField.previousElementSibling.disabled = false;
    }
    if (event.target.classList[0].match(/accept-dropdown-result/)) {
        acceptDropdownChanges(document.querySelector('#' + event.target.id));
    }
    if (event.target.classList[0].match(/clear-dropdown-result/)) {
        clearDropdownChanges(document.querySelector('#' + event.target.id));
    }
    // Like buttons changer
    if (event.target.classList[0].match(/room-client-review__likes/)) {
        event.preventDefault();
        console.log(event.target.classList.value);
        if (event.target.classList.value.match(/active/)) {
            event.target.classList.remove('active');
        }
        else {
            event.target.classList.add('active');
        }
    }
});

// Применение изменений внутри выпадающего меню
function acceptDropdownChanges(elemId) {
    wordGuestEnding = ['гость', 'гостя', 'гостей'];
    wordComfortEnding = ['удобство', 'удобства', 'удобств']
    span = elemId.parentNode.parentNode.querySelectorAll('span');
    let res = 0;
    for (let i = 0; i < 3; i++) {
        res += Number(span[i].innerHTML);
    }
    if (elemId.id.match(/acceptСomfortDropdownChanges/)) {
        lastNum = res%10;
        switch(true) {
            case lastNum === 1 && !(res >= 11 && res < 15):
                document.querySelector('#comfortDropdownBtn div').innerHTML = res + ' ' + wordComfortEnding[0];
                break;
            case lastNum >= 2 && lastNum < 5 && !(res >= 11 && res < 15):
                document.querySelector('#comfortDropdownBtn div').innerHTML = res + ' ' + wordComfortEnding[1];
                break;
            default:
                document.querySelector('#comfortDropdownBtn div').innerHTML = res + ' ' + wordComfortEnding[2];
                break;
        }
    }
    if (elemId.id.match(/acceptGuestsDropdownChanges/)) {
        lastNum = res%10;
        switch(true) {
            case lastNum === 1 && !(res >= 11 && res < 15):
                document.querySelector('#guestsDropdownBtn div').innerHTML = res + ' ' + wordGuestEnding[0];
                break;
            case lastNum >= 2 && lastNum < 5 && !(res >= 11 && res < 15):
                document.querySelector('#guestsDropdownBtn div').innerHTML = res + ' ' + wordGuestEnding[1];
                break;
            default:
                document.querySelector('#guestsDropdownBtn div').innerHTML = res + ' ' + wordGuestEnding[2];
                break;
        }
        elemId.parentNode.parentNode.classList.remove('show');
    }
}

function clearDropdownChanges(elemId) {
    span = elemId.parentNode.parentNode.querySelectorAll('span');
    let res = 0;
    for (let i = 0; i < 3; i++) {
        span[i].innerHTML = String(res);
    }
    if (elemId.id.match(/clearСomfortDropdownChanges/)) {
        document.querySelector('#comfortDropdownBtn div').innerHTML = 'Сколько удобств';
        minusBtns = document.querySelectorAll('#comfortDropdownBtn ~ .guests__dropdown-content .dropdown-count-result');
        for (let i=0; i<3; i++) {
            minusBtns[i].previousElementSibling.disabled = true;
        }
    }
    if (elemId.id.match(/clearGuestsDropdownChanges/)) {
        document.querySelector('#guestsDropdownBtn div').innerHTML = 'Сколько гостей';
        minusBtns = document.querySelectorAll('#guestsDropdownBtn ~ .guests__dropdown-content .dropdown-count-result');
        for (let i=0; i<3; i++) {
            minusBtns[i].previousElementSibling.disabled = true;
        }
    }
}
