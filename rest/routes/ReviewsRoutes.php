<?php

Flight::route('/reviews', function () {
    FLight::json(Flight::reviews_service()->get_all());
});

Flight::route('/reviews/movie/@id', function ($id) {
    FLight::json(Flight::reviews_service()->get_by_movie_id($id));
});

Flight::route('POST /review', function () {
    $data = Flight::request()->data->getData();
    var_dump($data);
    Flight::json(Flight::reviews_service()->addReview($data));
});

Flight::route(' DELETE  /reviews/@id', function ($id) {
    FLight::json(Flight::reviews_service()->delete($id,"ReviewsID"));
});





