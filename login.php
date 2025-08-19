<?php
// login.php

include 'db.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $email = $data['email'];
    $password = $data['password'];

    $query = "SELECT * FROM users WHERE email = '$email' LIMIT 1";
    $result = mysqli_query($conn, $query);

    if ($row = mysqli_fetch_assoc($result)) {
        if (password_verify($password, $row['password'])) {
            echo json_encode([
                "message" => "Login successful",
                "role" => $row['role'],
                "id"   => $row['id'],
                "name" => $row['name']
            ]);
        } else {
            echo json_encode(["message" => "Incorrect password"]);
        }
    } else {
        echo json_encode(["message" => "User not found"]);
    }
}
?>
