'use strict';
// clearing the web page
$('.container-fluid').hide();
$('.login').hide();
$('.info').hide();
setTimeout(() => {
  $('.container-fluid').fadeToggle(1000);
  $('.login').fadeToggle(1000);
}, 1000);

$(function () {
  $('.login').on('click', function () {
    $('.login').hide(1000);
    $('.info').show(1000);
  });
});

// $(function () {});
