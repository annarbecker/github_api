var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  var username = $('#username').val();
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(repos){
    console.log(repos);
    for(var i = 0; i < repos.length ; i++) {
      $('.repo-results').append("<div class='col-sm-4 repos'><h4>" + repos[i].name  + "</h4><li>" + repos[i].description  + "</li></div>"
);
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}
