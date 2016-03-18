var apiKey = require('./../.env').apiKey;

exports.getUsername = function(){
  var username = $('#username').val();
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    $('.username-results').append('<h1>' + username + '</h1>');
    $('.username-results').append("<img src='" + response.avatar_url + "'>");
    if(response.name !== null) {
      $('.username-results').append('<strong><p>Name: </strong>' + response.name + '</p>');
    }
    if(response.email !== null) {
      $('.username-results').append("<a href='mailto:" + response.email + "'>Email " + username + "</a>");
    }
    $('.username-results').append('<strong><p>Followers: </strong>' + response.followers + '</p><br>');
  }).fail(function(error){
    $('.username-results').append('<h3>No GitHub user found for that username.<h3>');
  });
};

exports.getRepos = function(){
  var username = $('#username').val();
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey + '&per_page=1000&sort=created').then(function(response){
    $('.repo-results').append("<tr><th>Repository</th><th>Description</th><th>Date Created</th></tr>");
    for(var i = 0; i < response.length ; i++) {
      $('.repo-results').append("<tr><td><a href='https://github.com/" + username + "/" + response[i].name + "'>" + response[i].name + "</a></td><td>" + response[i].description + "</td><td>" + moment(response[i].created_at).format('L') + "</td></tr>");
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
