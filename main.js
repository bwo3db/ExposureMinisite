
$(document).scroll(function() {
    console.log($(document).scrollTop());
    console.log($(document).scrollTop());
    $('#menu').toggle($(this).scrollTop() > 1400);
});
