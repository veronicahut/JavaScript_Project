/*   
Title: WebForm_validation.js
Date: 4/23/2023
Author: Veronica Hutchins
Class: CITW 165 
Exercise: Exercise #10 JavaScript validation file
*/

$ ( function() 
{
  $('#email_form').validate({
    rules: {
      email: { 
        required: true, 
        email: true 
      }, 
      email_confirm: {
        required: true, 
        email: true, 
        equalTo: "#email"
      }, 
      zip: {
        required: true, 
        minlength: 5, 
        zipcodeUS: true
      }, 
      messages: {
        email: { 
          required: "Please enter your email", 
          email: "Please enter a valid email"
        }, 
        email_confirm: { 
          required: "Please confirm your email", 
          equalTo: "Please enter the same email as above"
        }
      } 
    }
  });
} );

