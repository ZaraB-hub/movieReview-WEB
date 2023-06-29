<?php

Flight::route('GET /ratings', function () {
    FLight::json(Flight::ratings_service()->get_all());
});

Flight::route('POST /ratings', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::ratings_service()->add($data));
});

Flight::route(' DELETE  /ratings/@id', function ($id) {
    FLight::json(Flight::ratings_service()->delete($id,"RatingsID"));
});

Flight::route('PUT /ratings/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::ratings_service()->update($id, $data, "RatingsID");
});




