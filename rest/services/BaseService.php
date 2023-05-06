<?php

class BaseService
{
    private $dao;

    public function __construct($dao)
    {
        $this->dao = $dao;
    }

    public function get_all()
    {
        return $this->dao->get_all();
    }

    public function get_by_id($id)
    {
        return $this->dao->get_by_id($id);
    }

    
}
