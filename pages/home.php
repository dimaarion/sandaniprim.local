<?php
require("header.php");
echo json_encode(json_decode(file_get_contents("./json/home.json")));