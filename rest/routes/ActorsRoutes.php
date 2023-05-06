<?php

Flight::route("GET /actors", function () {
   Flight::json(Flight::actors_service()->get_all());
});

