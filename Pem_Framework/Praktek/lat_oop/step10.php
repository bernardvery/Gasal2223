<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>OOP in PHP</title>

<?php include("class_lib.php"); ?>

</head>

<body>
<?php
    $stefan = new person();
    $jimmy = new person();

    $stefan->set_name("Stefan Mischook");
    $jimmy->set_name("Nick Waddles");
?>
</body>

</html>