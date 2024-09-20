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


    $(document).ready(function() {

        $('.dismin-modal').on('click', function(){
            $('#payment-modal').modal('hide')
        })
    
        $('.print-bill-btn').on('click', function(){
            // alert("clicked")
            $('.payment-next').click();
            $('.bill-modal-footer').removeClass('d-none')
        })
       
        //sending payment
        $('body').on('click','.payment-next', function(){
            // alert( $(".payment-panel-parent .payment-panel.payment-active-panel").index())
    
            $('.payment-prev').prop('disabled', false)       
            var countTheSteps = parseFloat($(".payment-panel-parent .payment-panel").length);
            var theCurrentIndex= $(".payment-panel-parent .payment-panel.payment-active-panel").index();
            theCurrentIndex=theCurrentIndex+1;
            if(theCurrentIndex!=countTheSteps){
                $('.payment-panel-parent').find('.payment-active-panel').addClass('d-none').removeClass('payment-active-panel').next().removeClass('d-none').addClass('payment-active-panel')
            }
            if (theCurrentIndex==countTheSteps-1) {
                $('.payment-next').addClass('d-none');
            }
    
            // else{
            //     $('.payment-next').addClass('d-none'); 
            // }
              
            
    
        })
    
        $('body').on('click', '.btn-next', function(){
            $(this).siblings('.btn-prev').prop('disabled', false)
            
            var theStepsCont=$(this).parent().parent().siblings('.steps-container')
            var numberOfChildren=theStepsCont.children().length
            var activeStedIndex=theStepsCont.children('.the-step.active').index()
            var activeStep=theStepsCont.children('.the-step.active')
            var nextStep=theStepsCont.children('.the-step.active').index()+1
            if(nextStep!=numberOfChildren){
                activeStep.addClass('d-none').removeClass('active').next().removeClass('d-none').addClass('active')
            }
    
            if(nextStep===numberOfChildren-1){
                $(this).prop('disabled', true).addClass('d-none')
                $(this).siblings('.btn-submit').removeClass('d-none')
            }
    
        })
    
        $('body').on('click', '.btn-prev', function(){
    
            $(this).siblings('.btn-next').prop('disabled', false).removeClass('d-none')
            $(this).siblings('.btn-submit').prop('disabled', false).addClass('d-none')
            
            var theStepsCont=$(this).parent().parent().siblings('.steps-container')
            var numberOfChildren=theStepsCont.children().length
            var activeStedIndex=theStepsCont.children('.the-step.active').index()
            var activeStep=theStepsCont.children('.the-step.active')
            var nextStep=theStepsCont.children('.the-step.active').index()-1
            if(nextStep>-1){
                activeStep.addClass('d-none').removeClass('active').prev().removeClass('d-none').addClass('active')
            }
    
            if(nextStep<1){
                $(this).prop('disabled', true)
               
            }
    
        })
    
        $('body').on('click','.payment-prev', function(){
            $('.payment-next').removeClass('d-none');  
            var countTheSteps = parseFloat($(".payment-panel-parent .payment-panel").length);
            var theCurrentIndex= $(".payment-panel-parent .payment-panel.payment-active-panel").index();
            if(theCurrentIndex!=0){
                $('.payment-panel-parent').find('.payment-active-panel').addClass('d-none').removeClass('payment-active-panel').prev().removeClass('d-none').addClass('payment-active-panel')
                $('.transaction-summary').addClass('d-none')
            }   
            
        });
    
        function containsWordOrSentence(str, wordOrSentence) {
            return str.includes(wordOrSentence);
          }
    
    
        $('body').on('change','#accessible-platforms', function(){
    
           
    
            var theVal=$(this).val()
            var dashboard=containsWordOrSentence(theVal,"County Biller Dashboard")
            var enforcementApp=containsWordOrSentence(theVal,"Collections & Enforcement App")
            var supervisor=containsWordOrSentence(theVal,"Supervision Mobile App")
    
            const dashboardCheckboxes = $('.dashboard-rights input[type="checkbox"]');
            const dashboardCheckboxes2 = $('.dashboard-modules input[type="checkbox"]');
            const enforcementCheckboxes = $('.enforcement-modules input[type="checkbox"]');
            const supervisorCheckboxes = $('.supervisor-modules input[type="checkbox"]');
    
            
            
    
            dashboardCheckboxes.prop('disabled', !dashboard);
            dashboardCheckboxes2.prop('disabled', !dashboard);
    
            enforcementCheckboxes.prop('disabled', !enforcementApp);
            supervisorCheckboxes.prop('disabled', !supervisor);
    
           
    
            
            
        })
    
        $('body').on('change','.check-dash', function(){
           //$('.check-dash').siblings('label').text("Show")
    
           var id = $(this).attr('id');
    
           var isChecked = isCheckboxChecked(id);
    
           if (isChecked) {
                $('.check-dash').siblings('label').text("Hide")
                $('.check-dash').prop("checked", true);
    
                $('.check-dash').siblings('label').text("Show").parent().parent().parent().parent().removeClass('bg-warning').addClass('bg-white').siblings().removeClass('d-none')
            } else {
                $('.check-dash').siblings('label').text("Show").parent().parent().parent().parent().addClass('bg-warning').removeClass('bg-white').siblings().addClass('d-none')
                $('.check-dash').prop("checked", false);
            }
        })
    
        function isCheckboxChecked(checkboxId) {
            var checkbox = document.getElementById(checkboxId);
            if (checkbox) {
              return checkbox.checked;
            } else {
              console.error("Checkbox with ID " + checkboxId + " not found.");
              return false; // Assuming unchecked if the checkbox is not found
            }
          }
          
    
    
        $('.selectpicker').selectpicker();
        $('.selectpicker').selectpicker('render')
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

