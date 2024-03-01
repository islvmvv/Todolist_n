<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do List</title>
    <link rel="stylesheet" href="style.css" />

</head>
<body>

<form method = "post" action ="register.php">
      
      
      <br>
        <?php include('errors.php'); ?>
        <div id="loginForm">
        <h1>Register</h1>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" value = "<?php echo $username; ?>">
        <!-- </div>
        <div id="loginForm"> -->
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" >
        <!-- </div>
        <div id="loginForm"> -->
      <label for="confirm_password">Confirm Password:</label>
      <input type="password" id="confirm_password" name="confirm_password" >
        <!-- </div>
        <div id="loginForm"> -->
      <button type = "submit" name = "register" class = "btn_1">Register</button>
        </div>
    <p>
        Already have an account? <a href="Auth.php">Login</a>
    </p>
</form>
</div>
<footer id="main-footer">
    <p>Copyright &copy; 2024 Islam</p>
    </footer>
</body>
</html>