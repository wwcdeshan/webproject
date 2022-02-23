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
	$name=$_POST['name'];
	$address1=$_POST['address1'];
	$address2=$_POST['address2'];
	$address3=$_POST['address3'];
	$address4=$_POST['address4'];
	$pno1=$_POST['pno1'];
	$pno2=$_POST['pno2'];
	$email=$_POST['email'];


	$con=mysqli_connect($host,"root","","webproject");
	$sql="INSERT INTO connect(name,address1,address2,address3,address4,pno1,pno2,email) VALUES('$name','$address1','$address2','$address3','$address4','$pno1','$pno2','$email') ";
	if($con){
		mysqli_query($con,$sql);
	}
	else{
		echo "connect DB is failed";
	}
?>
</body>
</html>