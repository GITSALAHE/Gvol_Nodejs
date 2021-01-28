const sql = require("./db.models.js");
const Reservation = function(res){
    this.code = res.code;
    this.nom = res.nom;
    this.prenom = res.prenom;
    this.email = res.email;
    this.telephone = res.telephone;
    this.idVol = res.idVol;
    this.nbPlace = res.nbPlace;
}
Reservation.create = (data, result) => {
    sql.query("INSERT INTO reservation SET ?", data, (err, res) =>{
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
      
          result(null, { id: res.insertId, ...data });
    });
};
Reservation.getLastId = result => {
    sql.query("SELECT * FROM reservation ORDER BY idRes DESC LIMIT 1", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      result(null, res);
    });
  };
module.exports = Reservation;