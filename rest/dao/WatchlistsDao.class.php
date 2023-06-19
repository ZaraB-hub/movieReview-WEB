<?php
require_once "BaseDao.php";

class WatchlistsDao extends BaseDao {

    public function __construct(){
        parent::__construct("watchlists");
    }

    public function add($entity)
    {    
        $query = "INSERT INTO watchlists (UsersID) VALUES (:UsersID)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':UsersID', $entity['UsersID']);
        $stmt->execute();
        return $entity;
    }
    

    function getWatchlistByUser($id)
    {
        return $this->query_unique("SELECT * FROM watchlists WHERE UsersID = :id", ["id" => $id]);
    }
    

}
?>