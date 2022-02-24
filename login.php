<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>login</title>
</head>
<body>
<?php
	$host="localhost";
	$email=$_POST['email'];
	$password=$_POST['psw'];

	$con=mysqli_connect($host,"root","","webproject");
	$sql="INSERT INTO login(email,psw,) VALUES('$email','$password',) ";
	if($con){
		mysqli_query($con,$sql);
	}
	else{
		echo "connect DB is failed";
	}
?>
</body>
</html>
