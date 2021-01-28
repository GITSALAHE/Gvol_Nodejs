const Vol = require("../models/vol.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const volData = new Vol({
        villeDepart : req.body.villeDepart,
        villeArrive : req.body.villeArrive,
        dateDepart : req.body.dateDepart,
        heureDepart : req.body.heureDepart,
        nbPlace : req.body.nbPlace,
        escale : req.body.escale,
        prix : req.body.prix
    });
    Vol.create(volData, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the vol."
            });
        else res.send(data);
    });
}

exports.searchVol = (req, res) => {
    console.log(req.params.villeDepart);
    Vol.search(req.params.villeDepart, req.params.villeArrive, req.params.dateDepart, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Vol .`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Vol"
                });
            }
        } else res.send(data);
    })
}

exports.findAll = (req, res) => {
    Vol.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving posts."
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Vol.findById(req.params.volId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Vol with id ${req.params.volId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Vol with id " + req.params.volId
                });
            }
        } else res.send(data);
    });
};

exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log(req.body);

    Vol.updateById(req.params.volId, new Vol(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Vol with id ${req.params.volId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Vol with id " + req.params.volId
                    });
                }
            } else res.send(data);
        }
    );
};

exports.delete = (req, res) => {
    Vol.remove(req.params.volId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Vol with id ${req.params.volId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Vol with id " + req.params.volId
                });
            }
        } else res.send({ message: `Vol was deleted successfully!` });
    });
};

exports.deleteAll = (req, res) => {
    Vol.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all vols."
            });
        else res.send({ message: `All vols were deleted successfully!` });
    });
};