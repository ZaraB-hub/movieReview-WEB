<?php
require_once 'BaseService.php';

class Movie_GenreService extends BaseService
{
    public function __construct()
    {
        parent::__construct(Flight::movie_genre_dao());
    } 

    
}
