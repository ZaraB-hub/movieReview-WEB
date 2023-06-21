<?php
require_once "BaseDao.php";

class WatchlistsDao extends BaseDao {

    public function __construct(){
        parent::__construct("watchlists");
    }

    function getWatchlistByUser($id)
    {
        return $this->query_unique("SELECT * FROM watchlists WHERE UsersID = :id", ["id" => $id]);
    }
    

}
?>