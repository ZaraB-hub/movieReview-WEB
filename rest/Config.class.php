<?php

class Config {
    public static function DB_HOST(){
        return 'localhost';
    }

    public static function DB_USERNAME(){
        return 'root';
    }

    public static function DB_PASSWORD(){
        return 'uniburch';
    }

    public static function DB_SCHEMA(){
        return 'zmdb';
    }

    public static function JWT_SECRET(){
        return "some_secret";
    }
}
