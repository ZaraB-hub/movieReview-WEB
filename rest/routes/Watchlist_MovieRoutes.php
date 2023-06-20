<?php

Flight::route('/watchlistm', function () {
    FLight::json(Flight::watchlistsm_service()->get_all());
});

Flight::route('/watchlistm/@id', function ($id) {
    FLight::json(Flight::watchlistsm_service()->get_by_id($id));
});

Flight::route('POST /wm', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::watchlistsm_service()->add($data));
});

Flight::route('DELETE /watchlistm/@w/movie/@id', function ($w,$id) {
    FLight::json(Flight::watchlistsm_service()->deleteMovie($w,$id));
});

Flight::route('POST /watchlistm/@w/movie/@id', function ($w,$id) {
    FLight::json(Flight::watchlistsm_service()->addMovie($w,$id));
});

Flight::route('/wm/list/@id', function ($id) {
    FLight::json(Flight::watchlistsm_service()->getWatchlistByWatchlist($id));
});
