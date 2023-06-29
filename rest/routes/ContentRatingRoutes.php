<?php

Flight::route('/contentrating', function () {
    FLight::json(Flight::contentrating_service()->get_all());
});

Flight::route('/contentrating/@id', function ($id) {
    FLight::json(Flight::contentrating_service()->get_by_id($id));
});

Flight::route('GET /contentrating', function () {
    FLight::json(Flight::contentrating_service()->get_all());
});

Flight::route('GET /contentrating/@id', function ($id) {
    FLight::json(Flight::contentrating_service()->get_by_id($id));
});

Flight::route('POST /contentrating', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::contentrating_service()->add($data));
});

Flight::route('PUT /contentrating/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::contentrating_service()->update($id, $data, "ContentratingID");
});

Flight::route('DELETE /contentrating/@id', function ($id) {
    Flight::contentrating_service()->delete($id, "ContentratingID");
});