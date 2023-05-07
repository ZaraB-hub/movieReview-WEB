<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS, PATCH');
require_once '../vendor/autoload.php';
require_once './Config.class.php';

require_once './services/ActorsService.php';
require_once './routes/ActorsRoutes.php';
require_once './dao/ActorsDao.class.php';
Flight::register('actors_dao','ActorsDao');
Flight::register('actors_service','ActorsService');

require_once './services/MoviesService.php';
require_once './routes/MoviesRoutes.php';
require_once './dao/MoviesDao.class.php';
Flight::register('movies_dao','MoviesDao');
Flight::register('movies_service','MoviesService');




Flight::start();

?>