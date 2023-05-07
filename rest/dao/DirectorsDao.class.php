<?php
require_once "BaseDao.php";

class DirectorsDao extends BaseDao {

    public function __construct(){
        parent::__construct("directors");
    }
}
?>