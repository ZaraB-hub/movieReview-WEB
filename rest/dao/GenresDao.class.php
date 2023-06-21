<?php
require_once "BaseDao.php";

class GenresDao extends BaseDao
{

    public function __construct()
    {
        parent::__construct("genres");
    }
}
