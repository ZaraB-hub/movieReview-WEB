<?php
require_once 'BaseService.php';

class ContentRatingService extends BaseService
{
    public function __construct()
    {
        parent::__construct(Flight::contentrating_dao());
    } 

    
}
