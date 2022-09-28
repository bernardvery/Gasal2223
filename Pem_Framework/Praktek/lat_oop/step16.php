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

    /*
    Since $pinn_number was declared private, this line of code 
    will generate an error. Try it out! 
    */

    echo "Tell me private stuff: " . $stefan->$pinn_number;
?>
</body>

</html>