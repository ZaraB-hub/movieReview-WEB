<?php
require_once 'BaseService.php';

class DirectorsService extends BaseService{
    public function __construct(){
        parent::__construct(Flight::directors_dao());
    } 

    
}
?>