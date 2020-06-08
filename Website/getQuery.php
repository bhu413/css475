<?php
// disable warnings so it doesn't show up in frontend
error_reporting(0);
try {
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
    echo '<table class = "table">';
    echo "<tr>";
    foreach ($query_result as $columns => $rows) {
        echo "<th>{$columns}</th>";
    }
    echo "</tr>";
    do {
      echo "<tr>";
      foreach ($query_result as $colums => $rows) {
          echo "<td>$rows</td>";
      }
      echo "</tr>";
    } while ($query_result = $query->fetch_assoc());
    echo "</table>";
  } else {
    echo "No results";
  }
} catch (Exception $e) {
  echo "No results";
}

?>