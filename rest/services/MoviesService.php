<?php
require_once 'BaseService.php';

class MoviesService extends BaseService{
    public function __construct(){
        parent::__construct(Flight::movies_dao());
    } 

    public function get_by_title($title)
    {
        return $this->dao_object->get_by_title($title);
        
    }
    
}
?>