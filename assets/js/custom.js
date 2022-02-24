$(window).on('load', function() {
    $('body').on('click', '.upload-the-contacts', function() {
        $('.selected-contacts-message').removeClass('d-none')

    })
    $('body').on('click', '.write-msg-btn', function() {
        $('.email-overlay').removeClass('d-none')
        setTimeout(function() {
            $('.the-message-maker').addClass('email-overlay-transform');
        }, 0)

    });
    $('body').on('click', '.close-message-maker', function() {
        $('.the-message-maker').removeClass('email-overlay-transform')
        setTimeout(function() {
            $('.email-overlay').addClass('d-none');
        }, 200);

    });

    $('body').on('click', '.minimize', function() {
        $(this).parent().parent().parent().parent().siblings().toggleClass('d-none');
    });



    //changing the payment method
    $('[name*="payment"]').on('change', function() {
        var paymentOption = $(this).val();
        if (paymentOption == "Mpesa-payment") {
            $('.mpesa-option').removeClass('d-none').siblings().addClass('d-none')

        }
        if (paymentOption == "bank-payment") {
            $('.bank-option').removeClass('d-none').siblings().addClass('d-none')

        }
    })

    // OTP stepper
    function moveToNext(t, u) { 0 < t.value.length && $("#digit" + u + "-input").focus() }
    var count = 1;
    $(".two-step").keyup(function(t) { 0 == count && (count = 1), 8 === t.keyCode ? (5 == count && (count = 3), $("#digit" + count + "-input").focus(), count--) : 0 < count && (count++, $("#digit" + count + "-input").focus()) });
    $('body').on("click", '#datatable-buttons_wrapper td .dropdown>a',
        function() {
            $(this).parent().parent().parent().addClass("highlighted-raw").siblings().removeClass("highlighted-raw");
        });

    $('body').on("hidden.bs.dropdown", '#datatable-buttons_wrapper td .dropdown>a',
        function() {
            $(this).parent().parent().parent().removeClass("highlighted-raw").siblings().removeClass("highlighted-raw");
        });




    $('.selectpicker').selectpicker();


});