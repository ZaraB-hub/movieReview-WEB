<?php
require_once "BaseDao.php";

class Movie_DirectorDao extends BaseDao
{

    public function __construct()
    {
        parent::__construct("movie_director");
    }
}
