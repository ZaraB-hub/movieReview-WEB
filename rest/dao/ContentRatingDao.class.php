<?php
require_once "BaseDao.php";

class ContentRatingDao extends BaseDao
{

    public function __construct()
    {
        parent::__construct("contentrating");
    }
}
