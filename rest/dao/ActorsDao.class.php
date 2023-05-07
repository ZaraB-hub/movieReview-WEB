<?php
require_once "BaseDao.php";

class ActorsDao extends BaseDao {

    public function __construct(){
        parent::__construct("actors");
    }
}
?>