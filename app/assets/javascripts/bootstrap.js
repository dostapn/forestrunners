jQuery(function() {
    $("a[rel~=popover], .has-popover").popover();
    $('[data-toggle="tooltip"]').tooltip();

    // Navigation Scripts to Show Header on Scroll-Up
    var MQL = 1170;
    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var prevTop = 0;
        var headerHeight = $(".navbar-custom").height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();
                //check if scrolling up
                if (currentTop < prevTop) {
                    //if scrolling up...
                    if ((currentTop > 0) && $(".navbar-custom").hasClass("is-fixed")) {
                        $(".navbar-custom").addClass("is-visible");
                    } else {
                        $(".navbar-custom").removeClass("is-fixed is-visible");
                    }
                } else {
                    //if scrolling down...
                    $(".navbar-custom").removeClass("is-visible");
                    if (currentTop > headerHeight && !$(".navbar-custom").hasClass("is-fixed")) {
                        $(".navbar-custom").addClass("is-fixed");
                    }
                }
                //console.log("prevTop = " + prevTop);
                //console.log("previousTop = " + this.previousTop);
                //console.log("curentTop = " + currentTop);
                prevTop = this.previousTop;
                this.previousTop = currentTop;
            }
        );
    }
});


