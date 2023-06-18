<?php

use Firebase\JWT\JWT;
use Firebase\JWT\Key;


Flight::route('GET /users', function () {
    Flight::json(Flight::users_service()->get_all());
});

Flight::route('GET /users/@id', function ($id) {
    Flight::json(Flight::users_service()->get_by_id($id));
});

Flight::route('POST /users', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::users_service()->add($data));
});

Flight::route('PUT /api/users/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::users_service()->update($id, $data);
    Flight::json(Flight::users_service()->get_by_id($id));
});

Flight::route('DELETE /api/users/@id', function ($id) {
    Flight::users_service()->delete($id);
});

Flight::route('POST /login', function(){
    $login = Flight::request()->data->getData();
    $user = Flight::users_service()->getUserByEmail($login['email']);
    if (isset($user['id'])){
      if($user['password'] == md5($login['password'])){
        unset($user['password']);
        $jwt = JWT::encode($user, Config::JWT_SECRET(), 'HS256');
        Flight::json(['token' => $jwt]);
      } else {
        Flight::json(["message" => "Wrong password"], 404);
      }
    } else {
      Flight::json(["message" => "User doesn't exist"], 404);
    }
});


?>