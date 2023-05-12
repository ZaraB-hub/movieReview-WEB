$(document).ready(function() {

  $("main#spapp > section").height($(document).height() -60);

  var app = $.spapp({pageNotFound : 'error_404'}); // initialize

  // define routes

  app.route({view: 'movie', load: 'movie.html' });
  app.route({view: 'search', load: 'search.html' });
  app.route({view: 'watchlist', load: 'watchlist.html' });
  

  // run app
  app.run();

});
