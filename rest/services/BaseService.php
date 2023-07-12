<?php

class BaseService
{
    protected $dao_object;

    public function __construct($dao)
    {
        $this->dao_object=$dao;
    }


        public function get_all()
        {
             //dao
            return $this->dao_object->get_all();
            
        }
    
        public function get_by_id($id)
        {
            return $this->dao_object->get_by_id($id);
        }
    
        public function update($id,$data, $id_column="id")
        {
            return $this->dao_object->update($id, $data, $id_column);
        }
    
    
        public function delete($id, $id_column="id")
        {
            return $this->dao_object->delete($id, $id_column);
        }

        public function add($data)
        {
            return $this->dao_object->add($data);
        }
    }
    