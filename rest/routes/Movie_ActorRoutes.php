<?php

Flight::route('/actor/@id/movies', function ($id) {
    FLight::json(Flight::movie_actors_service()->get_movies_by_actor($id));
}
);

Flight::route('/movie/@id/actors', function ($id) {
    FLight::json(Flight::movie_actors_service()->get_actors_by_movie($id));
}
);

