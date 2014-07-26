$(function() {
  var State = null;
  var History = window.History;
  History.Adapter.bind(window,'statechange',function(){ 
      var State = History.getState(); 
      History.log(State.data, State.title, State.url);
  });
});

NProgress.configure({ showSpinner: false });

$( document ).ajaxStart(function() {
  'use strict';
  NProgress.start();
});

$( document ).ajaxStart(function() {
  'use strict';
  NProgress.done();
});

$('#external').on('click', '#btRegister', function(e) {
  'use strict';
  e.preventDefault();

  $('#external').load('/register/ #external' , function( response, status, xhr ) {
    if ( status === 'error' ) {
      var msg = 'Sorry but there was an error: ';
      return msg + xhr.status + ' ' + xhr.statusText;
    }else if(status === 'success'){

      return response;
    }
  });
  History.pushState({data:"Register"}, "Register", "/register/");

});  

//Mover a HTML5.
//http://www.html5-tutorials.org/form-validation/polyfills-for-form-validation/

$('#external').on('click', '#btSubmit', function() {
  'use strict';

  $('#register-form').validate({
      rules: {
          parentFullName: 'required',
          parentEmail: {
              required: true,
              email: true
          },
          studentFullName: {
              required: true
          }
      },
      messages: {
          parentFullName: 'Please enter your full name',
          parentEmail: 'Please enter a valid email address',
          studentFullName: 'Please the student\'s full name'

      },
      submitHandler: function(form) {

          //TODO: http://stackoverflow.com/questions/18265637/jquery-validate-with-ajax-in-submithandler-submits-on-second-click
          form.submit();
      }
  });

});

$('#external').on('click', '#btBack', function(e) {
  'use strict';
  e.preventDefault();

  $('#external').load('/ #external' , function( response, status, xhr ) {
    if ( status === 'error' ) {
      var msg = 'Sorry but there was an error: ';
      return msg + xhr.status + ' ' + xhr.statusText;
    }else if(status === 'success'){
      return response;
    }
  });

  History.pushState({data:"Index"}, "Index", "/");

});

//$('body').removeClass('default').addClass('two');
