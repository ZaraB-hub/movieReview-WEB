<?php
Flight::route('GET /movies/@id:[0-9]+', function ($id) {
    FLight::json(Flight::movies_service()->get_by_id($id));
});

Flight::route('GET /movie',function(){
    $id1 = Flight::request()->query['id'];
    FLight::json(Flight::movies_service()->get_by_id($id1));
});

Flight::route('GET /movies/genre/@genre', function ($genre) {
    FLight::json(Flight::movies_service()->get_genre($genre));
});

Flight::route('GET /movies/trending/', function () {
    FLight::json(Flight::movies_service()->get_trending());
});

Flight::route('GET /movies/@title', function ($title) {
    Flight::json(Flight::movies_service()->get_by_title($title));
});

Flight::route('GET /search', function () {
    $title = Flight::request()->query['q'];
    Flight::json(Flight::movies_service()->get_by_title($title));
});

Flight::route('GET /movies', function () {
    FLight::json(Flight::movies_service()->get_all());
});

Flight::route('POST /movies', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::movies_service()->add($data));
});

Flight::route('PUT /movies/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::movies_service()->update($id, $data, "MoviesID");
});

Flight::route('DELETE /movies/@id', function ($id) {
    Flight::movies_service()->delete($id, "MoviesID");
});

