<?php
require_once "BaseDao.php";

class MoviesDao extends BaseDao {

    public function __construct(){
        parent::__construct("movies");
    }
}
?>