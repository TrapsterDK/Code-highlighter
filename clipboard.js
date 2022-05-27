//https://www.digitalocean.com/community/tutorials/js-clipboardjs
//https://stackoverflow.com/questions/37381640/tooltips-highlight-animation-with-clipboard-js-click
//copy to clipboard
(function(){
    function tooltip(e, message, time_ms) {
        let btn = $(e.trigger)

        //clear selection as that is how ClipboardJS works
        e.clearSelection();
        
        //show
        btn.tooltip('hide')
            .attr('data-original-title', message)
            .tooltip('show')

        //hide
        setTimeout(function() {
            btn.tooltip('hide')
        }, time_ms)
    }

    function create_tooltip(btn, success_message="Copied!", error_message="Failed to copy!", placement='buttom'){
        $(btn).tooltip({
            trigger: 'click',
            placement: 'bottom'
        });

        let clipboard = new ClipboardJS(btn);
        
        clipboard.on('success', function(e) {tooltip(e, success_message, 1000)});
        clipboard.on('error', function(e) {tooltip(e, error_message, 2500)});
    }

    //export function
    window.create_tooltip = create_tooltip
})()