// import * as fs from "fs";

const nouns = [
  "amor",
  "café",
  "equipo",
  "explosión",
  "guitarra",
  "plástico",
  "crema",
  "martillo",
  "libros",
  "lápiz",
  "temor",
  "aluminio",
  "embarcación",
  "letra",
  "miel",
  "archipiélago",
  "rueda",
  "discoteca",
  "universidad",
  "librería",
  "perros",
  "llaves",
  "manada",
  "pelo",
  "papá",
  "sillón",
  "felicidad",
  "cuna",
  "teclado",
  "servilleta",
  "escuela",
  "pantalla",
  "gente",
  "lapicera",
  "tenedor",
  "estadística",
  "mapa",
  "fauna",
  "mensaje",
  "lima",
  "cohete",
  "rey",
  "edificio",
  "césped",
  "presidencia",
  "hojas",
  "familia",
  "colegio",
  "granizo",
  "pestaña",
  "lámpara",
  "mano",
  "salud",
  "flor",
  "música",
  "hombre",
  "tornillo",
  "habitación",
  "velero",
  "abuela",
  "guerra",
  "palo",
  "satélite",
  "templo",
  "lentes",
  "bolígrafo",
  "plato",
  "nube",
  "gobierno",
  "botella",
  "castillo",
  "pinar",
  "riqueza",
  "verano",
  "persona",
  "planeta",
  "televisor",
  "guantes",
  "metal",
  "poder",
  "elegancia",
  "mono",
  "remera",
  "muela",
  "petróleo",
  "percha",
  "remate",
  "debate",
  "tiempo",
  "cuaderno",
  "ruido",
  "pared",
  "suerte",
  "herramienta",
  "cartas",
  "chocolate",
  "anteojos",
  "impresora",
  "caramelos",
  "living",
  "luces",
  "angustia",
  "zapato",
  "bomba",
  "racimo",
  "ojo",
  "corbata",
  "ceremonia",
  "alma",
  "planta",
  "odio",
  "buzo",
  "oficina",
  "persiana",
  "puerta",
  "tío",
  "silla",
  "ensalada",
  "pradera",
  "zoológico",
  "candidato",
  "deporte",
  "recipiente",
  "diarios",
  "fotografía",
  "ave",
  "hierro",
  "refugio",
  "pantalón",
  "religión",
  "carne",
  "nieve",
  "tecla",
  "humedad",
  "tropa",
  "departamento",
  "celular",
  "tristeza",
  "hipopótamo",
  "vocabulario",
  "cama",
  "gas",
  "coro",
  "campera",
  "discurso",
  "autos",
  "cinturón",
  "entusiasmo",
  "famoso",
  "madera",
  "fideos",
  "piso",
  "maletín",
  "reloj",
  "diputado",
  "cuchillo",
  "oscuridad",
  "candado",
  "luz",
  "montañas",
  "computadora",
  "radio",
  "moño",
  "cuadro",
  "calor",
  "partido",
  "teatro",
  "clientela",
  "fiesta",
  "sueño",
  "auriculares",
];

// const removeAccents = (data: any) => {
//   return data.map((str: any) =>
//     str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
//   );
// };
// const nonAcc = removeAccents(nouns);

// const upperCase = (data: any) => {
//   return data.map((str: any) => str.toUpperCase());
// };
// const upper = upperCase(nonAcc);

// const lengthFilter = (data: any, max: number) => {
//   let filteredData = [];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].length == max) {
//       filteredData.push(data[i]);
//     }
//   }
//   return filteredData;
// };
// const length5 = lengthFilter(upper, 5);
// console.log("length5.length::: ", length5.length);

// const writeFile = (data: any, name: string) => {
//   let dataSt = JSON.stringify(data);
//   fs.writeFile(`./${name}.json`, dataSt, (err) => {
//     console.log(err);
//   });
// };
// writeFile(length5, "nouns5");
