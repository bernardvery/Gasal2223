<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>OOP in PHP</title>

<?php include("class_lib.php"); ?>

</head>

<body>
<?php
    $stefan = new person("Stefan Mischook");
    echo "Stefan's full name: " . $stefan->get_name();
?>
</body>

</html>