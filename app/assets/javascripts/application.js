/* global $ */

// VALIDATION

// Find a service
$('#find-a-service .govuk-button').click(function( event ) {
  var serviceSearch = $('#service-search').val();
  // text input left blank
  if (serviceSearch == ""){
      var errorMessage = "Enter the name of a service, its address, postcode or a combination of these";
      var errorID = "service-search-error-empty";
      $("#service-search-error-empty").remove();
      $("#service-search-error-length").remove();
      $(".govuk-error-summary").remove();
      $('#service-search').before('<span id="' + errorID + '" class="govuk-error-message govuk-!-width-two-thirds"><span class="govuk-visually-hidden">Error:</span> ' + errorMessage + '</span>');
      $('.govuk-form-group').addClass("govuk-form-group--error");
      $('#service-search').addClass("govuk-input--error");
      $('h1').before('<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary"><h2 class="govuk-error-summary__title" id="error-summary-title">There&apos;s a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#' + errorID + '">' + errorMessage + '</a></li></ul></div></div>');
      event.preventDefault();
    // check if too too long
  } else if (serviceSearch.length > 1000){
      var errorMessage = "Your search must be 1,000 characters or less";
      var errorID = "service-search-error-length";
      $("#service-search-error-empty").remove();
      $("#service-search-error-length").remove();
      $('#service-search').before('<span id="' + errorID + '" class="govuk-error-message govuk-!-width-two-thirds"><span class="govuk-visually-hidden">Error:</span> ' + errorMessage + '</span>');
      $('.govuk-form-group').addClass("govuk-form-group--error");
      $('#service-search').addClass("govuk-input--error");
      $('h1').before('<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary"><h2 class="govuk-error-summary__title" id="error-summary-title">There&apos;s a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#' + errorID + '">' + errorMessage + '</a></li></ul></div></div>');
      event.preventDefault();
    } else {
      $(this).trigger('click');
    }
})

// Tell us which service
$('#tell-us-which-service .govuk-button').click(function( event ) {
  var describeService = $('#describe-service').val();
  // textarea left blank
  if (describeService == ""){
      var errorMessage = "Tell us which service your feedback is about";
      var errorID = "describe-service-error";
      $("#describe-service-error").remove();
      $(".govuk-error-summary").remove();
      $('#describe-service').before('<span id="' + errorID + '" class="govuk-error-message"><span class="govuk-visually-hidden">Error:</span> ' + errorMessage + '</span>');
      $('.govuk-form-group').addClass("govuk-form-group--error");
      $('#describe-service').addClass("govuk-textarea--error");
      $('.govuk-form-group').before('<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary"><h2 class="govuk-error-summary__title" id="error-summary-title">There&apos;s a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#' + errorID + '">' + errorMessage + '</a></li></ul></div></div>');
      event.preventDefault();
      // check if too too long
    } else if (describeService.length > 1500){
        var errorMessage = "Enter 1,500 characters or less";
        var errorID = "describe-service-error-length";
        $("#describe-service-error-empty").remove();
        $("#describe-service-error-length").remove();
        $('#describe-service').before('<span id="' + errorID + '" class="govuk-error-message"><span class="govuk-visually-hidden">Error:</span> ' + errorMessage + '</span>');
        $('.govuk-form-group').addClass("govuk-form-group--error");
        $('#describe-service').addClass("govuk-textarea--error");
        $('.govuk-form-group').before('<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary"><h2 class="govuk-error-summary__title" id="error-summary-title">There&apos;s a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#' + errorID + '">' + errorMessage + '</a></li></ul></div></div>');
        event.preventDefault();
      } else {
        $(this).trigger('click');
      }
  })

