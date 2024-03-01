<?php
    session_start();
    $username = '';
    $password_1 = '';
    $password_2 = '';
    $errors = array();

    $db = mysqli_connect('localhost','root','1024369','registration');


    if(isset($_POST['register'])){
        $username = mysqli_real_escape_string($db,$_POST['username']);
        $password_1 = mysqli_real_escape_string($db,$_POST['password']);
        $password_2 = mysqli_real_escape_string($db,$_POST['confirm_password']);

        if(empty($username)){
            array_push($errors,"Username is required");
        }
        if(empty($password_1)){
            array_push($errors,"Password is required");
        }
        if(empty($password_2)){
            array_push($errors,"Confirming password is required");
        }
        if($password_1 != $password_2){
            array_push($errors,"The two passwords are not identical");
        }
        if(count($errors) == 0){
            $password = md5($password_1);
            $sql = "INSERT INTO users (username,password) 
            VALUES ('$username' , '$password')
            ";
            mysqli_query($db , $sql);
             $_SESSION['username'] = $username;
            //  $_SESSION['success'] = "You're now logged in";
             header('Location : Auth.js');
            
        }
    }





?>