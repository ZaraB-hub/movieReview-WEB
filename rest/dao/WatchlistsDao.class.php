<?php
require_once "BaseDao.php";

class WatchlistsDao extends BaseDao {

    public function __construct(){
        parent::__construct("watchlists");
    }
}
?>