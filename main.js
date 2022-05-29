/*
TODO FIXES
fonts copy paste into word determin size, not possible at the moment

TODO
fix layout
theme for website
line breaking for formatted code
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

//https://stackoverflow.com/questions/4793604/how-to-insert-an-element-after-another-element-in-javascript-without-using-a-lib
function insert_node_after(new_node, reference_node) {
    reference_node.parentNode.insertBefore(new_node, reference_node.nextSibling);
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

            //Fixes multiline string, comments and such before doing add line number
            var parser = new DOMParser();
            var temp_doc = parser.parseFromString(highlighted_input, 'text/html');
            
            // loop through all elements of temp doc
            for (let i = 0; i < temp_doc.body.children.length; i++) {
                let element = temp_doc.body.children[i]
                let lines = element.innerHTML.split('\n')

                //if less than 1 line or 1 line because then there we dont have to unpack html tags
                if(1 >= lines.length) continue
                
                let last_element = element
                for (line of lines) {
                    //clone
                    new_elm = last_element.cloneNode(false)
                    //set innerHTML to line
                    new_elm.innerHTML = line
                    //insert after last element
                    insert_node_after(new_elm, last_element)
                    //insert new line
                    insert_node_after(document.createTextNode('\n'), last_element)
                    last_element = new_elm
                }

                //remove \n after orignal element
                element.nextSibling.remove()
                // remove original node
                element.remove()
            }

            let temp_doc_string = temp_doc.body.innerHTML

            let highlighted_lines = temp_doc_string.split('\n');
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

const MIN_START_LINE = 1

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
        $(this).val(parseInt($(this).val()) || MIN_START_LINE)
    })

    /*different elements should maybe be split up, not a priority*/
    //saves option for different elements
    $('.save-option').change(function(){
        if(this.type === "checkbox"){
            var set_val = $(this).prop('checked')
        }else {
            set_val = this.value
        }

        localStorage.setItem(this.id, set_val)
    })

    //file uploading
    $('#upload-file').change(function(){
        var file = this.files[0];
        
        if (file) {
            //read file
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");

            reader.onload = function (e) {
                //set source code field to file content
                $('#input-code').val(e.target.result)
                
                show_tooltip('#label-upload-file', true)

                //determine language
                let file_extension = file.name.split(".").pop()
                let language = window.get_language_from_extension(file_extension)
                
                //set selector
                if(language !== null) $('#language-selector').val(language)

            }

            reader.onerror = function (e) {
                show_tooltip('#label-upload-file', false)
            }
        }
    })

    //localstorage options
    $('.save-option').each(function() {
        let saved_value = localStorage.getItem(this.id)
        if(saved_value === null) return

        //handles loading values into different elements
        switch(this.type) {
            case "checkbox":
                $(this).prop('checked', JSON.parse(saved_value))
                break;
            case "radio":
                if($(this).val() === saved_value) 
                    $(this).prop('checked', true)
                break;
            default:
                $(this).val(saved_value)
        }
    })

    create_tooltip('#label-upload-file', 'Successfully uploaded!', true)
    create_tooltip('#label-upload-file', 'Failed to upload!', false)

    window.set_theme_from_id($('#theme-selector').val())
    create_copy_button('#copy')
    highlight_code($('#input-code').attr('placeholder'))
})