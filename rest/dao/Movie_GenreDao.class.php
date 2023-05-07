<?php
require_once "BaseDao.php";

class Movie_GenreDao extends BaseDao {

    public function __construct(){
        parent::__construct("movie_genre");
    }
}
?>