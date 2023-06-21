<?php
require_once "BaseDao.php";

class UsersDao extends BaseDao {

    public function __construct(){
        parent::__construct("users");
    }


    function getUserByEmail($email)
    {
        return $this->query_unique("SELECT * FROM users WHERE Email = :email", ["email" => $email]);
    }

    function getUserByUsername($username)
    {
        return $this->query_unique("SELECT * FROM users WHERE username = :username", ["username" => $username]);
    }



}
?>