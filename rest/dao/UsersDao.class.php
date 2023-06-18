<?php
require_once "BaseDao.php";

class UsersDao extends BaseDao {

    public function __construct(){
        parent::__construct("users");
    }


    function getUserByEmail($email)
    {
        return $this->query_unique("SELECT * FROM users WHERE email = :email", ["email" => $email]);
    }


}
?>