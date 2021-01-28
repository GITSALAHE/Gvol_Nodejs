const Reservation = require("../models/reservation.model.js");
const { uuid } = require('uuidv4');

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    var codeGenerator = "GVOL_"+uuid();
    const resData = new Reservation({
      code : codeGenerator,
      nom : req.body.nom,
      prenom: req.body.prenom,
      email : req.body.email,
      telephone : req.body.telephone,
      idVol : req.body.idVol,
      nbPlace : req.body.nbPlace
    });
    
Reservation.create(resData,  (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the reservation."
            });
        else res.send(data);
    });
}


