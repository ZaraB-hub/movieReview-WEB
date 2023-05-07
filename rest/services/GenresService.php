<?php
require_once 'BaseService.php';

class GenresService extends BaseService{
    public function __construct(){
        parent::__construct(Flight::genres_dao());
    } 

    
}
?>