// Type of experience
$('#what-you-want-to-tell .govuk-button').click(function( event ) {
  // radio button checked
  if ($("input").is(':checked')){
    $(this).trigger('click');
  } else {
    var errorMessage = "Select the type of feedback you want to give - just choose whichever describes your experience best";
    var errorID = "what-do-you-want-to-tell-error";
    $("#what-do-you-want-to-tell-error").remove();
    $(".govuk-error-summary").remove();
    $('legend').after('<span id="' + errorID + '" class="govuk-error-message"><span class="govuk-visually-hidden">Error:</span> ' + errorMessage + '</span>');
    $('.govuk-form-group').before('<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary"><h2 class="govuk-error-summary__title" id="error-summary-title">There&apos;s a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#' + errorID + '">' + errorMessage + '</a></li></ul></div></div>');
    $('.govuk-form-group').addClass("govuk-form-group--error");
    $('.govuk-fieldset').attr( "aria-describedby", "experience-type-error");
    event.preventDefault();
  }
})

// When did it happen
$('#when-it-happened .govuk-button').click(function( event ) {
  // radio button checked
  if ($("input").is(':checked')){
    $(this).trigger('click');
  } else {
    var errorMessage = "Select when it happened - just choose the option that describes your experience best";
    var errorID = "when-did-it-happen-error";
    $("#when-did-it-happen-error").remove();
    $(".govuk-error-summary").remove();
    $('legend').after('<span id="' + errorID + '" class="govuk-error-message"><span class="govuk-visually-hidden">Error:</span> ' + errorMessage + '</span>');
    $('.govuk-form-group').before('<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary"><h2 class="govuk-error-summary__title" id="error-summary-title">There&apos;s a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#' + errorID + '">' + errorMessage + '</a></li></ul></div></div>');
    $('.govuk-form-group').addClass("govuk-form-group--error");
    $('.govuk-fieldset').attr( "aria-describedby", "error-when-empty");
    event.preventDefault();
  }
})

// Abuse or neglect
$('#abuse-or-neglect .govuk-button').click(function( event ) {
  // radio button checked
  if ($("input").is(':checked')){
    $(this).trigger('click');
  } else {
    var errorMessage = "Select if you think someone is in danger of abuse or neglect";
    var errorID = "is-someone-at-risk-error";
    $("#is-someone-at-risk-error").remove();
    $(".govuk-error-summary").remove();
    $('.govuk-radios').before('<span id="' + errorID + '" class="govuk-error-message"><span class="govuk-visually-hidden">Error:</span> ' + errorMessage + '</span>');
    $('.govuk-form-group').before('<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary"><h2 class="govuk-error-summary__title" id="error-summary-title">There&apos;s a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#' + errorID + '">' + errorMessage + '</a></li></ul></div></div>');
    $('.govuk-form-group').addClass("govuk-form-group--error");
    $('.govuk-fieldset').attr( "aria-describedby", "error-when-empty");
    event.preventDefault();
  }
})

// Police and local council

$('#police-and-local-council .govuk-button').click(function( event ) {
  // radio button checked
  if ($("input").is(':checked')){
    $(this).trigger('click');
  } else {
    var errorMessage = "Select if you've told the police or local council safeguarding team";
    var errorID = "police-and-local-council-error";
    $("#police-and-local-council-error").remove();
    $(".govuk-error-summary").remove();
    $('.govuk-radios').before('<span id="' + errorID + '" class="govuk-error-message"><span class="govuk-visually-hidden">Error:</span> ' + errorMessage + '</span>');
    $('.govuk-form-group').before('<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary"><h2 class="govuk-error-summary__title" id="error-summary-title">There&apos;s a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#' + errorID + '">' + errorMessage + '</a></li></ul></div></div>');
    $('.govuk-form-group').addClass("govuk-form-group--error");
    $('.govuk-fieldset').attr( "aria-describedby", "error-when-empty");
    event.preventDefault();
  }
})

