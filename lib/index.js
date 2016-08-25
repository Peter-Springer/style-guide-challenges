'use strict';
 const Styles = require('../styles')
 const $ = require ('jquery');

function hideMenu() {
  $('.mobile').hide();
}

function hideWeekOne() {
  $('.week-1').hide();
}

$('h1').on('click', function(event) {
    event.preventDefault();
      $('.week-1').show();
      $('h1').hide();
});

$('#hide-button').on('click', function(event) {
    event.preventDefault();
      $('.week-1').hide();
      $('h1').show();
});

$('.mobile-menu').on('click', function(event) {
    event.preventDefault();
      $('.mobile').show();
      $('.mobile-menu').toggleClass('drop');
});


$('.mobile-menu').on('focusout', function() {
  $('.mobile').hide();
  $('.mobile-menu').removeClass('drop');
});

hideMenu();
hideWeekOne();
