'use strict'

function maskFormat(campo_passado, mascara) {
	var campo = campo_passado.value.length;
	var saida = mascara.substring(0,1);
	var texto = mascara.substring(campo);

	if(texto.substring(0,1) != saida) {
		campo_passado.value += texto.substring(0,1);
	}
};

function renderSmartImput(options) {
	var _options = options || {};
	_options.mask = options.mask ;
	_options.regex = options.regex;
	var el = document.getElementById('texto');

	$(el).attr('maxlength', _options.mask.length);
	
	$(el).keypress(function() {
		maskFormat(el, _options.mask);
	});

	$(el).keyup(function() {
		var validacao = el.value.match(_options.regex);
	
		if(el.value.length == _options.mask.length && validacao) {
			$(el).before('<span class="success message">Obrigado por preencher o campo corretamente.</span>');
			$(el).addClass('success');
			if($('.error.message').length) {
				$('.error.message').hide();
			}
		} else if(el.value.length == _options.mask.length && !validacao) {
			$(el).before('<span class="error message">Por favor, preencha o campo corretamente.</span>');
			$(el).addClass('error');
			if($('.success.message').length) {
				$('.success.message').hide();
			}
		}

	});
};

$(document).ready(function() {
	renderSmartImput({
		mask: '9999 9999 9999 9999',
		regex: /(?:[\d]{4}\s){3}[\d]{4}/g
	});
});