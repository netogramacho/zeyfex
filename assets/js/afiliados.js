$(document).ready(function() {

    trocarBotoesCirculosVermelhos();
});



function trocarBotoesCirculosVermelhos() {
    $('#circle-1').on('click', function() {
        $('.circle-selected').removeClass('circle-selected');
        $(this).addClass('circle-selected');

        $('.text-center-comissions-selected').removeClass('text-center-comissions-selected');
        $('#text-center-comissions-1').addClass('text-center-comissions-selected');

        $('.card-text-selected').removeClass('card-text-selected');
        $('#card-text-1').addClass('card-text-selected');
    });
    $('#circle-5').on('click', function() {
        $('.circle-selected').removeClass('circle-selected');
        $(this).addClass('circle-selected');

        $('.text-center-comissions-selected').removeClass('text-center-comissions-selected');
        $('#text-center-comissions-5').addClass('text-center-comissions-selected');

        $('.card-text-selected').removeClass('card-text-selected');
        $('#card-text-5').addClass('card-text-selected');
    });
    $('#circle-15').on('click', function() {
        $('.circle-selected').removeClass('circle-selected');
        $(this).addClass('circle-selected');

        $('.text-center-comissions-selected').removeClass('text-center-comissions-selected');
        $('#text-center-comissions-15').addClass('text-center-comissions-selected');

        $('.card-text-selected').removeClass('card-text-selected');
        $('#card-text-15').addClass('card-text-selected');
    });
    $('#circle-30').on('click', function() {
        $('.circle-selected').removeClass('circle-selected');
        $(this).addClass('circle-selected');

        $('.text-center-comissions-selected').removeClass('text-center-comissions-selected');
        $('#text-center-comissions-30').addClass('text-center-comissions-selected');

        $('.card-text-selected').removeClass('card-text-selected');
        $('#card-text-30').addClass('card-text-selected');
    });
    $('#circle-60').on('click', function() {
        $('.circle-selected').removeClass('circle-selected');
        $(this).addClass('circle-selected');

        $('.text-center-comissions-selected').removeClass('text-center-comissions-selected');
        $('#text-center-comissions-60').addClass('text-center-comissions-selected');

        $('.card-text-selected').removeClass('card-text-selected');
        $('#card-text-60').addClass('card-text-selected');
    });
}