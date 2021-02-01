module.exports = app => {
    const volController = require("../controllers/vol.controller.js");
    const resController = require("../controllers/reservation.controller");
    app.get("/vols", volController.findAll);
    app.post("/vols", volController.create);
    app.put("/vols/:volId", volController.update);
    app.delete("/vols", volController.deleteAll);
    app.delete("/vols/:volId", volController.delete);
    app.post("/reservation", resController.create);
    app.get("/fillInputVilleDepart", volController.findAllVilleDepart);
    app.get("/fillInputVilleArriver", volController.findAllVilleArriver);
    app.get("/searchVol/:villeDepart&:villeArrive&:dateDepart", volController.searchVol)

  };