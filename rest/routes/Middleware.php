<?php

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

# check all api endpoints for authorization

Flight::route('/rest/*', function () {
  $header = Flight::header("Authorization");
  $headers = getallheaders();
  if (!$headers['Authorization']){
    Flight::json(["message" => "Authorization is missing"], 403);
    return FALSE;
  }else{
      try {
        $decoded = (array)JWT::decode($header, new Key(Config::JWT_SECRET(), 'HS256'));
        Flight::set('user', $decoded);
        return TRUE;
      } catch (\Exception $e) {
        Flight::json(["message" => "Authorization token is not valid"], 403);
        return FALSE;
      }
  }
});

?>