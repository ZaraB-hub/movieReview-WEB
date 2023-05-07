<?php
        class BaseDao
        {
            private $conn;
            private $table_name;

            /**
             * Class constructor used to establish connection to db
             */
            public function __construct($table_name)
            {
                try {
                    $this->table_name = $table_name;
                    $servername = Config::DB_HOST();
                    $username = Config::DB_USERNAME();
                    $password = Config::DB_PASSWORD();
                    $schema = Config::DB_SCHEMA();;
                    $this->conn = new PDO("mysql:host=$servername;dbname=$schema", $username, $password);
                    // set the PDO error mode to exception
                    $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                    //echo "Connected successfully";
                } catch (PDOException $e) {
                    echo "Connection failed: " . $e->getMessage();
                }
            }

            /**
             * Method used to get all entities from database
             */
            public function get_all()
            {
                $stmt = $this->conn->prepare("SELECT * FROM " . $this->table_name);
                $stmt->execute();
                return $stmt->fetchAll(PDO::FETCH_ASSOC);
            }

            /**
             * Method used to get entity by id from database
             */
            public function get_by_id($id)
            {
                $stmt = $this->conn->prepare("SELECT * FROM " . $this->table_name . " WHERE ".$this->table_name."Id=:id");
                $stmt->execute(['id' => $id]);
                return $stmt->fetchAll();
            }

        }

