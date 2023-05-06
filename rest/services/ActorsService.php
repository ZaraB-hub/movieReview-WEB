<?php
require_once 'BaseService.php';
require_once '../dao/ActorsDao.class.php';

class ActorsService extends BaseService{
    public function __construct(){
        parent::__construct(new ActorsDao);
    } 

    
}
?>