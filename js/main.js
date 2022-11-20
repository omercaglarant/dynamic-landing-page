// İki Nokta Ekleme
const twoDot = "<span>:</span>";

// DOM Elementlerini Seç
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// Zamanı Göster 
function showTime () {
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    // AM veya PM Belirleme
    const twelveHourClock = hour >= 12 ? 'PM' : 'AM';

    // 12 Saatlik Zaman Dilimi
    hour = hour % 12 || 12;

    // Zaman Çıktısı
    time.innerHTML = `${hour}${twoDot}${addZero(minutes)}${twoDot}${addZero(seconds)} ${twelveHourClock ? twelveHourClock : ''}`;

    setTimeout(showTime, 1000);
};

// Sıfır Ekle
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Arkaplan ve Karşılamayı - Good Morning vb. -  Ayarla
function setBackgroundGreet() {
    let today = new Date();
    let hour = today.getHours();

    if (hour < 12) {
        // Sabah
        document.body.style.backgroundImage = 'url(../img/morning.jpg)';
        greeting.textContent = 'Günaydın';
    } else if (hour < 18) {
        // Öğle Sonrası
        document.body.style.backgroundImage = 'url(../img/afternoon.jpg)';
        greeting.textContent ='Tünaydın';
    } else {
        // Gece
        document.body.style.backgroundImage = 'url(../img/afternoon.jpg)';
        greeting.textContent ='İyi Geceler';
        document.body.style.color = '#fff';
    }
}

// İsmi Almak
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// İsmi Belirle
function setName(e) {
    if(e.type === 'keypress') {
    // Enter'a basıldığından emin ol
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Focusu Almak
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Focusu Belirle
function setFocus(e) {
    if(e.type === 'keypress') {
    // Enter'a basıldığından emin ol
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}




name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// Fonksiyonları Yürüt
showTime();
setBackgroundGreet();
getName();
getFocus();