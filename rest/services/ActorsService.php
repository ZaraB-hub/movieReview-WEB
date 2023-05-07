<?php
require_once 'BaseService.php';

class ActorsService extends BaseService{
    public function __construct(){
        parent::__construct(Flight::actors_dao());
    } 

    
}
?>