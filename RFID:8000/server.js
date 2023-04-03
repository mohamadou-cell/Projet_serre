express = require("express");
path = require("path");
mongoose = require("mongoose");
createError = require("http-errors");
cors = require("cors");
bodyParser = require("body-parser");
const app = express();
let UserSchema = require("./model/user.model");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const jwt = require("jsonwebtoken");

mongoose.set("strictQuery", true);

mongoose
  .connect(
    "mongodb://localhost:27017/test",

    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échoué !"));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(cors({ origin: "*" }));

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log("Port connected to: " + port);
});

io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["PUT", "GET", "POST", "DELETE", "OPTIONS"],
    credentials: false,
  },
});

/* var Serialport = require("serialport");
const { error } = require("console");
var Readline = Serialport.parsers.Readline;
var serialport = require('serialport');
var port2 = new Serialport("/dev/ttyACM0", {
  baudRate: 9600,
}); 

const parser = port2.pipe(new Readline({ delimiter: "\r\n" })); */

const { SerialPort } = require('serialport');
var { ReadlineParser } = require("@serialport/parser-readline")
var port2 = new SerialPort({ path:'/dev/ttyUSB0',
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
}); 

var parser = port2.pipe(new ReadlineParser({ delimiter: '\r\n' })); 

app.post("/envoyer", async (req, res, next) => {
  const cle = "MIIEowIBAAKCAQEA0pJxfpy9WqcVEI0FhRb6GqyILM4Fgwp/aC32IMIuGjigD"; 

  let { matricule1, matricule2 } = req.body;

  const acces1 = await UserSchema.findOne({ matricule1 });
  const acces2 = await UserSchema.findOne({ matricule2 });

  if (acces1 || acces2) {
    if (!acces2) {
      let token;

      //Creation jwt token
      token = jwt.sign(
        { userId: acces1.id, matricule1: acces1.matricule1 },
     
        cle,
        { expiresIn: "1h" }
      );
      console.log("succes");
      res.status(200).json({
        message: "succes",
        data: {
          userId: acces1.id,
          email: acces1.email,
          nom: acces1.nom,
          prenom: acces1.prenom,
          matricule1: acces1.matricule1,
          matricule2: acces1.matricule2,
          token: token,
        },
      });
    }
    if (!acces1) {
      let token;

      token = jwt.sign(
        { userId: acces2.id, matricule1: acces2.matricule1 },
       
        cle,
        { expiresIn: "1h" }
      );
      console.log("succes");
      res.status(200).json({
        message: "succes",
        data: {
          userId: acces2.id,
          email: acces2.email,
          nom: acces2.nom,
          prenom: acces2.prenom,
          matricule1: acces2.matricule1,
          matricule2: acces2.matricule2,
          token: token,
        },
      });
    }
  } else {
    return res.status(200).json({ message: "carte invalide" });
  }
});

parser.on("data", (data) => {
  passer = data[0] + data[1] + data[2] + data[3] + data[4] + data[5] + data[6];
  console.log(
    data[0] + data[1] + data[2] + data[3] + data[4] + data[5] + data[6]
  );
  io.emit("data", passer);
});
