var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  var username = $('#username').val();
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}
