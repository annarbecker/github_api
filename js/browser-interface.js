var apiKey = require('./../.env').apiKey;
var getUsername = require('./../js/git-interface.js').getUsername;
var getRepos = require('./../js/git-interface.js').getRepos;

$(document).ready(function() {
 $('#find-git').submit(function(event) {
   event.preventDefault();
   var username = $('#username').val();
   getUsername();
   getRepos();
   $('.username-results').empty();
   $('.repo-results2').empty();
  });
});
