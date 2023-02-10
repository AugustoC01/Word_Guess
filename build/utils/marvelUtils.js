"use strict";
let raw = "";
let requestOptions = {
    method: "GET",
    body: raw,
    redirect: "follow",
};
fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=e425de70adb74ed2143ffee5dd09a804&ts=1&hash=a55fcd197b6ad79b0d88b1abbf494793", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
