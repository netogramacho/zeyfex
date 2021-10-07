var myChart;

var porcentagem = 0.06;

$(document).ready(function() {
    computarValor();
    montarGrafico();

    var SPMaskBehavior = function(val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        spOptions = {
            onKeyPress: function(val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            }
        };
    $('#phone').mask(SPMaskBehavior, spOptions);

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

});

const formCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
})

function goToForm() {
    $("html, body").delay(100).animate({ scrollTop: ($('form').offset().top - 100) }, 500);
}

function verificarNumero(e) {
    e = e || window.event

    let arr = e.target.value.split('');
    let aux = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    if (!aux.includes(arr[arr.length - 1])) {
        e.target.value = e.target.value.slice(0, -1)
    }

    console.log(e.target.value);
}

function computarValor() {
    let money = parseInt($('#money').val());
    let time = parseInt($('#time').val());
    let result = 0;


    let fic = money + (money * porcentagem * time);
    let cdi = money * Math.pow((1.004104), time);
    let poupanca = money * Math.pow((1.003058), time);

    $('#fic-value').html(formCurrency.format(fic));

    $('#cdi-value').html(formCurrency.format(cdi));

    $('#poupanca-value').html(formCurrency.format(poupanca));


    time += (time > 1) ? " Meses" : " Mês";

    result = formCurrency.format(money)

    $('.money span').html(result.replace("R$", '').trim());
    $('.time span').html(time);


}

// GRAFICO


function gerarDataSet() {
    let money = parseInt($('#money').val());
    let time = parseInt($('#time').val());

    monthArr = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    lblArr = ["Janeiro"];
    poupArr = [money];
    cdiArr = [money];
    ficArr = [money];
    for (let i = 1; i <= time; i++) {

        lblArr.push(monthArr[i % 12]);

        ficArr.push((money + (money * porcentagem * (i))));
        cdiArr.push((money * Math.pow((1.004104), i)).toFixed(2));
        poupArr.push((money * Math.pow((1.003058), i)).toFixed(2));

    }

    return {
        labels: lblArr,
        poupanca: poupArr,
        cdi: cdiArr,
        fic: ficArr,
    }
}

function montarGrafico() {
    var ctx = document.getElementById('myChart').getContext('2d');
    let dt = gerarDataSet();
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dt.labels,
            datasets: [{
                label: 'Poupança',
                data: dt.poupanca,
                backgroundColor: [
                    '#FFFFFF',
                ],
                borderColor: [
                    '#FFFFFF',
                ],
                borderWidth: 1
            }, {
                label: 'CDI',
                data: dt.cdi,
                backgroundColor: [
                    '#F1304D',
                ],
                borderColor: [
                    '#F1304D',
                ],
                borderWidth: 1
            }, {
                label: 'FIC',
                data: dt.fic,
                backgroundColor: [
                    '#00DA6D',
                ],
                borderColor: [
                    '#00DA6D',
                ],
                borderWidth: 1
            }]
        },
    });

    if (window.innerWidth > 750) {
        myChart.canvas.parentNode.style.height = '500px';
        myChart.canvas.parentNode.style.width = '1000px';
    } else {
        myChart.canvas.parentNode.style.height = '175px';
        myChart.canvas.parentNode.style.width = '350px';
    }
}

function updateGrafico() {
    myChart.destroy();
    var ctx = document.getElementById('myChart').getContext('2d');
    let dt = gerarDataSet();
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dt.labels,
            datasets: [{
                label: 'Poupança',
                data: dt.poupanca,
                backgroundColor: [
                    '#FFFFFF',
                ],
                borderColor: [
                    '#FFFFFF',
                ],
                borderWidth: 1
            }, {
                label: 'CDI',
                data: dt.cdi,
                backgroundColor: [
                    '#F1304D',
                ],
                borderColor: [
                    '#F1304D',
                ],
                borderWidth: 1
            }, {
                label: 'FIC',
                data: dt.fic,
                backgroundColor: [
                    '#00DA6D',
                ],
                borderColor: [
                    '#00DA6D',
                ],
                borderWidth: 1
            }]
        },
    });

    if (window.innerWidth > 750) {
        myChart.canvas.parentNode.style.height = '500px';
        myChart.canvas.parentNode.style.width = '1000px';
    } else {
        myChart.canvas.parentNode.style.height = '175px';
        myChart.canvas.parentNode.style.width = '350px';
    }
}