<?php
$database = "brando19_css475";
$username = "brando19_guest";
$password = "guest@CSS475";

$mysqli = new mysqli("localhost", $username, $password, $database); 
// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$wholeQuery = $_GET['wholeQuery'];
$query = $mysqli->query($wholeQuery);

if ($query) {
  $query_result = $query->fetch_assoc();
  foreach ($query_result as $columns => $rows) {
      // get rid of column name
  }

  do {
    foreach ($query_result as $colums => $rows) {
        echo "<option value=\"" . $rows . "\"></option>";
    }
  } while ($query_result = $query->fetch_assoc());
}

?>