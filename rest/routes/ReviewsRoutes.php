<?php

Flight::route('GET /reviews', function () {
    FLight::json(Flight::reviews_service()->get_all());
});

Flight::route('GET /reviews/movie/@id', function ($id) {
    FLight::json(Flight::reviews_service()->get_by_movie_id($id));
});

Flight::route('POST /reviews', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::reviews_service()->add($data));
});

Flight::route('PUT /reviews/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::reviews_service()->update($id, $data, "ReviewsID");
});

Flight::route(' DELETE  /reviews/@id', function ($id) {
    FLight::json(Flight::reviews_service()->delete($id,"ReviewsID"));
});





