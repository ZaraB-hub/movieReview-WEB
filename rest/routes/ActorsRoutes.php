<?php

Flight::route('/actors', function () {
    FLight::json(Flight::actors_service()->get_all());
});

Flight::route('/actors/@id', function ($id) {
    FLight::json(Flight::actors_service()->get_by_id($id));
});