// Give your feedback
$('#give-your-feedback-form .govuk-button').click(function( event ) {
  var yourFeedback = $('#give-your-feedback').val();
  // textarea left blank
  if (yourFeedback == ""){
      var errorMessage = "Enter your feedback";
      var errorID = "feedback-error-empty";
      $("#feedback-error-empty").remove();
      $(".govuk-error-summary").remove();
      $('#give-your-feedback').before('<span id="' + errorID + '" class="govuk-error-message"><span class="govuk-visually-hidden">Error:</span> ' + errorMessage + '</span>');
      $('.give-your-feedback').addClass("govuk-form-group--error");
      $('#give-your-feedback').addClass("govuk-textarea--error");
      $('form').before('<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary"><h2 class="govuk-error-summary__title" id="error-summary-title">There&apos;s a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#' + errorID + '">' + errorMessage + '</a></li></ul></div></div>');
      event.preventDefault();
    } else {
      $(this).trigger('click');
    }
})

$('#have-you-told-the-service .govuk-button').click(function( event ) {
  // radio button checked
  if ($("input").is(':checked')){
    $(this).trigger('click');
  } else {
    var errorMessage = "Select if you've already told the service you're not happy";
    var errorID = "have-you-told-the-service-error";
    $("#have-you-told-the-service-error").remove();
    $(".govuk-error-summary").remove();
    $('.govuk-radios').before('<span id="' + errorID + '" class="govuk-error-message"><span class="govuk-visually-hidden">Error:</span> ' + errorMessage + '</span>');
    $('.govuk-form-group').before('<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary"><h2 class="govuk-error-summary__title" id="error-summary-title">There&apos;s a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#' + errorID + '">' + errorMessage + '</a></li></ul></div></div>');
    $('.govuk-form-group').addClass("govuk-form-group--error");
    $('.govuk-fieldset').attr( "aria-describedby", "error-when-empty");
    event.preventDefault();
  }
})

$('#have-you-worked-there .govuk-button').click(function( event ) {
  // radio button checked
  if ($("input").is(':checked')){
    $(this).trigger('click');
  } else {
    var errorMessage = "Select if your feedback is about somewhere you've worked";
    var errorID = "worked-there-error";
    $("#worked-there-error").remove();
    $(".govuk-error-summary").remove();
    $('.govuk-radios').before('<span id="' + errorID + '" class="govuk-error-message"><span class="govuk-visually-hidden">Error:</span> ' + errorMessage + '</span>');
    $('.govuk-form-group').before('<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary"><h2 class="govuk-error-summary__title" id="error-summary-title">There&apos;s a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#' + errorID + '">' + errorMessage + '</a></li></ul></div></div>');
    $('.govuk-form-group').addClass("govuk-form-group--error");
    $('.govuk-fieldset').attr( "aria-describedby", "error-when-empty");
    event.preventDefault();
  }
})

$('#have-you-worked-there .govuk-button').click(function( event ) {
  // radio button checked
  if ($("input").is(':checked')){
    $(this).trigger('click');
  } else {
    var errorMessage = "Select if your feedback is about somewhere you've worked";
    var errorID = "worked-there-error";
    $("#worked-there-error").remove();
    $(".govuk-error-summary").remove();
    $('.govuk-radios').before('<span id="' + errorID + '" class="govuk-error-message"><span class="govuk-visually-hidden">Error:</span> ' + errorMessage + '</span>');
    $('.govuk-form-group').before('<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary"><h2 class="govuk-error-summary__title" id="error-summary-title">There&apos;s a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#' + errorID + '">' + errorMessage + '</a></li></ul></div></div>');
    $('.govuk-form-group').addClass("govuk-form-group--error");
    $('.govuk-fieldset').attr( "aria-describedby", "error-when-empty");
    event.preventDefault();
  }
})

$('#can-we-share .govuk-button').click(function( event ) {
  // radio button checked
  if ($("input").is(':checked')){
    $(this).trigger('click');
  } else {
    var errorMessage = "Select if you're happy for us to share your feedback with the service";
    var errorID = "can-we-share-error";
    $("#can-we-share-error").remove();
    $(".govuk-error-summary").remove();
    $('.govuk-radios').before('<span id="' + errorID + '" class="govuk-error-message"><span class="govuk-visually-hidden">Error:</span> ' + errorMessage + '</span>');
    $('.govuk-form-group').before('<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary"><h2 class="govuk-error-summary__title" id="error-summary-title">There&apos;s a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#' + errorID + '">' + errorMessage + '</a></li></ul></div></div>');
    $('.govuk-form-group').addClass("govuk-form-group--error");
    $('.govuk-fieldset').attr( "aria-describedby", "error-when-empty");
    event.preventDefault();
  }
})

