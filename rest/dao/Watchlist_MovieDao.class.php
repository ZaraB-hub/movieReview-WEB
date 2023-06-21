<?php
require_once "BaseDao.php";

class Watchlist_MovieDao extends BaseDao {

    public function __construct(){
        parent::__construct("watchlists_movies");
    }

    public function get_by_id($id)
    {
        $stmt = $this->conn->prepare("SELECT * FROM movie_genre where MovieId=:id");
        $stmt->execute(['id' => $id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    function getWatchlistByWatchlist($id)
    {
        return $this->query("SELECT * FROM watchlists_movies WHERE WatchlistsID = :id", ["id" => $id]);
    }
    
    public function add($entity)
    {    
        $query = "INSERT INTO watchlists_movies (WatchlistsID,MoviesID) VALUES (:WatchlistsID,:MoviesID)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':WatchlistsID', $entity['WatchlistsID']);
        $stmt->bindParam(':MoviesID', $entity['MoviesID']);
        $stmt->execute();
        return $entity;
    }

    public function deleteMovie($w,$id)
    {    
        return $this->query("DELETE FROM watchlists_movies WHERE MoviesID = :id and  WatchlistsID = :w", ["id" => $id,"w"=>$w]);

    }

    
    public function addMovie($w, $id)
    {    
        return $this->query("INSERT INTO watchlists_movies (MoviesID, WatchlistsID) VALUES (:id, :w)", ["id" => $id, "w" => $w]);
    }
    
    
    
}