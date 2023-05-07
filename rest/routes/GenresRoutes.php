<?php

Flight::route('/genres', function () {
    FLight::json(Flight::genres_service()->get_all());
});

Flight::route('/genres/@id', function ($id) {
    FLight::json(Flight::genres_service()->get_by_id($id));
});

