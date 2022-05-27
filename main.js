//https://prismjs.com/

//https://prismjs.com/components.js

//3rd party themes
//https://github.com/PrismJS/prism-themes
//https://cdnjs.com/libraries/prism-themes/1.9.0

//supported languages
//https://codepen.io/suin/full/XWmYZXz


//https://www.digitalocean.com/community/tutorials/js-clipboardjs
//https://stackoverflow.com/questions/37381640/tooltips-highlight-animation-with-clipboard-js-click
//copy to clipboard
(function(){
    $( document ).ready(function() {
        $('#copy').tooltip({
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
            e.clearSelection();
            setTooltip(e.trigger, 'Copied!');
            hideTooltip(e.trigger);
        });

        clipboard.on('error', function(e) {
            setTooltip(e.trigger, 'Failed!');
            hideTooltip(e.trigger);
        });
    })
})()

function get_theme_url_from_id(id){
    for (const [key, value] of Object.entries(themes)) {
        if(value.includes(id)) return key;
    }
    return null
}

function set_theme_from_id(id) {
    let link = $('#theme')

    let url = get_theme_url_from_id(id)
    let theme_url = url.replace(/\{id}/g, id);
    
    link.attr('href', theme_url)
};

//non working current themes are defualt, coy
function change_theme() {
    let theme = $('#theme-selector').val()

    set_theme_from_id(theme)
}

//https://github.com/koca/vue-prism-editor/issues/19
var themes = 
{
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/themes/{id}.min.css":[
		"prism",
		"prism-dark",
		"prism-funky",
		"prism-okaidia",
		"prism-twilight",
		"prism-coy",
		"prism-solarizedlight",
		"prism-tomorrow"
    ],
    "https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-{id}.min.css":[
        "a11y-dark",
        "atom-dark",
        "base16-ateliersulphurpool.light",
        "cb",
        "coldark-cold",
        "coldark-dark",
        "coy-without-shadows",
        "darcula",
        "dracula",
        "duotone-dark",
        "duotone-earth",
        "duotone-forest",
        "duotone-light",
        "duotone-sea",
        "duotone-space",
        "ghcolors",
        "gruvbox-dark",
        "gruvbox-light",
        "holi-theme",
        "hopscotch",
        "lucario",
        "material-dark",
        "material-light",
        "material-oceanic",
        "night-owl",
        "nord",
        "one-dark",
        "one-light",
        "pojoaque",
        "shades-of-purple",
        "solarized-dark-atom",
        "synthwave84",
        "vs",
        "vsc-dark-plus",
        "xonokai",
        "z-touch"
    ]
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
function highlight_code(input = null){
    if(input == null) input = $('#input-code').val()

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

set_theme_from_id("prism-tomorrow")

//highlights default placeholder text
window.onload = () => {
    highlight_code($('#input-code').attr('placeholder'))
};