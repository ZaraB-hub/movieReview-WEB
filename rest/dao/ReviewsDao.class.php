<?php
require_once "BaseDao.php";

class ReviewsDao extends BaseDao {

    public function __construct(){
        parent::__construct("reviews");
    }


    function get_by_movie_id($id)
    {
        return $this->query("SELECT * FROM reviews WHERE MoviesID = :id", ["id" => $id]);
    }

    // function addReview($data)
    // {
    //     return $this->query("INSERT INTO reviews (UsersID, MoviesID, Comment) VALUES (:userID, 1, :comment)",
    //         [
    //             "userID" => $data["UsersID"],
    //             "comment" => $data["Comment"]
    //         ]
    //     );
    // }

    // function addReview($data)
    // {
    //     return $this->query("INSERT INTO reviews (UsersID,MoviesID,Comment) values (45,2,'Good')");
    // }

    function addReview($data)
{
    $userID = $data['UsersID'];
    $moviesID = $data['MoviesID'];
    $comment = $data['Comment'];

    return $this->query("INSERT INTO reviews (UsersID, MoviesID, Comment) VALUES (:userID, :moviesID, :comment)",
        [
            "userID" => $userID,
            "moviesID" => $moviesID,
            "comment" => $comment
        ]
    );
}

    
    
}    