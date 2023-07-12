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

Flight::route('POST /email', function () {
  $data = Flight::request()->data->getData();
  Flight::json(Flight::users_service()->addEmail($data));
});

Flight::route('PUT /users/@id', function ($id) {
  $data = Flight::request()->data->getData();
  Flight::json(Flight::users_service()->update($id, $data,"UsersID"));
  
});

Flight::route('DELETE /users/@id', function ($id) {
  Flight::users_service()->delete($id,"UsersID");
});

Flight::route('POST /login', function () {
  $login = Flight::request()->data->getData();
  $user = Flight::users_service()->getUserByEmail($login['email']);
  if (isset($user['UsersID'])){
    if($user['Password'] == md5($login['password'])){
      unset($user['Password']);
      $jwt = JWT::encode($user, Config::JWT_SECRET(), 'HS256');
      Flight::json(['token' => $jwt]);
    } else {
      Flight::json(["message" => "Wrong credentials"], 404);
    }
  } else {
    Flight::json(["message" => "User doesn't exist"], 404);
  }
});
  

Flight::route('POST /token',function(){
  $data = Flight::request()->data->getData();
  unset($data['Password']);
  $jwt = JWT::encode($data, Config::JWT_SECRET(), 'HS256');
  Flight::json(['token' => $jwt]);
});
