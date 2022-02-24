<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>signin</title>
</head>
<body>
<?php
	$host="localhost";
	$email=$_POST['email'];
	$password=sha1($_POST['psw']);
	$rPassword=sha1($_POST['psw-repeat'];


	$con=mysqli_connect($host,"root","","webproject");
	$sql="INSERT INTO signin(email,psw,psw_repeat) VALUES('$email','$password','$rPassword') ";
	if($con){
		mysqli_query($con,$sql);
	}
	else{
		echo "connect DB is failed";
	}
?>

</body>
</html>
