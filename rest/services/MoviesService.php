<?php
require_once 'BaseService.php';

class MoviesService extends BaseService
{
    public function __construct()
    {
        parent::__construct(Flight::movies_dao());
    } 

    public function get_by_title($title)
    {
        return $this->dao_object->get_by_title($title);
    }

    public function get_genre($genre)
    {
        return $this->dao_object->get_genre($genre);
    }

    public function get_trending()
    {
        return $this->dao_object->get_trending();

    }
    
}
