/*
TODO FIXES
fonts copy paste into word determin size, not possible at the moment

TODO
fix layout
theme for website
line breaking
word paste
check browser support
*/

//https://prismjs.com/

//supported languages
//https://prismjs.com/components.js

/**
  * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
  * 
  * @param {String} text The text to be rendered.
  * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
  * 
  * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
  */
function getTextWidth(text, font) {
    // re-use canvas object for better performance
    const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
}

function getCssStyle(element, prop) {
    return window.getComputedStyle(element, null).getPropertyValue(prop);
}

function getCanvasFontSize(el = document.body) {
    const fontWeight = getCssStyle(el, 'font-weight') || 'normal';
    const fontSize = getCssStyle(el, 'font-size') || '16px';
    const fontFamily = getCssStyle(el, 'font-family') || 'Times New Roman';

    return `${fontWeight} ${fontSize} ${fontFamily}`;
}

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

const DEFAULT_START_LINE = 1

$(document).ready(function() {
    $('#theme-selector').change(function(){
        window.set_theme_from_id(this.value)
    })

    $("#highlight").click(function() {
        highlight_code($('#input-code').val())
    });

    //handles input to only accept numbers
    //losses the up and down button for input as it cannot be number
    $('#start-line').on('input', function() {
        let parsed_input = $(this).val().replace(/\D/g, '')
        this.value = parsed_input
    })

    //set to default if no input
    $('#start-line').focusout(function() {
        $(this).val(parseInt($(this).val()) || DEFAULT_START_LINE)
    })

    window.set_theme_from_id($('#theme-selector').val())
    create_copy_button('#copy')
    highlight_code($('#input-code').attr('placeholder'))
})