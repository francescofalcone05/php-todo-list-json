<?php

// recupero il file json
$jsonString = file_get_contents("dati.json");

// controllo se ho ricevuto qualcosa dall'input
if (isset($_POST["description"]) && isset($_POST["status"])) {

    //converto il file json in un'array php (il true e` obbligatorio quando DECODIFICO un file )
    $toDoList = json_decode($jsonString, true);

    //creo un nuovo oggetto con i dati dell'input
    $newObject = [
        "description" => $_POST["description"],
        "status" => $_POST["status"]
    ];

    //lo pusho dentro l'array preso dal json
    $toDoList[] = $newObject;

    //riconverto il file in json
    $jsonString = json_encode($toDoList);

    //scrivo sul file json
    file_put_contents("dati.json", $jsonString);
} else {
}



header('Content-Type: application/json');

echo $jsonString;
