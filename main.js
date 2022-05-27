//https://prismjs.com/

//supported languages
//https://prismjs.com/components.js

//https://github.com/PrismJS/prism/issues/1881
//highlighting function that checks if grammar exists and encodes it based on that
function highlight(code, language) {
	if (Prism.languages[language]) {
		return Prism.highlight(code, Prism.languages[language], language);
	} else {
		return Prism.util.encode(code);
	}
}

//highligts the code input based on parameters
function highlight_code(input){
    let language = $('#language-selector').val()

    // load language even if loaded as it will just return success
    Prism.plugins.autoloader.loadLanguages(language, 
    ()=>{
        let highlighted_input = highlight(input, language)

        let use_line_numbers = $('#line-numbers').prop('checked')
        if(use_line_numbers){
            let start_line = parseInt($('#start-line').val())
            let leading = $('input[name="leading-value"]:checked').val()  

            let highlighted_lines = highlighted_input.split('\n');
            let pad_start = highlighted_lines.length.toString().length;
            
            let highlighted_lines_with_numbers = highlighted_lines.map((line, i) => {
                let line_number = start_line + i
                let padded_line = line_number.toString().padStart(pad_start, leading)
                return `${padded_line} ${line}`
            })

            highlighted_input = highlighted_lines_with_numbers.join('\n')
        }

        $('code').html(highlighted_input)
    }, 
    ()=>{
        $('code').html('<p class="error">An error occured while loading language<p>')
    })
    
    //not to refresh
    return false;
}

$(document).ready(function() {
    $('#theme-selector').change(function(){
        window.set_theme_from_id(this.value)
    })

    $("#highlight").click(function() {
        highlight_code($('#input-code').val())
    });

    window.set_theme_from_id($('#theme-selector').val())
    window.create_tooltip('#copy', "Copied!", "Failed to copy! Your browser might not support this feature")
    highlight_code($('#input-code').attr('placeholder'))
})