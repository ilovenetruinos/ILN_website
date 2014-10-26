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

$( document ).ajaxStop(function() {
  'use strict';
  NProgress.done();
});

//Index Controller

$('#external').on('click', '#btAbout', function(e) {
  'use strict';
  e.preventDefault();

  $('#external').load('/about/ #external' , function( response, status, xhr ) {
    if ( status === 'error' ) {
      var msg = 'Sorry but there was an error: ';
      return msg + xhr.status + ' ' + xhr.statusText;
    }else if(status === 'success'){

      return response;
    }
  });
  History.pushState({data:"About"}, "About", "/about/");

}); 

$('#external').on('click', '#btDocs', function(e) {
  'use strict';
  e.preventDefault();

  $('#external').load('/docs/ #external' , function( response, status, xhr ) {
    if ( status === 'error' ) {
      var msg = 'Sorry but there was an error: ';
      return msg + xhr.status + ' ' + xhr.statusText;
    }else if(status === 'success'){

      return response;
    }
  });
  History.pushState({data:"Docs"}, "Docs", "/docs/");

});

$('#external').on('click', '#btContact', function(e) {
  'use strict';
  e.preventDefault();

  $('#external').load('/contact/ #external' , function( response, status, xhr ) {
    if ( status === 'error' ) {
      var msg = 'Sorry but there was an error: ';
      return msg + xhr.status + ' ' + xhr.statusText;
    }else if(status === 'success'){

      return response;
    }
  });
  History.pushState({data:"Contact"}, "Contact", "/contact/");

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

//Register Controller

//Move to HTML5.
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
          },
          studentAge: 'required',
      },
      messages: {
          parentFullName: 'Please enter your full name',
          parentEmail: 'Please enter a valid email address',
          studentFullName: 'Please enter the student\'s full name',
          studentAge: 'Please enter the student\'s age'

      },
      submitHandler: function(form) {

          //TODO: http://stackoverflow.com/questions/18265637/jquery-validate-with-ajax-in-submithandler-submits-on-second-click
          form.submit();
      }
  });

});

$('#external').on('click', '#btSubmit', function() {
  'use strict';

  $('#contact-form').validate({
      rules: {
          fullName: 'required',
          email: {
              required: true,
              email: true
          },
          subject: {
              required: true
          },
          contentArea: 'required',
      },
      messages: {
          fullName: 'Please, enter your full name',
          email: 'Please, enter a valid email address',
          subject: 'Please, enter subject',
          contentArea: 'Please, describe your doubt.'

      },
      submitHandler: function(form) {

          //TODO: http://stackoverflow.com/questions/18265637/jquery-validate-with-ajax-in-submithandler-submits-on-second-click
          form.submit();
      }
  });

});

// Generic Controller

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

//CSS Carrousel

var backgroundsCSSClasses = "";
var backgroundIndex = 0;

$(function() {
  var cssString = "";
  var $obj = $("<div></div>");
  $obj.addClass("backgroundsCSSClasses");
  $obj.appendTo("body");
  $obj.each(function(){
    cssString = window.getComputedStyle(this,':before').content;
  });
  $obj.remove();
  backgroundsCSSClasses = cssString.split(",");
});

function updateBackground(){
  if(backgroundIndex >= backgroundsCSSClasses.length){
    backgroundIndex = 0;
  }
  var currentClass = backgroundsCSSClasses[backgroundIndex];

  var $p = $("<p></p>").hide();
  $p.addClass(currentClass);
  $p.appendTo("body");
  var bg = $p.css("background-image");
  bg = bg.replace('url(','').replace(')','');
  //alert(bg);

  var img = $("<img />").attr('src', bg)
  .load(function() {
      if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
        //Nothing
      } else {
        $('body').css('background-image', 'url(' + bg + ')');
      }
  });

  $p.remove();

  backgroundIndex++;

}

var interval = setInterval(updateBackground, 60000*2);
