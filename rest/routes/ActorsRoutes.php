<?php

Flight::route('/actors', function () {
    FLight::json(Flight::actors_service()->get_all());
});

Flight::route('/actors/@id', function ($id) {
    FLight::json(Flight::actors_service()->get_by_id($id));
});

// Flight::route('/test', function () {
//     $sql = "SELECT title, firstname, LastName FROM movie_actor JOIN movies ON movies.MoviesID = movie_actor.MovieID JOIN actors ON actors.ActorsID = movie_actor.ActorID";
//     $conn = Flight::db();
//     $stmt = $conn->prepare($sql);
//     $stmt->execute();
//     $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
//     print_r($result);
// });

