<?php

Flight::route('/contentrating', function () {
    FLight::json(Flight::contentrating_service()->get_all());
});

Flight::route('/contentrating/@id', function ($id) {
    FLight::json(Flight::contentrating_service()->get_by_id($id));
});

