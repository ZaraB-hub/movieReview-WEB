<?php
require_once "BaseDao.php";

class ActorsDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct("actors");
    }


    public function get_by_name($name)
    {
        $sql="SELECT * FROM actors
        WHERE CONCAT( FirstName,  ' ', LastName ) LIKE :name OR CONCAT( LastName,  ' ', FirstName ) LIKE :name COLLATE utf8mb4_general_ci";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute(['name' => '%' . $name . '%']);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    
}
