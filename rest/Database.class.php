<?php
    class Database
    {
        private static ?Database $instance = null;
        private PDO $conn;
    
        public static function getInstance(): Database
        {
            if (self::$instance === null) {
                self::$instance = new self();
            }
    
            return self::$instance;
        }
    
        private function __construct()
        {
            try {
                $servername = Config::DB_HOST();
                $username = Config::DB_USERNAME();
                $password = Config::DB_PASSWORD();
                $schema = Config::DB_SCHEMA();
                $port=Config::DB_PORT();
                $this->conn = new PDO("mysql:host=$servername;dbname=$schema;port=$port", $username, $password);
                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $e) {
                echo "Connection failed: " . $e->getMessage();
            }
        }
    
        public function getConnection(): PDO
        {
            return $this->conn;
        }
    }
    
