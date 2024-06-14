<?php

$toDoList = ['ciao'];

header('Content-Type: application/json');

$jsonString = json_encode($toDoList);

echo $jsonString;
