<?php
/**
 * Created by PhpStorm.
 * User: Sachith
 * Date: 2/11/17
 * Time: 8:53 PM
 */
function getDBConnection(){
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "";

    return $conn = new mysqli($servername, $username, $password, $dbname);
}

function checkDBConnection($connection){
    if($connection->connect_error){
        //echo("Connection failed: " . $connection->connect_error);
        return false;
    }else{
        //echo("Connection Ok: " . $connection->connect_error);
        return true;
    }
}