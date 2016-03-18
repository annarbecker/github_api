var apiKey = require('./../.env').apiKey;

exports.getUsername = function(){
  var username = $('#username').val();
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('.username-results').html('<h1>' + username + '</h1>');
    if(response.name != null) {
      $('.username-results').append('<strong><p>Name: </strong>' + response.name + '</p>');
    };
    if(response.bio != null) {
      $('.username-results').append('<strong><p>Bio: </strong>' + response.bio + '</p>');
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}
