<?php
require_once "BaseDao.php";

class Movie_ActorDao extends BaseDao {

    public function __construct(){
        parent::__construct("movie_actor");
    }
}
?>