document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var popup = document.querySelector('.popup_apa_1_0_0');
        popup.style.display = 'flex';
    }, 5000);
    var closeBtn = document.querySelector('.popup_apa_1_0_0__close');
    closeBtn.addEventListener('click', function() {
        var popup = document.querySelector('.popup_apa_1_0_0');
        popup.style.display = 'none';
    });
    var closeBg = document.querySelector('.popup_apa_1_0_0');
    closeBg.addEventListener('click', function() {
        var popup = document.querySelector('.popup_apa_1_0_0');
        popup.style.display = 'none';
    });
});