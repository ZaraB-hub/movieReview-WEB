<?php
require_once 'BaseService.php';

class UsersService extends BaseService
{
    public function __construct()
    {
        parent::__construct(new UsersDao);
    }

    function add($user)
    {
        $user['password'] = md5($user['password']);
        return parent::add($user);
    }

    function getUserByEmail($email)
    {
        return $this->dao_object->getUserByEmail($email);
        
    }

    function addEmail($user)
    {
        $email = $user['email'];
        $existingUser = $this->dao_object->getUserByEmail($email);

        if ($existingUser) {
            return false; // Email address already exists
        } else {
            return true; // Email address is available
        }
    }

    function addUsername($user)
    {
        $username = $user['username'];
        $existingUser = $this->dao_object->getUserByUsername($username);

        if ($existingUser) {
            return false; // Email address already exists
        } else {
            return true; // Email address is available
        }
    }
}
