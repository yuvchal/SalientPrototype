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

$.ajax({
  type: 'GET',
  url: '/getInfo',
  success: function (data) {
    console.log('success: ', data);
    const info = JSON.parse(data);
    console.log('parsed: ', info);
    for (let i = 0; i < info.length; i++) {
      console.log(info[i]);
      $('#body').append(
        `<tr><th scope="row">${info[i].name}</th><td>${info[i].skills}</td><td>${info[i].certifications}</td><td>TEMP</td></tr>`
      );
    }
  },
});

$(function () {
  $('.login').on('click', function () {
    $('.login').fadeToggle(1000);
    $('.info').show(1000);
    $('.mydatatable').DataTable();
    $('.mydatatable').show(1000);
    $('#sorting').fadeToggle(1000);
  });
});
