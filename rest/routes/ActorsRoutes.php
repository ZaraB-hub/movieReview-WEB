<?php

Flight::route('GET /actors', function () {
    FLight::json(Flight::actors_service()->get_all());
});

Flight::route('GET /actors/name/@name', function ($name) {
    Flight::json(Flight::actors_service()->get_by_name($name));
});

Flight::route('GET /actors/@id', function ($id) {
    FLight::json(Flight::actors_service()->get_by_id($id));
});

Flight::route('POST /actors', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::actors_service()->add($data));
});

Flight::route('PUT /actors/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::actors_service()->update($id, $data, "ActorsID");
});

Flight::route('DELETE /actors/@id', function ($id) {
    Flight::actors_service()->delete($id, "ActorsID");
});
