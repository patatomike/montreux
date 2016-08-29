 console.log('\'Allo \'Allo!');

$('a[href=\'#contact\']').click(function() {
  var messageCore = 'de soin';
  if($(this).hasClass('hypnose')){
    messageCore = 'de guérison et d\'épanouissement grâce à l\'hypnose';
    $('.hypnose-checkbox').prop('checked', true);
  }
  if($(this).hasClass('hypnose-stop-tabac')){
    messageCore = 'de libération du tabac sans peine et définitivement par l\'hypnose';
    $('.hypnose-checkbox').prop('checked', true);
  }
  if($(this).hasClass('hypnose-maigrir')){
    messageCore = 'de stabilisation de mon poids grâce à l\'hypnose';
    $('.hypnose-checkbox').prop('checked', true);
  }
  if($(this).hasClass('eft')){
    messageCore = 'de guérison et d\'épanouissement grâce aux techniques EFT';
    $('.eft-checkbox').prop('checked', true);
  }
  if($(this).hasClass('massage-reflexologie')){
    messageCore = 'd\'autoguérison grâce à la réflexologie';
    $('.massage-checkbox').prop('checked', true);
  }
  if($(this).hasClass('massage-drainage-lymphatique')){
    messageCore = 'de drainage lymphatique';
    $('.massage-checkbox').prop('checked', true);
  }
  if($(this).hasClass('massage-energie')){
    messageCore = 'de réequilibrage d\'énérgie';
    $('.massage-checkbox').prop('checked', true);
  }
  if($(this).hasClass('massage-lomi-lomi')){
    messageCore = 'de magnifique massages Hawaïen';
    $('.massage-checkbox').prop('checked', true);
  }
  var message ='J\'aimerais prendre rendez-vous pour une séance '+messageCore+', de préférence le 02 juillet à 16h';
  $('.demande').text(message);
    $('html, body').animate({
        scrollTop: $('#contact').offset().top - 75
    }, 2000);
    $('#exampleInputName1').focus();
});

  $('.alert').hide();

  $('#contact-us-btn').click(function() {

    if($('#exampleInputEmail1').val()!==''){
      $('.alert-success').show('slow');
    }

  });

  /*$('.nav-section').click(function() {
    if($('.nav-section').hasClass('focus')){
      $('.nav-section').removeCss('focus');
    }
    $(this).addClass('focus');

  });*/


  $('a[href^=\'#\']').on('click', function(e) {

   e.preventDefault();

   // store hash
   var hash = this.hash;
   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top - 75
     }, 1000, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 400;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        });

    });

});
