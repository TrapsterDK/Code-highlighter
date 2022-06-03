//https://github.com/koca/vue-prism-editor/issues/19
//https://prismjs.com/
//https://github.com/PrismJS/prism-themes
(function(){
    //theme url lookup dictionary
    var themes = 
    {
        "https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/themes/{id}.min.css":[
            "prism",
            "prism-dark",
            "prism-funky",
            "prism-okaidia",
            "prism-twilight",
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

    //url for id from dictionary
    function get_theme_url_from_id(id){
        for (const [key, value] of Object.entries(themes)) {
            if(value.includes(id)) return key;
        }
        return null
    }

    //changes theme
    function set_theme_from_id(id) {
        let link = $('#theme')

        let url = get_theme_url_from_id(id)
        let theme_url = url.replace(/\{id}/g, id);

        //copy and paste of font into word
        $('code').each(function(){
            $(this).css({ 'font-family': `${$('pre').css('font-family')} !important` })
        })

        link.attr('href', theme_url)
    };

    //export function
    window.set_theme_from_id = set_theme_from_id
})()