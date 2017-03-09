$(document).ready(function(){
    $(".mob-btn").on('click', function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        $(".layout, .top-nav").toggle($(this).hasClass("active"));
    });
    $('.layout').click(function() {
        $(".mob-btn").removeClass("active");
        $(".layout, .top-nav").hide('fast');
    });
});