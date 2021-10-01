$(document).ready(function() {
    $('.pie-graph').asPieProgress({
        namespace: 'teste',
        size: 15,
        speed: 1, // speed of 1/100
        barcolor: '#F1304D',
        barsize: '1',
        trackcolor: '#3f4851'
    });

    iniciarGraficoTorta();

    $(".slider").on('input', function() {
        var value = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min')) * 100;
        $(this).css('background', 'linear-gradient(to right, #F1304D 0%, #F1304D ' + value + '%, #3f4851 ' + value + '%, #3f4851 100%)');
    });

    $('.question').on('click', function() {
        $(this).find('.response').slideToggle(200);
        setTimeout(() => {
            if ($(this).find('.response').css("display") == "none") {
                $(this).find('.minus').css('display', 'none');
                $(this).find('.plus').css('display', 'block');
            } else {
                $(this).find('.minus').css('display', 'block');
                $(this).find('.plus').css('display', 'none');
            }
        }, 300);
    });

    $('.coin-option').on('click', function() {
        $('.coin-option.selected').removeClass('selected');
        $(this).addClass('selected');
    });
    if (window.innerWidth < 768) {
        $('.list-options').slick({
            infinite: true,
            slidesToShow: 2,
            slideToScroll: 5,
            infinite: false,
            arrows: false,
            accessibility: false,
        });
    }
});

function iniciarGraficoTorta() {

    if (window.location.pathname.split('/')[1] == "pt-br") {
        $('.slider').on('input', function() {
            if ($('.slider').val() < 5) {
                $('.pie-graph').asPieProgress('go', $('.slider').val() * 100 / 5 + '%');
                $('.cashback-level').html("0%");
                $('.div-cashback-level p').html((5 - $('.slider').val()) + " lotes restantes para o próximo nível");

                $('.cashback-value span').html(0);
                $('.cashback-total span').html((0).toFixed(2));

            } else if ($('.slider').val() < 15) {
                $('.pie-graph').asPieProgress('go', $('.slider').val() * 100 / 15 + '%');
                $('.cashback-level').html("5%");
                $('.div-cashback-level p').html((15 - $('.slider').val()) + " lotes restantes para o próximo nível");

                $('.cashback-value span').html(0.5);
                $('.cashback-total span').html(($('.slider').val() * 0.5).toFixed(2));

            } else if ($('.slider').val() < 40) {
                $('.pie-graph').asPieProgress('go', $('.slider').val() * 100 / 40 + '%');
                $('.cashback-level').html("10%");
                $('.div-cashback-level p').html((40 - $('.slider').val()) + " lotes restantes para o próximo nível");

                $('.cashback-value span').html(1);
                $('.cashback-total span').html(($('.slider').val() * 1).toFixed(2));

            } else if ($('.slider').val() < 60) {
                $('.pie-graph').asPieProgress('go', $('.slider').val() * 100 / 60 + '%');
                $('.cashback-level').html("15%");
                $('.div-cashback-level p').html((60 - $('.slider').val()) + " lotes restantes para o próximo nível");

                $('.cashback-value span').html(1.5);
                $('.cashback-total span').html(($('.slider').val() * 1.5).toFixed(2));

            } else {
                $('.pie-graph').asPieProgress('go', $('.slider').val() * 100 / 60 + '%');
                $('.cashback-level').html("20%");
                $('.div-cashback-level p').html("Você atingiu o maior nível de cashback");

                $('.cashback-value span').html(2);
                $('.cashback-total span').html(($('.slider').val() * 2).toFixed(2));

            }
            $('.texto-grafico h1').html($('.slider').val());
        });

    } else {
        $('.slider').on('input', function() {
            if ($('.slider').val() < 5) {
                $('.pie-graph').asPieProgress('go', $('.slider').val() * 100 / 5 + '%');
                $('.cashback-level').html("0%");
                $('.div-cashback-level p').html((5 - $('.slider').val()) + " lotes restantes para o próximo nível");

                $('.cashback-value span').html(0);
                $('.cashback-total span').html((0).toFixed(2));

            } else if ($('.slider').val() < 15) {
                $('.pie-graph').asPieProgress('go', $('.slider').val() * 100 / 15 + '%');
                $('.cashback-level').html("5%");
                $('.div-cashback-level p').html((15 - $('.slider').val()) + " lotes restantes para o próximo nível");

                $('.cashback-value span').html(0.5);
                $('.cashback-total span').html(($('.slider').val() * 0.5).toFixed(2));

            } else if ($('.slider').val() < 40) {
                $('.pie-graph').asPieProgress('go', $('.slider').val() * 100 / 40 + '%');
                $('.cashback-level').html("10%");
                $('.div-cashback-level p').html((40 - $('.slider').val()) + " lotes restantes para o próximo nível");

                $('.cashback-value span').html(1);
                $('.cashback-total span').html(($('.slider').val() * 1).toFixed(2));

            } else if ($('.slider').val() < 60) {
                $('.pie-graph').asPieProgress('go', $('.slider').val() * 100 / 60 + '%');
                $('.cashback-level').html("15%");
                $('.div-cashback-level p').html((60 - $('.slider').val()) + " lotes restantes para o próximo nível");

                $('.cashback-value span').html(1.5);
                $('.cashback-total span').html(($('.slider').val() * 1.5).toFixed(2));

            } else {
                $('.pie-graph').asPieProgress('go', $('.slider').val() * 100 / 60 + '%');
                $('.cashback-level').html("20%");
                $('.div-cashback-level p').html("You have the highest cashback level");

                $('.cashback-value span').html(2);
                $('.cashback-total span').html(($('.slider').val() * 2).toFixed(2));

            }
            $('.texto-grafico h1').html($('.slider').val());
        });

    }
}