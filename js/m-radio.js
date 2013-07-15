jQuery(".toggle-buttons > .m-btn").click(function() {
    jQuery(this).siblings(".m-btn").removeClass("active");
    jQuery(this).addClass("active");
});
