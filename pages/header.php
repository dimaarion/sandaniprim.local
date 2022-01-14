<?php
header("Access-Control-Allow-Origin:https://sandaniprim.md");
header("Content-type: application/json");
spl_autoload_register(function ($className) {
    require '../adminpanel/admin/classes/' . $className . '.php';
});
