<?php
// signup.php

include 'db.php';  // ← your database connection file

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));

    $name = $data->name;
    $email = $data->email;
    $role = $data->role;        // <-- receive dropdown role (user/admin)
    $address = $data->address;
    $password = password_hash($data->password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (name, email, password, address, role)
            VALUES ('$name', '$email', '$password', '$address', '$role')";
    
    if (mysqli_query($conn, $sql)) {
        echo json_encode(["message" => "Signup success"]);
    } else {
        echo json_encode(["message" => "Error: " . mysqli_error($conn)]);
    }
}
?>
