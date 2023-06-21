<?php
require_once 'BaseService.php';

class ReviewsService extends BaseService{
    public function __construct(){
        parent::__construct(new ReviewsDao());
    } 


    function get_by_movie_id($id)
    {
        return $this->dao_object->get_by_movie_id($id);
    }

    function addReview($data)
    {
        return $this->dao_object->addReview($data);
    }
}
?>