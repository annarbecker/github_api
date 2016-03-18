var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  var username = $('#username').val();
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('.git-results').html('<h1>' + username + '</h1>');
    if(response.name != null) {
      $('.git-results').append('<strong><p>Name: </strong>' + response.name + '</p>');
    };
    if(response.bio != null) {
      $('.git-results').append('<storng>Bio:</strong><p>' + response.bio + '</p>');
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}
