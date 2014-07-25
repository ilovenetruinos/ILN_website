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

  $('#external').load('/register.html #external' , function( response, status, xhr ) {
    if ( status === 'error' ) {
      var msg = 'Sorry but there was an error: ';
      return msg + xhr.status + ' ' + xhr.statusText;
    }else if(status === 'success'){

      return response;
    }
  });

});  

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
          form.submit();
      }
  });

});

$('#external').on('click', '#btBack', function(e) {
  'use strict';
  e.preventDefault();

  $('#external').load('/index.html #external' , function( response, status, xhr ) {
    if ( status === 'error' ) {
      var msg = 'Sorry but there was an error: ';
      return msg + xhr.status + ' ' + xhr.statusText;
    }else if(status === 'success'){
      return response;
    }
  });

});