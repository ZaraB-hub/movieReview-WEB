<?php
require_once 'BaseService.php';

class Watchlist_MovieService extends BaseService{
    public function __construct(){
        parent::__construct(new Watchlist_MovieDao);
    } 

    function getWatchlistByWatchlist($id)
    {
        return $this->dao_object->getWatchlistByWatchlist($id);
        
    }

    function deleteMovie($w,$id)
    {
        return $this->dao_object->deleteMovie($w,$id);
        
    }


    function addMovie($w,$id)
    {
        return $this->dao_object->addMovie($w,$id);
        
    }
}
?>