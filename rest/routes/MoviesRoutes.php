<?php

Flight::route('/movies', function () {
    FLight::json(Flight::movies_service()->get_all());
});

Flight::route('/movies/@id', function ($id) {
    FLight::json(Flight::movies_service()->get_by_id($id));
});

