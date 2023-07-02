<?php
require_once 'BaseService.php';

class RatingsService extends BaseService
{
    public function __construct()
    {
        parent::__construct(Flight::ratings_dao());
    } 


    function get_avg_by_movie($id)
    {
        return $this->dao_object->get_avg_by_movie($id);
    }

    function get_user_rating($movieID,$userID){
        return $this->dao_object->get_user_rating($movieID,$userID);
    }

}
