//https://jsrepos.com/lib/isagalaev-highlight-js-javascript-code-highlighting
// Prism.languages
//api https://highlightjs.readthedocs.io/en/latest/api.html

//https://github.com/PrismJS/prism/issues/1424

//https://github.com/PrismJS/prism/blob/master/plugins/autoloader/prism-autoloader.js

//https://cdn.jsdelivr.net/npm/prismjs@1.28.0/components/

//https://github.com/PrismJS/prism/issues/1881
function highlight(code, language) {
	if (Prism.languages[language]) {
		return Prism.highlight(code, Prism.languages[language], language);
	} else {
		return Prism.util.encode(code);
	}
}

function highlight_code(input = null){
    if(input == null) input = $('#scode').val()
    let highlight = Prism.highlight(input, Prism.languages.javascript, 'javascript')
    console.log(Prism.plugins.autoloader.languages_path)
    $('code').html(highlight)
    return false;
}

window.onload = () => {
    highlight_code($('#scode').attr('placeholder'))
};

/*
#include &lt;stdio.h&gt;
int main() {
    printf("Hello, World!");
    return 0;
}
*/