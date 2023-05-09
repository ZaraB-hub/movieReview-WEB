<?php
require_once "BaseDao.php";

class MoviesDao extends BaseDao {

    public function __construct(){
        parent::__construct("movies");
    }

    
    public function get_by_title($title)
    {
        $sql="SELECT * FROM Movies
        WHERE Title LIKE :title COLLATE utf8mb4_general_ci";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute(['title' => '%' . $title . '%']);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    

    
    
    
}
?>