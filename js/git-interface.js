var apiKey = require('./../.env').apiKey;

exports.getUsername = function(){
  var username = $('#username').val();
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('.username-results').append('<h1>' + username + '</h1><hr>');
    if(response.name != null) {
      $('.username-results').append('<strong><p>Name: </strong>' + response.name + '</p><hr>');
    };
    if(response.bio != null) {
      $('.username-results').append('<strong><p>Bio: </strong>' + response.bio + '</p><hr>');
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

exports.getRepos = function(){
  var username = $('#username').val();
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(repos){
    console.log(repos);
    $('.repo-results2').append("<tr><td>Repository</td><td>Description</td><td>Date Created</td></tr>");
    for(var i = 0; i < repos.length ; i++) {
      $('.repo-results2').append("<tr><td><a href='https://github.com/" + username + "/" + repos[i].name + "'>" + repos[i].name + "</a></td><td>" + repos[i].description + "</td><td>" + moment(repos[i].created_at).format('L') + "</td></tr>");
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}