$('#can-we-contact-you .govuk-button').click(function( event ) {
  // radio button checked
  if ($("input").is(':checked')){
    $(this).trigger('click');
  } else {
    var errorMessage = "Select if you're happy for us to contact you";
    var errorID = "can-we-contact-you-error";
    $("#can-we-contact-you-error").remove();
    $(".govuk-error-summary").remove();
    $('.govuk-radios').before('<span id="' + errorID + '" class="govuk-error-message"><span class="govuk-visually-hidden">Error:</span> ' + errorMessage + '</span>');
    $('.govuk-form-group').before('<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary"><h2 class="govuk-error-summary__title" id="error-summary-title">There&apos;s a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#' + errorID + '">' + errorMessage + '</a></li></ul></div></div>');
    $('.govuk-form-group').addClass("govuk-form-group--error");
    $('.govuk-fieldset').attr( "aria-describedby", "error-when-empty");
    event.preventDefault();
  }
})

// Contact details
$('#contact-details-form .govuk-button').click(function( event ) {
  var fullName = $('#full-name').val();
  var contactEmail = $('#contact-email').val();
  var contactPhone = $('#contact-phone').val();
  // text input left blank
  if ((fullName == "") && ((contactEmail != "") || (contactPhone != ""))) {
      var errorMessage = "Enter your name";
      var errorID = "full-name-error-empty";
      $("#full-name-error-empty").remove();
      $("#email-phone-error-empty").remove();
      $(".govuk-error-summary").remove();
      $('#full-name').before('<span id="' + errorID + '" class="govuk-error-message govuk-!-width-two-thirds"><span class="govuk-visually-hidden">Error:</span> ' + errorMessage + '</span>');
      $('.govuk-form-group.email-phone-group').removeClass("govuk-form-group--error");
      $('.govuk-form-group.full-name-group').addClass("govuk-form-group--error");
      $('#contact-email').removeClass("govuk-input--error");
      $('#contact-phone').removeClass("govuk-input--error");
      $('#full-name').addClass("govuk-input--error");
      $('h1').before('<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary"><h2 class="govuk-error-summary__title" id="error-summary-title">There&apos;s a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#' + errorID + '">' + errorMessage + '</a></li></ul></div></div>');
      event.preventDefault();
    } else if ((fullName != "") && (contactEmail == "") && (contactPhone == "")) {
      var errorMessage = "You must enter either an email address or a telephone number";
      var errorID = "email-phone-error-empty";
      $("#full-name-error-empty").remove();
      $("#email-phone-error-empty").remove();
      $(".govuk-error-summary").remove();
      $('.govuk-form-group.email-phone-group').before('<span id="' + errorID + '" class="govuk-error-message govuk-!-width-two-thirds"><span class="govuk-visually-hidden">Error:</span> ' + errorMessage + '</span>');
      $('.govuk-form-group.full-name-group').removeClass("govuk-form-group--error");
      $('.govuk-form-group.email-phone-group').addClass("govuk-form-group--error");
      $('#full-name').removeClass("govuk-input--error");
      $('#contact-email').addClass("govuk-input--error");
      $('#contact-phone').addClass("govuk-input--error");
      $('h1').before('<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary"><h2 class="govuk-error-summary__title" id="error-summary-title">There&apos;s a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#' + errorID + '">' + errorMessage + '</a></li></ul></div></div>');
      event.preventDefault();
    } else if ((fullName == "") && (contactEmail == "") && (contactPhone == "")) {
      var errorMessage1 = "Enter your name";
      var errorMessage2 = "You must enter either an email address or a telephone number";
      var errorID1 = "full-name-error-empty";
      var errorID2 = "email-phone-error-empty";
      $("#full-name-error-empty").remove();
      $("#email-phone-error-empty").remove();
      $(".govuk-error-summary").remove();
      $('#full-name').before('<span id="' + errorID1 + '" class="govuk-error-message govuk-!-width-two-thirds"><span class="govuk-visually-hidden">Error:</span> ' + errorMessage1 + '</span>');
      $('.govuk-form-group.email-phone-group').before('<span id="' + errorID2 + '" class="govuk-error-message govuk-!-width-two-thirds"><span class="govuk-visually-hidden">Error:</span> ' + errorMessage2 + '</span>');
      $('.govuk-form-group.full-name-group').removeClass("govuk-form-group--error");
      $('.govuk-form-group.email-phone-group').removeClass("govuk-form-group--error");
      $('.govuk-form-group.full-name-group').addClass("govuk-form-group--error");
      $('.govuk-form-group.email-phone-group').addClass("govuk-form-group--error");
      $('#full-name').removeClass("govuk-input--error");
      $('#contact-email').removeClass("govuk-input--error");
      $('#contact-phone').removeClass("govuk-input--error");
      $('#full-name').addClass("govuk-input--error");
      $('#contact-email').addClass("govuk-input--error");
      $('#contact-phone').addClass("govuk-input--error");
      $('h1').before('<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary"><h2 class="govuk-error-summary__title" id="error-summary-title">There&apos;s a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#' + errorID1 + '">' + errorMessage1 + '</a></li><li><a href="#' + errorID2 + '">' + errorMessage2 + '</a></li></ul></div></div>');
      event.preventDefault();
    } else {
      $(this).trigger('click');
    }
})

