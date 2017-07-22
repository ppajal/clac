jQuery(document).ready(function($) {

    $(document).foundation();
    
    $("#block-clac-main-menu-menu, li").hover(function(){
        $(this).find(".sub-menu").toggle();
    });

});



