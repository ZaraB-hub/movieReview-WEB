<?php
require_once "BaseDao.php";

class RatingsDao extends BaseDao
{

    public function __construct()
    {
        parent::__construct("ratings");
    }


    function get_avg_by_movie($id)
    {
        return $this->query_unique("SELECT ROUND(AVG(rating), 1) as average FROM ratings WHERE MoviesID = :id", ["id" => $id]);
    }

    function get_user_rating($movieID,$userID){
        return $this->query("SELECT * FROM ratings where MoviesID=:moviesID and UsersID=:userID;", ["moviesID" => $movieID,"userID"=>$userID]);
    }

}    