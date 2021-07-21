'use strict';
// clearing the web page
$('.container-fluid').hide();
$('.login').hide();
$('.info').hide();
$('.table').hide();
$('.mydatatable').hide();
$('#sorting').hide();
setTimeout(() => {
  $('.container-fluid').fadeToggle(1000);
  $('.login').fadeToggle(1000);
}, 1000);

$(function () {
  $('.login').on('click', function () {
    $('.login').fadeToggle(1000);
    $('.info').show(1000);
    $('.mydatatable').DataTable();
    $('.mydatatable').show(1000);
    $('#sorting').fadeToggle(1000);
  });
});
