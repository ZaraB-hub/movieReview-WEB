<?php
require_once "BaseDao.php";

class MoviesDao extends BaseDao
{

    public function __construct()
    {
        parent::__construct("movies");
    }


    public function get_by_title($title)
    {
        $sql = "SELECT * FROM Movies
        WHERE Title LIKE :title COLLATE utf8mb4_general_ci";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute(['title' => '%' . $title . '%']);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function get_all()
    {
        $stmt = $this->conn->prepare("SELECT * from MOVIES order by CreatedTimestamp desc LIMIT 4");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function get_genre($genre)
    {
        $stmt = $this->conn->prepare("SELECT * from movie_genre 
                join movies on MoviesID=MovieID
                join genres on GenresID=GenreID
                where name Like :genre COLLATE utf8mb4_general_ci");
                $stmt->execute(['genre' => '%' . $genre . '%']);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function get_trending()
    {
        $sql = "SELECT * FROM Movies
        ORDER BY Views desc";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
