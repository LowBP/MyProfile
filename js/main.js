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
                    const serviceID = 'default_service';
                    const templateID = 'template_c2jal1m';
                    emailjs.sendForm(serviceID, templateID, this).then((res) => {
                        if (res.status === 200) {
                            (a("#contact_form")
                                .find(".messages")
                                .html('<div class="alert ' + 'alert-success' + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + 'Details have been Delivered!' + "</div>"),
                                a("#contact_form")[0].reset())
                        }
                    }, (err) => {
                        (a("#contact_form")
                            .find(".messages")
                            .html('<div class="alert ' + 'alert-error' + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + 'Error submitting form. Please try again..' + "</div>"),
                            a("#contact_form")[0].reset())
                    });
                    d.preventDefault();
                    return;
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
