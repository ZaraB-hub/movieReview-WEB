<?php

Flight::route('/moviegenre', function () {
    FLight::json(Flight::movie_genre_service()->get_all());
});

Flight::route('/moviegenre/@id', function ($id) {
    FLight::json(Flight::movie_genre_service()->getGenres($id));
});




