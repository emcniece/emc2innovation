$(document).foundation();

(function($){

  $("#contact_form").submit(function()
  {
      var email = $("#email").val(); // get email field value
      var name = $("#name").val(); // get name field value
      var msg = $("#msg").val(); // get message field value
console.log( name, email, msg)
      $.ajax(
      {
          type: "POST",
          url: "https://mandrillapp.com/api/1.0/messages/send.json",
          data: {
              'key': '-C7KUJxOlC-Zjpc2TedaOQ',
              'message': {
                  'from_email': email,
                  'from_name': name,
                  'headers': {
                      'Reply-To': email
                  },
                  'subject': 'EMC2 Splash Contact Form Submission',
                  'text': msg,
                  'to': [
                  {
                      'email': 'emcniece@gmail.com',
                      'name': 'Eric McNiece',
                      'type': 'to'
                  }]
              }
          }
      })
      .done(function(response) {
        console.log(response)

        if( response[0].status === 'rejected'){
          alert('Something went wrong - please check your message details. Error: '+response[0].reject_reason);
        } else{
          alert('Your message has been sent. Thank you!'); // show success message
          $("#name").val(''); // reset field after successful submission
          $("#email").val(''); // reset field after successful submission
          $("#msg").val(''); // reset field after successful submission
        }
      })
      .fail(function(response) {
          alert('Error sending message.');
      });
      return false; // prevent page refresh
  });

})(jQuery);