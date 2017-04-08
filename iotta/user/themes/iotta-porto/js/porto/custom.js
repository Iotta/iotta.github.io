// Contact form submit to Firebase
$('#contactForm').validate({
    submitHandler: function (form) {
        var $messageSuccess = $('#contactSuccess');
        var $messageError = $('#contactError');
        var myDataRef = new Firebase('https://iottainterest.firebaseio.com/');

        myDataRef.push(
                {
                    date: new Date(),
                    type: "Contact request",
                    name: $("#name").val(),
                    email: $("#email").val(),
                    phone: $("#phone").val()
                },
                function (error) {
                    if (error) {
                        $messageSuccess.addClass('hidden');
                        $messageError.removeClass('hidden');
                    } else {
                        $messageSuccess.removeClass('hidden');
                        $messageError.addClass('hidden');
                    }
                }
        );

    }
});

// Newsletter form submit to Firebase
$('#newsletterForm').validate({
    submitHandler: function (form) {
        var $messageSuccess = $('#newsletterSuccess');
        var $messageError = $('#newsletterError');
        var myDataRef = new Firebase('https://iottainterest.firebaseio.com/');

        myDataRef.push(
                {date: new Date(), type: "Newsletter subscription", email: $("#newsletterEmail").val()},
                function (error) {
                    if (error) {
                        $messageSuccess.addClass('hidden');
                        $messageError.removeClass('hidden');
                    } else {
                        $messageSuccess.removeClass('hidden');
                        $messageError.addClass('hidden');
                    }
                }
        );

    }
});


// Anchor scrolling
// var timeout = 600;
// var header = 75;
// var adjustzone = 100;
// var timer;
// $(window).scroll(function (event) {
//     clearTimeout(timer);
//     timer = setTimeout(function () {
//         $(".anchor").each(function () {
//             var scrollTop = $(window).scrollTop() + header;
//             var offset = $(this).offset().top;
//             if (offset - scrollTop < adjustzone && offset - scrollTop > -adjustzone) {
//                 $('html,body').animate({scrollTop: $(this).offset().top - header}, 'slow');
//                 return;
//             }
//         });
//     }, timeout);
// });

// Google Analytics
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

// Production
ga('create', 'UA-73714609-1', 'auto');

// Test
//    ga('create', 'UA-73714609-2', 'auto');

ga('send', 'pageview');
