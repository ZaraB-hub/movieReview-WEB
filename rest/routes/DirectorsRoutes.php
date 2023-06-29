<?php

Flight::route('GET /directors', function () {
    FLight::json(Flight::directors_service()->get_all());
});

Flight::route('GET /directors/@id', function ($id) {
    FLight::json(Flight::directors_service()->get_by_id($id));
});

Flight::route('POST /directors', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::directors_service()->add($data));
});

Flight::route('PUT /directors/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::directors_service()->update($id, $data, "DirectorsID");
});

Flight::route('DELETE /directors/@id', function ($id) {
    Flight::directors_service()->delete($id, "DirectorsID");
});
