'use strict';

//variable setting
const btnLogin = document.querySelector('.login');
const btnView = document.querySelector('.view');
const password = document.querySelector('.login__input--password');
const username = document.querySelector('.login__input--user');

const passwordView = function () {
  if (password.type === 'text') password.type = 'password';
  else password.type = 'text';
};

btnView.addEventListener('click', passwordView);

$(function () {
  $('.login').on('click', function () {
    if (password.value.length < 8) {
      alert('not enough characters in the inputted password');
    } else {
      //API CALL
      const loginAttempt = {
        username: $('.login__input--user').val(),
        password: $('.login__input--password').val(),
      };
      $.ajax({
        type: 'POST',
        url: '/auth',
        data: loginAttempt,
        success: function (correct) {
          if (correct === 'true') {
            $.ajax({
              type: 'GET',
              url: '/view',
              success: function (c) {
                console.log(c);
                window.location.replace(
                  'https://yuvrajapp.azurewebsites.net/view'
                );
                // window.location.replace("https://localhost:3000/view");
              },
            });
          } else {
            alert('login unsuccsesful');
          }
        },
      });
    }
  });
});

// // clearing the web page
// $(".container-fluid").fadeToggle(1000);
// $(".desc").fadeToggle(1000);
// $(".desc2").fadeToggle(1000);
// setTimeout(() => {
//   document.querySelector(".desc").textContent =
//     "This page will display all employees by name and ID along with their skills & certifications";
//   $(".desc").fadeToggle(1000);
//   document.querySelector(
//     ".desc2"
//   ).textContent = `Click "List of users" to begin`;
//   $(".desc2").fadeToggle(2000);
// }, 1000);
