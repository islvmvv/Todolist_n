<?php  

include ('server.php');




?>




<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>User Authentication Test</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>

    <div id="loginForm">
      <!-- <header id="main-header">
        <h1>To Do List</h1>
    </header> -->
      <h1>Login</h1>
      <br>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" />
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" />
      <button onclick="login()">Login</button>
      <p>
        Don't have an account? <a href="register.php">Register</a>
    </p>
    </div>

    <div id="loggedIn" style="display: none" name = "loggedIn">
      <header id="main-header">
        <h1><span id="user"></span>'s To Do List</h1>
    </header>
    <div class="container">
      <div class="form" method = "POST" action="<?php $_SERVER['PHP_SELF']; ?>">
        <input type="text" class="input" />
        <input type="submit" class="add" value="Add Task" />
      </div>
      <div class="tasks"></div>
    </div>
      <button onclick="logout()">Logout</button>
    </div>
    <script src="Auth.js"></script>
    <footer id="main-footer">
    <p>Copyright &copy; 2024 Islam</p>
    </footer>
  </body>
</html>