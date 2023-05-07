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

require_once './services/GenresService.php';
require_once './routes/GenresRoutes.php';
require_once './dao/GenresDao.class.php';
Flight::register('genres_dao','GenresDao');
Flight::register('genres_service','GenresService');


require_once './services/DirectorsService.php';
require_once './routes/DirectorsRoutes.php';
require_once './dao/DirectorsDao.class.php';
Flight::register('directors_dao','DirectorsDao');
Flight::register('directors_service','DirectorsService');


require_once './services/ContentRatingService.php';
require_once './routes/ContentRatingRoutes.php';
require_once './dao/ContentRatingDao.class.php';
Flight::register('contentrating_dao','ContentRatingDao');
Flight::register('contentrating_service','ContentRatingService');

Flight::register('db', 'PDO', array('mysql:host=localhost;dbname=zmdb','root','uniburch'));

Flight::start();

?>