// Did you hear about this form from a charity
$('#heard-from-a-charity .govuk-button').click(function( event ) {
  // radio button checked
  if ($("input").is(':checked')){
    $(this).trigger('click');
  } else {
    var errorMessage = "Select whether a charity told you about this form";
    var errorID = "found-form-error";
    $("#found-form-error").remove();
    $(".govuk-error-summary").remove();
    $('.govuk-radios').before('<span id="' + errorID + '" class="govuk-error-message"><span class="govuk-visually-hidden">Error:</span> ' + errorMessage + '</span>');
    $('.govuk-form-group').before('<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary"><h2 class="govuk-error-summary__title" id="error-summary-title">There&apos;s a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#' + errorID + '">' + errorMessage + '</a></li></ul></div></div>');
    $('.govuk-form-group').addClass("govuk-form-group--error");
    $('.govuk-fieldset').attr( "aria-describedby", "error-when-empty");
    event.preventDefault();
  }
})

// Tell us which charity
$('#tell-us-which-charity .govuk-button').click(function( event ) {
  // radio button checked
  if ($("input").is(':checked')){
    $(this).trigger('click');
  } else {
    var errorMessage = "Select the name of the charity that told you about this form or select 'another charity'";
    var errorID = "which-charity-error";
    $("#which-charity-error").remove();
    $(".govuk-error-summary").remove();
    $('.govuk-radios--conditional').before('<span id="' + errorID + '" class="govuk-error-message"><span class="govuk-visually-hidden">Error:</span> ' + errorMessage + '</span>');
    $('.form-group-container').before('<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary"><h2 class="govuk-error-summary__title" id="error-summary-title">There&apos;s a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#' + errorID + '">' + errorMessage + '</a></li></ul></div></div>');
    $('.form-group-container').addClass("govuk-form-group--error");
    $('.govuk-fieldset').attr( "aria-describedby", "error-when-empty");
    event.preventDefault();
  }
})


// Sticky contents link for guidance pages
$(window).scroll(function () {
    if ($(this).scrollTop() < 200) {
      $('#contents-link-wrapper').addClass('govuk-sticky-element--hidden');
    } else {
       $('#contents-link-wrapper').removeClass('govuk-sticky-element--hidden');
       $('#contents-link-wrapper').addClass('govuk-sticky-element--enabled');
    }
})

$(window).on("scroll", function() {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 300)) {
        $('#contents-link-wrapper').addClass('govuk-sticky-element--hidden');
      }
})

