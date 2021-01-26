const sql = require("./db.models.js");

const Vol = function(vol) {
    this.villeDepart = vol.villeDepart;
    this.villeArrive = vol.villeArrive;
    this.dateDepart = vol.dateDepart;
    this.heureDepart = vol.heureDepart;
    this.nbPlace = vol.nbPlace;
    this.escale = vol.escale;
    this.prix = vol.prix;
  };
  Vol.create = (data, result) => {
    sql.query("INSERT INTO vol SET ?", data, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created vol: ", { id: res.insertId, ...data });
      result(null, { id: res.insertId, ...data });
    });
  };

  Vol.findById = (volId, result) => {
    sql.query(`SELECT * FROM vol WHERE id = ${volId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found vol: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };
  
  Vol.getAll = result => {
    sql.query("SELECT * FROM vol", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("vols: ", res);
      result(null, res);
    });
  };
  
  Vol.updateById = (id, dataVol, result) => {
    sql.query(
      "UPDATE vol SET villeDepart=?, villeArrive=?, dateDepart=?, heureDepart = ?, nbPlace = ? WHERE idVol = ?",
      [dataVol.villeDepart, dataVol.villeArrive, dataVol.dateDepart, dataVol.heureDepart, dataVol.nbPlace, dataVol.escale, dataVol.prix, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated vol: ", { id: id, ...dataVol });
        result(null, { id: id, ...dataVol });
      }
    );
  };
  
  Vol.remove = (id, result) => {
    sql.query("DELETE FROM vol WHERE idVol = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted vol with id: ", id);
      result(null, res);
    });
  };
  
  Vol.removeAll = result => {
    sql.query("DELETE FROM vol", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} vol`);
      result(null, res);
    });
  };
  module.exports = Vol;