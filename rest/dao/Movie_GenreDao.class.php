<?php
require_once "BaseDao.php";

class Movie_GenreDao extends BaseDao 
{

    public function __construct()
    {
        parent::__construct("movie_genre");
    }

    function getGenres($movieID)
    {
        return $this->query("SELECT * FROM movie_genre WHERE MovieID = :movieID", ["movieID" => $movieID]);
    }
}
