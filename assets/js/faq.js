$(document).ready(function() {
    iniciarFaq();
    if (window.innerWidth < 768) {
        $('.list-options').slick({
            infinite: true,
            slidesToShow: 2,
            slideToScroll: 5,
            infinite: false,
            arrows: false
        });
    }
});

function iniciarFaqMobile() {

    $('.question').on('click', function() {
        var valor = $(this).attr('data-numberQuestion');
        var titleBlock = $(this).parent().attr("data-ul-title");
        var title = $(this).parents('.card-question-d-none').find('#response' + valor).find('h2').html();
        var body = $(this).parents('.card-question-d-none').find('#response' + valor).find('p').html();
        exibirModalPergunta(titleBlock, title, body);
    });

}

function iniciarFaqDesktop() {
    $('.question').on('click', function() {
        $('.question-text-selected').removeClass('question-text-selected');
        $(this).addClass('question-text-selected');

        var valor = $(this).attr('data-numberQuestion');
        $('.response').slideUp();
        $(this).parents('.card-question-d-none').find('#response' + valor).slideToggle();
    });
}

function iniciarFaq() {
    $('.card-question-title').on('click', function() {
        $(this).parent().find('.card-question-text').slideToggle();

        if ($(this).find('.angle-up').css('display') == 'none') {
            $(this).find('.angle-up').css('display', 'block');
        } else {
            $(this).find('.angle-up').css('display', 'none');
        }

        if ($(this).find('.angle-down').css('display') == 'none') {
            $(this).find('.angle-down').css('display', 'block');
        } else {
            $(this).find('.angle-down').css('display', 'none');
        }
    });


    $('#btn-acc-open').on('click', function() {
        if (!$(this).hasClass('topic-selected')) {
            $('.topic-selected').removeClass('topic-selected')
            $(this).addClass('topic-selected');

            $('.card-question-d-none').slideUp('fast');
            $('.account-oppening').slideToggle('fast');
        }
    });

    $('#btn-comp-inf').on('click', function() {
        if (!$(this).hasClass('topic-selected')) {
            $('.topic-selected').removeClass('topic-selected')
            $(this).addClass('topic-selected');

            $('.card-question-d-none').slideUp('fast');
            $('.company-information').slideToggle('fast');
        }
    });

    $('#btn-fund-with').on('click', function() {
        if (!$(this).hasClass('topic-selected')) {
            $('.topic-selected').removeClass('topic-selected')
            $(this).addClass('topic-selected');

            $('.card-question-d-none').slideUp('fast');
            $('.funding-withdrawals').slideToggle('fast');
        }
    });

    $('#btn-trading').on('click', function() {
        if (!$(this).hasClass('topic-selected')) {
            $('.topic-selected').removeClass('topic-selected')
            $(this).addClass('topic-selected');

            $('.card-question-d-none').slideUp('fast');
            $('.trading').slideToggle('fast');
        }
    });

    $('#btn-partner').on('click', function() {
        if (!$(this).hasClass('topic-selected')) {
            $('.topic-selected').removeClass('topic-selected')
            $(this).addClass('topic-selected');

            $('.card-question-d-none').slideUp('fast');
            $('.partners').slideToggle('fast');
        }
    });

    if (window.innerWidth > 1150) {
        iniciarFaqDesktop();
    } else {
        iniciarFaqMobile();
    }
}

function exibirModalPergunta(titleBlock, title, body) {
    $('#modalPergunta').find('#titleBlock').html(titleBlock);
    $('#modalPergunta').find('#title').html(title);
    $('#modalPergunta').find('#body').html(body);
    $('#modalPergunta').modal('show');
}