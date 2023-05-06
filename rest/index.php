<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS, PATCH');
require '../vendor/autoload.php';

require "services/ActorsService.php";
Flight::register('actors_service', "ActorsService");

require_once 'routes/ActorsRoutes.php';

Flight::start();