// Results counter

//$(window).on("load", function() {
//  document.getElementById('count-results').innerHTML = 43;
//})

// Simulate filter behaviour on search results

// On page load
$(document).ready(function() {
  $('.page-2').hide();
  $('.page-3').hide();
  $('#count-results').html("43");
})

// If a box is checked include pages 2 and 3 in filtered results, hide all search-results so only results that match filters are displayed
$('input:checkbox').change(function() {
  if ($('input:checkbox:checked').length == 1) {
    $('.page-2').show();
    $('.page-3').show();
    $('.search-result').hide();
  } else if ($('input:checkbox:checked').length == 0) {
    $('.page-2').hide();
    $('.page-3').hide();
    $('.search-result').show();
  }
})

$('input:checkbox').change(function() {
  if ($('input:checkbox:checked').length > 0) {
    if ($('#servicetype-carehomes').is(':checked')) {
      $('.result-carehome').show();
    } else {
      $('.result-carehome').hide();
    }
  }
})

$('input:checkbox').change(function() {
  if ($('input:checkbox:checked').length > 0) {
    if ($('#servicetype-careinhome').is(':checked')) {
      $('.result-careinhome').show();
    } else {
      $('.result-careinhome').hide();
    }
  }
})

$('input:checkbox').change(function() {
  if ($('input:checkbox:checked').length > 0) {
    if ($('#servicetype-gps').is(':checked')) {
      $('.result-gp').show();
    } else {
      $('.result-gp').hide();
    }
  }
})

$('input:checkbox').change(function() {
  if ($('input:checkbox:checked').length > 0) {
    if ($('#servicetype-dentists').is(':checked')) {
      $('.result-dentist').show();
    } else {
      $('.result-dentist').hide();
    }
  }
})

$('input:checkbox').change(function() {
  if ($('input:checkbox:checked').length > 0) {
    if ($('#servicetype-independentdoctors').is(':checked')) {
      $('.result-independentdoctor').show();
    } else {
      $('.result-independentdoctor').hide();
    }
  }
})

$('input:checkbox').change(function() {
  if ($('input:checkbox:checked').length > 0) {
    if ($('#servicetype-nhshospitals').is(':checked')) {
      $('.result-nhshospital').show();
    } else {
      $('.result-nhshospital').hide();
    }
  }
})

$('input:checkbox').change(function() {
  if ($('input:checkbox:checked').length > 0) {
    if ($('#servicetype-remote').is(':checked')) {
      $('.result-remote').show();
    } else {
      $('.result-remote').hide();
    }
  }
})

$('input:checkbox').change(function () {
  var countResults = $('ul.search-results').find("li.search-result:visible").length;
  if ($("input:checkbox:checked").length > 0) {
    $('#count-results').html(countResults);
}
  else {
    $('.page-2').hide();
    $('.page-3').hide();
    $('#count-results').html(countResults);
}
})

// Timeout warning

var timeoutDialog = document.getElementById("js-modal-dialog");
function closeDialog() {
  timeoutDialog.close();
}

function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        // display.textContent = minutes + " minutes " + seconds + " seconds ";

        if (diff == 120) {

          display.textContent = minutes + " minutes ";

        } else if (diff < 120 && diff > 60) {

          display.textContent = minutes + " minute " + seconds + " seconds ";

        } else if (diff == 60) {

          display.textContent = minutes + " minute ";

        } else if (diff < 60 && diff > 1) {

          display.textContent = seconds + " seconds ";

        } else if (diff == 1) {

          display.textContent = seconds + " second ";

        } else if (diff <= 0 && diff > -10) {

          document.getElementById("timeout-message").innerHTML = "We're about to reset this form and redirect you to another page.";

        } else if (diff <= -10) {

          window.location.replace("we-have-reset-this-form.html");

        } else {

          display.textContent = minutes + " minutes " + seconds + " seconds ";

        }

    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

window.onload = function () {
    var twoMinutes = (60 * 2) + 10,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
};





// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  GOVUK.modalDialog.init()
})
