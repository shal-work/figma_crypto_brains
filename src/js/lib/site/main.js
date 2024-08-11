//for page-login
$('#user_password').click(function() {
    $('.eye-closed').hide();
});

$('#user_password').on('blur', function() {
    $('.eye-closed').show();
});

$('#user_password').on('blur', function() {
    $('.eye-closed').show();
});


//for index-tradepage
// инициализация
$('.buy-of-sell__market').show();
$('.buy-of-sell__watchlist').hide();
$('.buy-of-sell__portfolio').hide();
$('.buy-of-sell__open-order').hide();
$('.trade-content__component').hide();
// $('#buy-sell').addClass('blue');
// $('#buy-sell').addClass('underline');

const hideBuyOfSellMenu = () => {
    $('.buy-of-sell__market').hide();
    $('.buy-of-sell__watchlist').hide();
    $('.buy-of-sell__portfolio').hide();
    $('.buy-of-sell__open-order').hide();
    $('.trade-content__component').hide();

    $('#buy-sell').removeClass('blue');
    $('#watchlist').removeClass('blue');
    $('#portfolio').removeClass('blue');
    $('#open-order').removeClass('blue');
    $('#buy-sell').removeClass('underline');
    $('#watchlist').removeClass('underline');
    $('#portfolio').removeClass('underline');
    $('#open-order').removeClass('underline');
}



$('.buy-of-sell__menu-item').click(()=>{
    hideBuyOfSellMenu();
    $('.buy-of-sell__menu-item').removeClass('blue');
})

$('#buy-sell').click(()=>{
    $('.buy-of-sell__market').show();
    $('#buy-sell').addClass('blue');
    $('#buy-sell').addClass('underline');

})
$('#watchlist').click(()=>{
    $('.buy-of-sell__watchlist').show();
    $('.trade-content__component').show();
    $('#watchlist').addClass('blue');
    $('#watchlist').addClass('underline');
})
$('#portfolio').click(()=>{
    $('.buy-of-sell__portfolio').show();
    $('.trade-content__component').show();
    $('#portfolio').addClass('blue');
    $('#portfolio').addClass('underline');
})
$('#open-order').click(()=>{
    $('.buy-of-sell__open-order').show();
    $('.trade-content__component').show();
    $('#open-order').addClass('blue');
    $('#open-order').addClass('underline');
})

$('#open-order').click(()=>{
    $('.buy-of-sell__open-order').show();
    $('.trade-content__component').show();
    $('#open-order').addClass('blue');
    $('#open-order').addClass('underline');
})

// работа с бургером
//Добавляем класс active, для замены бургера на крестик (это в css)
$('.navbar__toggle').on('click', function() {
    $('.mode__burger').toggleClass('active');
});

$('.navbar__header').dropdown();

//После клика по пункту меню скрываем адаптивное меню, остается только бургер
$('.collapse').on('click', function() {
    if (window.getComputedStyle(document.querySelector('.navbar__toggle')).display != 'none') {
        let item= document.querySelectorAll('.collapse');
        item.forEach((item) => item.style.display = 'none');
    }
});
