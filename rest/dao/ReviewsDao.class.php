<?php
require_once "BaseDao.php";

class ReviewsDao extends BaseDao
{

    public function __construct()
    {
        parent::__construct("reviews");
    }


    function get_by_movie_id($id)
    {
        return $this->query("SELECT * FROM reviews WHERE MoviesID = :id ORDER BY CreatedAt Desc", ["id" => $id]);
    }


    // function addReview($data)
    // {
    //     $userID = $data['UsersID'];
    //     $moviesID = $data['MoviesID'];
    //     $comment = $data['Comment'];

    //     return $this->query("INSERT INTO reviews (UsersID, MoviesID, Comment) VALUES (:userID, :moviesID, :comment)",
    //         [
    //             "userID" => $userID,
    //             "moviesID" => $moviesID,
    //             "comment" => $comment
    //         ]
    //     );
    // }

    
    
}    