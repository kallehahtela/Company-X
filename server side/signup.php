<?php
session_start();

// Hardcoded admin credentials (for demonstration purposes)
$admins = [
    'admin1' => 'password1',
    'admin2' => 'password2',
    // Add more admins as needed
];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check if provided credentials match any admin's credentials
    if (array_key_exists($username, $admins) && $admins[$username] === $password) {
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $username;
        header("dashboard.html"); // Redirect to admin dashboard or a protected page
        exit();
    } else {
        $error = "Invalid username or password";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Head content -->
</head>

<body>
    <form action="" method="post">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required>

        <label for="password">Password</label>
        <input type="password" id="password" name="password" required>

        <button type="submit">Login</button>
    </form>

    <?php if (isset($error)): ?>
        <p>
            <?php echo $error; ?>
        </p>
    <?php endif; ?>
</body>

</html>