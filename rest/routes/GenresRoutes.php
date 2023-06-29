<?php

Flight::route('GET /genres', function () {
    FLight::json(Flight::genres_service()->get_all());
});

Flight::route('GET /genres/@id', function ($id) {
    FLight::json(Flight::genres_service()->get_by_id($id));
});

Flight::route('POST /genres', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::genres_service()->add($data));
});

Flight::route('PUT /genres/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::genres_service()->update($id, $data, "GenresID");
});

Flight::route('DELETE /genres/@id', function ($id) {
    Flight::genres_service()->delete($id, "GenresID");
});
