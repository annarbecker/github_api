var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/repos-interface.js').getRepos;

$(document).ready(function() {
 $('#find-git').submit(function(event) {
   event.preventDefault();
   var username = $('#username').val();
   getRepos();
  });
});
