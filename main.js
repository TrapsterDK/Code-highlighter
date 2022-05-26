//https://www.digitalocean.com/community/tutorials/js-clipboardjs
//https://stackoverflow.com/questions/37381640/tooltips-highlight-animation-with-clipboard-js-click
//clipboard
(function(){
    $( document ).ready(function() {
        $('.copy').tooltip({
            trigger: 'click',
            placement: 'bottom'
        });

        function setTooltip(btn, message) {
            $(btn).tooltip('hide')
              .attr('data-original-title', message)
              .tooltip('show');
          }
          
          function hideTooltip(btn) {
            setTimeout(function() {
              $(btn).tooltip('hide');
            }, 1000);
          }

        var clipboard = new ClipboardJS('#copy');

        clipboard.on('success', function(e) {
            setTooltip(e.trigger, 'Copied!');
            hideTooltip(e.trigger);
        });

        clipboard.on('error', function(e) {
            setTooltip(e.trigger, 'Failed!');
            hideTooltip(e.trigger);
        });

        /*
        clipboard.on('success', function(e) {
            e.clearSelection();
            console.log(e.trigger)
            setTooltip(e.trigger, 'Copied!')
            hideTooltip(e.trigger)
            $('#copy').tooltip('show')
        })*/
    })
})()

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