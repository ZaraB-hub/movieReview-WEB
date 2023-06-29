<?php
require_once 'BaseService.php';

class RatingsService extends BaseService
{
    public function __construct()
    {
        parent::__construct(Flight::ratings_dao());
    } 


    function get_by_movie_id($id)
    {
        return $this->dao_object->get_by_movie_id($id);
    }

}
