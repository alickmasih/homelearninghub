<?php
// Database connection
$servername = "localhost"; // Database server
$username = "root"; // Database username
$password = ""; // Database password (replace with your own)
$dbname = "home_learning_hub"; // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password
    $stream = $_POST['stream'];
    $adhaar_card = $_FILES['adhaar_card']['name']; // Assuming file upload for Adhaar card
    $gender = $_POST['gender'];
    $age = $_POST['age'];
    $contact_number = $_POST['contact_number'];

    // File upload for Adhaar card
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["adhaar_card"]["name"]);
    move_uploaded_file($_FILES["adhaar_card"]["tmp_name"], $target_file);

    // Insert data into teachers table
    $sql = "INSERT INTO teachers (first_name, last_name, email, password, stream, adhaar_card, gender, age, contact_number)
            VALUES ('$first_name', '$last_name', '$email', '$password', '$stream', '$adhaar_card', '$gender', '$age', '$contact_number')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close connection
    $conn->close();
}
?>
