<?php

$toDoList = [
    [
        'description' => 'Creare un file',
        'status' => false
    ],
    [
        'description' => 'Rinominare il file',
        'status' => false
    ],
    [
        'description' => 'Installare app',
        'status' => false
    ],
    [
        'description' => 'Importiamo lo style',
        'status' => false
    ],
    [
        'description' => 'Completare il file',
        'status' => false
    ],
];

header('Content-Type: application/json');

$jsonString = json_encode($toDoList);

echo $jsonString;
