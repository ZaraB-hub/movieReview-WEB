<?php

Flight::route('/watchlist', function () {
    FLight::json(Flight::watchlists_service()->get_all());
});

Flight::route('/watchlist/@id', function ($id) {
    FLight::json(Flight::watchlists_service()->get_by_id($id));
});

Flight::route('POST /watchlist', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::watchlists_service()->add($data));
});

Flight::route('/watchlist/movie/@id', function ($id) {
    FLight::json(Flight::watchlists_service()->getWatchlistByUser($id));
});





