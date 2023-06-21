<?php
require_once 'BaseService.php';

class ActorsService extends BaseService{
    public function __construct(){
        parent::__construct(Flight::actors_dao());
    } 

    public function get_by_name($name)
    {
        return $this->dao_object->get_by_name($name);
        
    }
}
