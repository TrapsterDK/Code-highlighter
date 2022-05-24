//https://jsrepos.com/lib/isagalaev-highlight-js-javascript-code-highlighting
// language list hljs.listLanguages()

//api https://highlightjs.readthedocs.io/en/latest/api.html

function highlight_code(){
    $('code').text($('#scode').val())
    hljs.highlightAll();
    console.log(hljs.listLanguages())
    return false;
} 