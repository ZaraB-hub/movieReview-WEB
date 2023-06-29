<?php
require_once "BaseDao.php";

class RatingsDao extends BaseDao
{

    public function __construct()
    {
        parent::__construct("ratings");
    }


    function get_by_movie_id($id)
    {
        return $this->query("SELECT * FROM ratings WHERE MoviesID = :id", ["id" => $id]);
    }

}    