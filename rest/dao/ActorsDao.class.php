<?php
require_once "BaseDao.class.php";

class ActorsDao extends BaseDao {

    public function __construct(){
        parent::__construct("actors");
    }
}
?>