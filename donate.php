<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>donate</title>
</head>
<body>
<?php
	$host="localhost";
	$hname=$_POST['hname'];
	$category=$_POST['category'];
	$amount=$_POST['amount'];
	
	$con= mysqli_connect($host,"root","","webproject");
	$sql="INSERT INTO donate(hname,category,amount) VALUES('$hname','$category','$amount') ";
	if($con){
		mysqli_query($con,$sql);
	}
	else{
		echo "connect DB is failed";
	}
?>
</body>
</html>