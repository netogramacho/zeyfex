$(document).ready(function() {
    iniciarComponentes();
});


function iniciarComponentes() {
    $('.item-title').on('click', function() {
        var data = $(this).attr('data-title');

        $('.item-title.selected').removeClass('selected');
        $(this).addClass('selected');

        $('.item-body.selected').removeClass('selected');
        $('#' + data).addClass('selected');
    });
}