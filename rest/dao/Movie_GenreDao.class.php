<?php
require_once "BaseDao.php";

class Movie_GenreDao extends BaseDao 
{

    public function __construct()
    {
        parent::__construct("movie_genre");
    }

    public function get_by_id($id)
    {
        $stmt = $this->conn->prepare("SELECT * FROM movie_genre where MovieId=:id");
        $stmt->execute(['id' => $id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
