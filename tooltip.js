//returns class of tooltip based on whether it is a success tooltip or error tooltip
function get_tooltip_type(type){
    return type ? "tooltip-sucess" : "tooltip-error"
}

//show tool tip for x amount of time
function show_tooltip(btn, type, time_ms = 2500){
    let class_type = get_tooltip_type(type)

    //show
    $(`${btn} > .${class_type}`).css({
        'visibility': 'visible',
        'opacity': '1',
    })

    //hide
    setTimeout(function() {
        $(`${btn} > .${class_type}`).css({
            'visibility': 'hidden',
            'opacity': '0',
        })
    }, time_ms)
}

//creates the tooltip element
function create_tooltip(btn, msg, type){
    $(btn).addClass("tooltip")
    let class_type = get_tooltip_type(type)
    $(btn).append(`<span class="tooltiptext ${class_type}">${msg}</span>`)
}