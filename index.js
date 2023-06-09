

const app = require("./app");
const port = 5000;
const mongoose = require("mongoose");
//asignacion del puerto y requerir el archivo app para iniciar el servidor

//conexion a mongodb atlas
const URI =
  "mongodb+srv://Admin:12345@cluster0.t4xbzm4.mongodb.net/conectar";

mongoose.set("strictQuery", false);

mongoose
  .connect(URI)
  .then(console.log("Conectado a mongo Atlas"))
  .catch((error) => console.log(error));

//arranque de la api
app.listen(port, () => {
  console.log("Server on port", port);
});