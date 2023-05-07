<?php

Flight::route('/directors', function () {
    FLight::json(Flight::directors_service()->get_all());
});

Flight::route('/directors/@id', function ($id) {
    FLight::json(Flight::directors_service()->get_by_id($id));
});

