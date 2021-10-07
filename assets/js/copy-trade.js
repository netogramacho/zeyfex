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

}