<?php

Flight::route('/actors', function () {
    FLight::json(Flight::actors_service()->get_all());
});
Flight::route('/find/@name', function ($name) {
    Flight::json(Flight::actors_service()->get_by_name($name));
});
Flight::route('/actors/@name', function ($name) {
    Flight::json(Flight::actors_service()->get_by_name($name));
});

Flight::route('/actors/@id', function ($id) {
    FLight::json(Flight::actors_service()->get_by_id($id));
});





