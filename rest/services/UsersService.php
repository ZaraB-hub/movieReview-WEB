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

    // function update($id, $user)
    // {
    //     $user['password'] = md5($user['password']);
    //     return parent::update($id, $user);
    // }

    function getUserByEmail($email)
    {
        return $this->dao_object->getUserByEmail($email);
        
    }
}
?>