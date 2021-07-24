'use strict';
// clearing the web page
$('.container-fluid').hide();
$('.login').hide();
$('.info').hide();
$('.table').hide();
$('.mydatatable').hide();
$('#sorting').hide();
$('.modal').hide();
setTimeout(() => {
  $('.container-fluid').fadeToggle(1000);
  $('.login').fadeToggle(1000);
}, 1000);
let info;
$.ajax({
  type: 'GET',
  url: '/getInfo',
  success: function (data) {
    console.log('success: ', data);
    info = JSON.parse(data);
    console.log('parsed: ', info);
    for (let i = 0; i < info.length; i++) {
      console.log(info[i]);
      $('#body').append(
        `<tr><th scope="row">${info[i].name}</th><td>${info[i].skills}</td><td>${info[i].certifications}</td><td><button type="button" class="btn btn-info edit${info[i].id}">Edit info</button></td></tr>`
      );
      $(function () {
        $(`.edit${info[i].id}`).on('click', function () {
          $('.modal').show(500);
          // $('.name').append(`${info[i].name}`);
        });
      });
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
    $(`.close-modal`).on('click', function () {
      $('.modal').hide(500);
    });
  });
});
