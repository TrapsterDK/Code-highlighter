//supported languages
//https://codepen.io/suin/full/XWmYZXz

//https://github.com/PrismJS/prism/issues/1881
function highlight(code, language) {
	if (Prism.languages[language]) {
		return Prism.highlight(code, Prism.languages[language], language);
	} else {
		return Prism.util.encode(code);
	}
}

//https://tutorialmeta.com/question/copy-rich-text-to-clipboard-with-styles-from-css-classes

//https://jsfiddle.net/jdhenckel/km7prgv4/3/
//https://stackoverflow.com/questions/23934656/how-can-i-copy-rich-text-contents-to-the-clipboard-with-javascript
function copyToClip(str) {
    console.log(document.getElementById('code').style);
    function listener(e) {
      e.clipboardData.setData("text/html", str);
      e.clipboardData.setData("text/plain", str);
      e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
  };

function highlight_code(input = null){
    if(input == null) input = $('#scode').val()
    let language = $('#language-selector').val()

    Prism.plugins.autoloader.loadLanguages(language, 
    ()=>{
        let highlighted_code = highlight(input, language)
        let start_line = parseInt($('#start-line').val())

        if($('#line-numbers').prop('checked')){
            let highlighted_lines = highlighted_code.split('\n');
            let highlighted_lines_with_numbers = highlighted_lines.map((line, i) => `${start_line + i} ${line}`)
            highlighted_code = highlighted_lines_with_numbers.join('\n')
        }

        $('code').html(highlighted_code)
    }, 
    ()=>{
        $('code').html('<p class="error">An error occured while loading language<p>')
    })

    return false;
}

window.onload = () => {
    highlight_code($('#scode').attr('placeholder'))
};

/*
#include <stdio.h>;
int main() {
    printf("Hello, World!");
    return 0;
}
*/