'use strict'

function renderSmartImput(options) {
	var _options = options || {};
	_options.mask = options.mask ;
	_options.regex = options.regex;

	var el = $('#texto');
	el.on("keyup", function() {
		var str = el.val();
		var patt = new RegExp(_options.regex);
		var validacao = patt.test(str);
		if(validacao){
			el.before('<span class="success message">Obrigado por preencher o campo corretamente.</span>');
			el.addClass('success');

		} else {
			el.before('<span class="error message">Por favor, preencha o campo corretamente.</span>');
			el.addClass('error');
			 $(".message").fadeOut(1000);
		}
	});

	el.inputmask(_options.mask);
};

$(document).ready(function() {
	renderSmartImput({
		mask: '9999 9999 9999 9999',
		regex: "([0-9]{4})( [0-9]{4})( [0-9]{4})( [0-9]{4})"
	});
});