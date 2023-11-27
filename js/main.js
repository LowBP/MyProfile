(function (a) {
    "use strict";
    function b() {
        var d = a(".portfolio-grid"),
            f = a(".portfolio-filters");
        d &&
            (d.shuffle({ speed: 450, itemSelector: "figure" }),
                f.on("click", ".filter", function (g) {
                    d.shuffle("update"), g.preventDefault(), a(".portfolio-filters .filter").parent().removeClass("active"), a(this).parent().addClass("active"), d.shuffle("shuffle", a(this).attr("data-group"));
                }));
    }
    function c() {
        var d = a(window).width(),
            f = a("#site_header");
        992 > d
            ? (f.addClass("mobile-menu-hide"),
                setTimeout(function () {
                    f.addClass("animate");
                }, 500))
            : f.removeClass("animate");
    }
    a(function () {
        a("#contact_form").validator(),
            a("#contact_form").on("submit", function (d) {
                if (!d.isDefaultPrevented()) {
                    const formList = a(this).serialize().split('&');
                    const data = JSON.stringify({
                        "Messages": [{
                            "From": { "Email": formList[1].split('=')[1], "Name": formList[0].split('=')[1] },
                            "To": [{ "Email": 'pranavvenkitesan@gmail.com', "Name": 'Pranav Venkitesan' }],
                            "Subject": formList[2].split('=')[1],
                            "TextPart": formList[3].split('=')[1]
                        }]
                    });

                    const config = {
                        method: 'post',
                        url: 'https://api.mailjet.com/v3.1/send',
                        data: data,
                        headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept" },
                        auth: { username: '65b177a94b446533179638599303b2b2', password: 'da48ab1d167574d8055c2b7bb00de986' },
                    };
                    return a.ajax({
                        ...config,
                        success: function (g) {
                            var h = "alert-" + g.type,
                                i = g.message;
                            h &&
                                i &&
                                (a("#contact_form")
                                    .find(".messages")
                                    .html('<div class="alert ' + h + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + i + "</div>"),
                                    a("#contact_form")[0].reset());
                        },
                        error: function (err) {
                            console.log(err);
                        }
                    }

                    )

                }
            });
    }),
        a(window)
            .on("load", function () {
                a(".preloader").fadeOut(800, "linear");
                var d = a(".subpages");
                d[0] && PageTransitions.init({ menu: "ul.site-main-menu" });
            })
            .on("resize", function () {
                c();
            }),
        a(document).on("ready", function () {
            var d = a(".portfolio-grid");
            d.imagesLoaded(function () {
                b(this);
            });
            var f = a(".blog-masonry");
            f.imagesLoaded(function () {
                f.masonry();
            }),
                a(".menu-toggle").on("click", function () {
                    a("#site_header").addClass("animate"), a("#site_header").toggleClass("mobile-menu-hide");
                }),
                a(".site-main-menu").on("click", "a", function () {
                    c();
                }),
                a(".sidebar-toggle").on("click", function () {
                    a("#blog-sidebar").toggleClass("open");
                }),
                a(".testimonials.owl-carousel").owlCarousel({ nav: !0, items: 3, loop: !1, navText: !1, margin: 25, responsive: { 0: { items: 1 }, 480: { items: 1 }, 768: { items: 2 }, 1200: { items: 2 } } }),
                a(".clients.owl-carousel")
                    .imagesLoaded()
                    .owlCarousel({ nav: !0, items: 2, loop: !1, navText: !1, margin: 10, autoHeight: !1, responsive: { 0: { items: 2 }, 768: { items: 4 }, 1200: { items: 6 } } }),
                a(".text-rotation").owlCarousel({ loop: !0, dots: !1, nav: !1, margin: 0, items: 1, autoplay: !0, autoplayHoverPause: !1, autoplayTimeout: 3800, animateOut: "zoomOut", animateIn: "zoomIn" }),
                a("body").magnificPopup({
                    delegate: "a.lightbox",
                    type: "image",
                    removalDelay: 300,
                    mainClass: "mfp-fade",
                    image: { titleSrc: "title", gallery: { enabled: !0 } },
                    iframe: {
                        markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title mfp-bottom-iframe-title"></div></div>',
                        patterns: {
                            youtube: { index: "youtube.com/", id: null, src: "%id%?autoplay=1" },
                            vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" },
                            gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
                        },
                        srcAction: "iframe_src",
                    },
                    callbacks: {
                        markupParse: function (g, h, i) {
                            h.title = i.el.attr("title");
                        },
                    },
                }),
                a(".ajax-page-load-link").magnificPopup({ type: "ajax", removalDelay: 300, mainClass: "mfp-fade", gallery: { enabled: !0 } }),
                a(".form-control")
                    .val("")
                    .on("focusin", function () {
                        a(this).parent(".form-group").addClass("form-group-focus");
                    })
                    .on("focusout", function () {
                        0 === a(this).val().length && a(this).parent(".form-group").removeClass("form-group-focus");
                    }),
                a("#map").googleMap({ zoom: 16 }),
                a("#map").addMarker({ address: "S601 Townsend Street, San Francisco, California, USA" });
        });
})(jQuery);
