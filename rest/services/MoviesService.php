<?php
require_once 'BaseService.php';

class MoviesService extends BaseService{
    public function __construct(){
        parent::__construct(Flight::movies_dao());
    } 

    
}
?>