var apiKey = require('./../.env').apiKey;
var getUsername = require('./../js/username-interface.js').getUsername;
var getRepos = require('./../js/repos-interface.js').getRepos;

$(document).ready(function() {
 $('#find-git').submit(function(event) {
   event.preventDefault();
   var username = $('#username').val();
   getUsername();
   getRepos();
  });
});
