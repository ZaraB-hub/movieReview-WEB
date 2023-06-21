<?php
require_once 'BaseService.php';

class Movie_ActorService extends BaseService{
    public function __construct(){
        parent::__construct(new Movie_ActorDao);
    } 

    function get_movies_by_actor($id){
        return $this->dao_object->get_movies_by_actor($id);

    }

    
    function get_actors_by_movie($id){
        return $this->dao_object->get_actors_by_movie($id);

    }

    
}
?>