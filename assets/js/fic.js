var myChart;

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
    $('.celular').mask(SPMaskBehavior, spOptions);
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
    let money = $('#money').val();
    let time = $('#time').val();
    let result = 0;


    let fic = money * Math.pow((1.1512), time);
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
    let money = $('#money').val();
    let time = $('#time').val();

    monthArr = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    lblArr = [];
    poupArr = [];
    cdiArr = [];
    ficArr = [];
    for (let i = 0; i <= time; i++) {

        lblArr.push(monthArr[i % 12]);

        ficArr.push((money * Math.pow((1.1512), i)).toFixed(2));
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
        myChart.canvas.parentNode.style.height = '200px';
        myChart.canvas.parentNode.style.width = '300px';
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
        myChart.canvas.parentNode.style.height = '200px';
        myChart.canvas.parentNode.style.width = '300px';
    }
}

// FORM
window.cfields = { "1": "valor_que_deseja_comear_a_investir" };
window._show_thank_you = function(id, message, trackcmp_url, email) {
    var form = document.getElementById('form' + id + '_'),
        thank_you = form.querySelector('._form-thank-you');
    form.querySelector('._form-content').style.display = 'none';
    thank_you.innerHTML = message;
    thank_you.style.display = 'block';
    const vgoAlias = typeof visitorGlobalObjectAlias === 'undefined' ? 'vgo' : visitorGlobalObjectAlias;
    var visitorObject = window[vgoAlias];
    if (email && typeof visitorObject !== 'undefined') {
        visitorObject('setEmail', email);
        visitorObject('update');
    } else if (typeof(trackcmp_url) != 'undefined' && trackcmp_url) {
        // Site tracking URL to use after inline form submission.
        _load_script(trackcmp_url);
    }
    if (typeof window._form_callback !== 'undefined') window._form_callback(id);
};
window._show_error = function(id, message, html) {
    var form = document.getElementById('form' + id + '_'),
        err = document.createElement('div'),
        button = form.querySelector('button'),
        old_error = form.querySelector('._form_error');
    if (old_error) old_error.parentNode.removeChild(old_error);
    err.innerHTML = message;
    err.className = '_error-inner _form_error _no_arrow';
    var wrapper = document.createElement('div');
    wrapper.className = '_form-inner';
    wrapper.appendChild(err);
    button.parentNode.insertBefore(wrapper, button);
    document.querySelector('[id^="_form"][id$="_submit"]').disabled = false;
    if (html) {
        var div = document.createElement('div');
        div.className = '_error-html';
        div.innerHTML = html;
        err.appendChild(div);
    }
};
window._load_script = function(url, callback) {
    var head = document.querySelector('head'),
        script = document.createElement('script'),
        r = false;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = url;
    if (callback) {
        script.onload = script.onreadystatechange = function() {
            if (!r && (!this.readyState || this.readyState == 'complete')) {
                r = true;
                callback();
            }
        };
    }
    head.appendChild(script);
};
(function() {
    if (window.location.search.search("excludeform") !== -1) return false;
    var getCookie = function(name) {
        var match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }
    var setCookie = function(name, value) {
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + 1000 * 60 * 60 * 24 * 365;
        now.setTime(expireTime);
        document.cookie = name + '=' + value + '; expires=' + now + ';path=/';
    }
    var addEvent = function(element, event, func) {
        if (element.addEventListener) {
            element.addEventListener(event, func);
        } else {
            var oldFunc = element['on' + event];
            element['on' + event] = function() {
                oldFunc.apply(this, arguments);
                func.apply(this, arguments);
            };
        }
    }
    var _removed = false;
    var form_to_submit = document.getElementById('form_1');
    var allInputs = form_to_submit.querySelectorAll('input, select, textarea'),
        tooltips = [],
        submitted = false;

    var getUrlParam = function(name) {
        var regexStr = '[\?&]' + name + '=([^&#]*)';
        var results = new RegExp(regexStr, 'i').exec(window.location.href);
        return results != undefined ? decodeURIComponent(results[1]) : false;
    };

    for (var i = 0; i < allInputs.length; i++) {
        var regexStr = "field\\[(\\d+)\\]";
        var results = new RegExp(regexStr).exec(allInputs[i].name);
        if (results != undefined) {
            allInputs[i].dataset.name = window.cfields[results[1]];
        } else {
            allInputs[i].dataset.name = allInputs[i].name;
        }
        var fieldVal = getUrlParam(allInputs[i].dataset.name);

        if (fieldVal) {
            if (allInputs[i].dataset.autofill === "false") {
                continue;
            }
            if (allInputs[i].type == "radio" || allInputs[i].type == "checkbox") {
                if (allInputs[i].value == fieldVal) {
                    allInputs[i].checked = true;
                }
            } else {
                allInputs[i].value = fieldVal;
            }
        }
    }

    var remove_tooltips = function() {
        for (var i = 0; i < tooltips.length; i++) {
            tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
        }
        tooltips = [];
    };
    var remove_tooltip = function(elem) {
        for (var i = 0; i < tooltips.length; i++) {
            if (tooltips[i].elem === elem) {
                tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
                tooltips.splice(i, 1);
                return;
            }
        }
    };
    var create_tooltip = function(elem, text) {
        var tooltip = document.createElement('div'),
            arrow = document.createElement('div'),
            inner = document.createElement('div'),
            new_tooltip = {};
        if (elem.type != 'radio' && elem.type != 'checkbox') {
            tooltip.className = '_error';
            arrow.className = '_error-arrow';
            inner.className = '_error-inner';
            inner.innerHTML = text;
            tooltip.appendChild(arrow);
            tooltip.appendChild(inner);
            elem.parentNode.appendChild(tooltip);
        } else {
            tooltip.className = '_error-inner _no_arrow';
            tooltip.innerHTML = text;
            elem.parentNode.insertBefore(tooltip, elem);
            new_tooltip.no_arrow = true;
        }
        new_tooltip.tip = tooltip;
        new_tooltip.elem = elem;
        tooltips.push(new_tooltip);
        return new_tooltip;
    };
    var resize_tooltip = function(tooltip) {
        var rect = tooltip.elem.getBoundingClientRect();
        var doc = document.documentElement,
            scrollPosition = rect.top - ((window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0));
        if (scrollPosition < 40) {
            tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _below';
        } else {
            tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _above';
        }
    };
    var resize_tooltips = function() {
        if (_removed) return;
        for (var i = 0; i < tooltips.length; i++) {
            if (!tooltips[i].no_arrow) resize_tooltip(tooltips[i]);
        }
    };
    var validate_field = function(elem, remove) {
        var tooltip = null,
            value = elem.value,
            no_error = true;
        remove ? remove_tooltip(elem) : false;
        if (elem.type != 'checkbox') elem.className = elem.className.replace(/ ?_has_error ?/g, '');
        if (elem.getAttribute('required') !== null) {
            if (elem.type == 'radio' || (elem.type == 'checkbox' && /any/.test(elem.className))) {
                var elems = form_to_submit.elements[elem.name];
                if (!(elems instanceof NodeList || elems instanceof HTMLCollection) || elems.length <= 1) {
                    no_error = elem.checked;
                } else {
                    no_error = false;
                    for (var i = 0; i < elems.length; i++) {
                        if (elems[i].checked) no_error = true;
                    }
                }
                if (!no_error) {
                    tooltip = create_tooltip(elem, "Por favor, selecione uma opção.");
                }
            } else if (elem.type == 'checkbox') {
                var elems = form_to_submit.elements[elem.name],
                    found = false,
                    err = [];
                no_error = true;
                for (var i = 0; i < elems.length; i++) {
                    if (elems[i].getAttribute('required') === null) continue;
                    if (!found && elems[i] !== elem) return true;
                    found = true;
                    elems[i].className = elems[i].className.replace(/ ?_has_error ?/g, '');
                    if (!elems[i].checked) {
                        no_error = false;
                        elems[i].className = elems[i].className + ' _has_error';
                        err.push("Marcar %s é necessário".replace("%s", elems[i].value));
                    }
                }
                if (!no_error) {
                    tooltip = create_tooltip(elem, err.join('<br/>'));
                }
            } else if (elem.tagName == 'SELECT') {
                var selected = true;
                if (elem.multiple) {
                    selected = false;
                    for (var i = 0; i < elem.options.length; i++) {
                        if (elem.options[i].selected) {
                            selected = true;
                            break;
                        }
                    }
                } else {
                    for (var i = 0; i < elem.options.length; i++) {
                        if (elem.options[i].selected && !elem.options[i].value) {
                            selected = false;
                        }
                    }
                }
                if (!selected) {
                    elem.className = elem.className + ' _has_error';
                    no_error = false;
                    tooltip = create_tooltip(elem, "Por favor, selecione uma opção.");
                }
            } else if (value === undefined || value === null || value === '') {
                elem.className = elem.className + ' _has_error';
                no_error = false;
                tooltip = create_tooltip(elem, "Este campo é necessário.");
            }
        }
        if (no_error && elem.name == 'email') {
            if (!value.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)@[a-z0-9-]+(\.[a-z0-9-]+)(\.[a-z]{2,})$/i)) {
                elem.className = elem.className + ' _has_error';
                no_error = false;
                tooltip = create_tooltip(elem, "Digite um e-mail válido");
            }
        }
        if (no_error && /date_field/.test(elem.className)) {
            if (!value.match(/^\d\d\d\d-\d\d-\d\d$/)) {
                elem.className = elem.className + ' _has_error';
                no_error = false;
                tooltip = create_tooltip(elem, "Digite uma data válida.");
            }
        }
        tooltip ? resize_tooltip(tooltip) : false;
        return no_error;
    };
    var needs_validate = function(el) {
        if (el.getAttribute('required') !== null) {
            return true
        }
        if (el.name === 'email' && el.value !== "") {
            return true
        }
        return false
    };
    var validate_form = function(e) {
        var err = form_to_submit.querySelector('._form_error'),
            no_error = true;
        if (!submitted) {
            submitted = true;
            for (var i = 0, len = allInputs.length; i < len; i++) {
                var input = allInputs[i];
                if (needs_validate(input)) {
                    if (input.type == 'text') {
                        addEvent(input, 'blur', function() {
                            this.value = this.value.trim();
                            validate_field(this, true);
                        });
                        addEvent(input, 'input', function() {
                            validate_field(this, true);
                        });
                    } else if (input.type == 'radio' || input.type == 'checkbox') {
                        (function(el) {
                            var radios = form_to_submit.elements[el.name];
                            for (var i = 0; i < radios.length; i++) {
                                addEvent(radios[i], 'click', function() {
                                    validate_field(el, true);
                                });
                            }
                        })(input);
                    } else if (input.tagName == 'SELECT') {
                        addEvent(input, 'change', function() {
                            validate_field(this, true);
                        });
                    } else if (input.type == 'textarea') {
                        addEvent(input, 'input', function() {
                            validate_field(this, true);
                        });
                    }
                }
            }
        }
        remove_tooltips();
        for (var i = 0, len = allInputs.length; i < len; i++) {
            var elem = allInputs[i];
            if (needs_validate(elem)) {
                if (elem.tagName.toLowerCase() !== "select") {
                    elem.value = elem.value.trim();
                }
                validate_field(elem) ? true : no_error = false;
            }
        }
        if (!no_error && e) {
            e.preventDefault();
        }
        resize_tooltips();
        return no_error;
    };
    addEvent(window, 'resize', resize_tooltips);
    addEvent(window, 'scroll', resize_tooltips);
    window._old_serialize = null;
    if (typeof serialize !== 'undefined') window._old_serialize = window.serialize;
    _load_script("//d3rxaij56vjege.cloudfront.net/form-serialize/0.3/serialize.min.js", function() {
        window._form_serialize = window.serialize;
        if (window._old_serialize) window.serialize = window._old_serialize;
    });
    var form_submit = function(e) {
        e.preventDefault();
        if (validate_form()) {
            // use this trick to get the submit button & disable it using plain javascript
            document.querySelector('#_form_1_submit').disabled = true;
            var serialized = form_serialize(document.getElementById('_form_1')).replace(/%0A/g, '\\n');
            var err = form_to_submit.querySelector('._form_error');
            err ? err.parentNode.removeChild(err) : false;
            _load_script('https://zeyfex.activehosted.com/proc.php?' + serialized + '&jsonp=true');
        }
        return false;
    };
    addEvent(form_to_submit, 'submit', form_submit);
})();