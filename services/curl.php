<?php
//include('/usr/local/lib/tm/ChromePhp.php');
//echo header("Content-type: text/plain");
echo("dog\n");
//ChromePhp::log("in get.php");
$data = $_SERVER['QUERY_STRING'];
echo($data);
//http://cascada.sitebuilt.net/services/curl.php?status=ON&til=1                           
$ch = curl_init('sitebuilt.no-ip.biz/?'.$data);                              
$ch = curl_init('10.0.1.186/?'.$data);                              
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");                                                         
curl_setopt($ch, CURLOPT_HTTPGET, TRUE); 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
curl_setopt($ch, CURLOPT_HTTPHEADER, array( 
	"Accept: json",
	 "HTTP/1.1 Host: api.cosm.com",
    "X-ApiKey:  xxxxxxjxjndjjxn",
	"User-Agent: sitebuilt Arduino Example (83080)" ));                                                  
$result = curl_exec($ch);
echo($result);
?>