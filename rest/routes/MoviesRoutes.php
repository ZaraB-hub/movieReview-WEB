<?php

Flight::route('/movies', function () {
    FLight::json(Flight::movies_service()->get_all());
});

Flight::route('/movies/id/@id', function ($id) {
    FLight::json(Flight::movies_service()->get_by_id($id));
});

Flight::route('/movies/genre/@genre', function ($genre) {
    FLight::json(Flight::movies_service()->get_genre($genre));
});

Flight::route('/movies/trending/', function () {
    FLight::json(Flight::movies_service()->get_trending());
});

Flight::route('/movies/@title', function ($title) {
    Flight::json(Flight::movies_service()->get_by_title($title));
});


