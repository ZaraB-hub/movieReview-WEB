<?php
require_once 'BaseService.php';

class WatchlistsService extends BaseService
{
    public function __construct()
    {
        parent::__construct(new WatchlistsDao);
    }


    function getWatchlistByUser($id)
    {
        return $this->dao_object->getWatchlistByUser($id);
        
    }


}
