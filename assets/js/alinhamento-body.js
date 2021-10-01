$(document).ready(function() {

    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "e6e2ed29-df36-4322-b6ed-b97429f4bbf1";
    (function() {
        d = document;
        s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
    })();

    if (window.innerWidth > 768) {
        var font_size = 0;
        font_size = (window.innerWidth / 1920 * 16);
        $('body').css('font-size', font_size);
    } else {
        $('.desktop').remove();
    }

    if (window.innerWidth > 768) {
        $('.left-bar').remove();
        $('.offset-1').removeClass('offset-1');
        $('.offset-2').removeClass('offset-2');
        $('.offset-3').removeClass('offset-3');
    }

    $('#lenguages').click(function() {
        $('#lenguages ul').slideToggle();
    });
    $('#lenguages-mobile').click(function() {
        $('#lenguages-mobile ul').slideToggle();
    });

    trocarBandeira();
    iniciarMenuMobile();
});

function iniciarMenuMobile() {
    $('.btn-menu').on('click', function() {
        $('.left-bar').fadeIn('fast');
    });
    $('.left-bar-content .btn-close').on('click', function() {
        $('.left-bar').fadeOut('fast');
    });
}


function doGTranslate(lang_pair) {
    if (lang_pair.value) lang_pair = lang_pair.value;
    if (lang_pair == '') return;
    var lang = lang_pair.split('|')[1];
    var plang = location.pathname.split('/')[1];
    if (plang.length != 2 && plang.toLowerCase() != 'zh-cn' && plang.toLowerCase() != 'zh-tw' && plang.toLowerCase() != 'pt-br') plang = 'en';

    if (lang == 'en') location.href = location.protocol + '//' + location.host + location.pathname.replace('/' + plang + '/', '/') + location.search;
    else if (lang == 'pt') location.href = location.protocol + '//' + location.host + '/pt-br' + location.pathname.replace('/' + plang + '/', '/') + location.search;
    else location.href = location.origin + '/' + lang + location.pathname.replace('/' + plang + '/', '/') + location.search;
}


function trocarBandeira() {

    var plang = location.pathname.split('/')[1];

    if (plang == 'pt-br') {
        $('#lenguages .icon-lenguages, #lenguages-mobile .icon-lenguages').html('<img src="' + window.location.origin + '/assets/imagens/icone-brasil-colorido.png">');
    } else if (plang == 'zh-CN') {
        $('#lenguages .icon-lenguages, #lenguages-mobile .icon-lenguages').html('<img src="' + window.location.origin + '/assets/imagens/icone-china.png">');
    } else if (plang == 'de') {
        $('#lenguages .icon-lenguages, #lenguages-mobile .icon-lenguages').html('<img src="' + window.location.origin + '/assets/imagens/icone-alemanha.png">');
    } else if (plang == 'it') {
        $('#lenguages .icon-lenguages, #lenguages-mobile .icon-lenguages').html('<img src="' + window.location.origin + '/assets/imagens/icone-italia.png">');
    } else if (plang == 'ru') {
        $('#lenguages .icon-lenguages, #lenguages-mobile .icon-lenguages').html('<img src="' + window.location.origin + '/assets/imagens/icone-russia.png">');
    } else if (plang == 'es') {
        $('#lenguages .icon-lenguages, #lenguages-mobile .icon-lenguages').html('<img src="' + window.location.origin + '/assets/imagens/icone-espanha.png">');
    } else if (plang == 'sv') {
        $('#lenguages .icon-lenguages, #lenguages-mobile .icon-lenguages').html('<img src="' + window.location.origin + '/assets/imagens/icone-suecia.png">');
    }
}