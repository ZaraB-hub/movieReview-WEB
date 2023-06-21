<?php
require_once "BaseDao.php";

class Movie_ActorDao extends BaseDao {

    public function __construct(){
        parent::__construct("movie_actor");
    }

    function get_movies_by_actor($id){
        return $this->query("SELECT * FROM movie_actor WHERE ActorID = :id", ["id" => $id]);
    }

    function get_actors_by_movie($id){
        return $this->query("SELECT * FROM movie_actor WHERE MovieID = :id", ["id" => $id]);
    }
}
?>