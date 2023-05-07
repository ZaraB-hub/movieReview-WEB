<?php 

require 'vendor/autoload.php';

Flight::route('/',function(){
    echo "Hello";
});

Flight::route('/test',function(){
    echo "Hello from test";
});

Flight::route('GET /some',function(){
    echo "Hello from some";
});

Flight::start();

?>