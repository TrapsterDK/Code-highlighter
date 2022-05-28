//https://www.digitalocean.com/community/tutorials/js-clipboardjs
//https://stackoverflow.com/questions/37381640/tooltips-highlight-animation-with-clipboard-js-click

//enables tooltip and copy functionality for button
function create_copy_button(btn, success_message="Copied!", error_message="Failed to copy! Your browser might not support this feature, try copying manually."){
    //create tooltip elements
    create_tooltip(btn, success_message, true)
    create_tooltip(btn, error_message, false)
    
    //make button copy
    let clipboard = new ClipboardJS(btn);

    clipboard.on('success', function(e) {
        e.clearSelection();
        show_tooltip(btn, true, 1000)
    });

    clipboard.on('error', function(e) {
        show_tooltip(btn, false, 2500)
    });
}