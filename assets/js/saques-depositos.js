$(document).ready(function() {
    iniciarComponentes();
});


function iniciarComponentes() {

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


    $('.change-card').on('click', function() {
        $('.change-card-selected').removeClass('change-card-selected');
        $(this).addClass('change-card-selected');

        if ($(this).hasClass('withdrawals')) {
            $('.percent').html('1.8%');
            $('.time').html('1 to 5 working days');
        } else if ($(this).hasClass('deposits')) {
            $('.percent').html('0%');
            $('.time').html('Instant');
        }
    });
}