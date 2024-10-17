// today.js
module.exports.getDate = function getDate() {
  // Obtener la fecha y hora actual en la zona horaria "America/ Bogota"
  let aestTime = new Date().toLocaleString("en-US", {
    timeZone: "America/Bogota",
  });

  // Convertir la cadena de fecha/hora en un nuevo objeto Date
  return new Date(aestTime); // Devuelve un objeto Date
};
