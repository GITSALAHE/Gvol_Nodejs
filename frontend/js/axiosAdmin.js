getData();
function getData() {
    axios.get("http://localhost:3000/vols")
        .then(function (response) {
            var tbody = document.getElementById("tbody");

            var updateID = document.getElementById("idVol");
            
            var child = '';
            response.data.forEach(element => {
                child += ' <tr>';
                child += "<td>" + element.idVol + "</td>";
                child += "<td>" + element.villeDepart + "</td>";
                child += "<td>" + element.villeArrive + "</td>";
                child += "<td>" + element.dateDepart + "</td>";
                child += "<td>" + element.heureDepart + "</td>";
                child += "<td>" + element.nbPlace + "</td>";
                child += "<td>" + element.nbr_place_dispo + "</td>";
                child += "<td>" + element.escale + "</td>";
                child += "<td>" + element.prix + "</td>";
                child += "<td> <a name='' id='' class='btn  btn-success' href='' role='button'>Reservation</a></td>";
                var option = document.createElement('option');
                var nodeID = document.createTextNode(element.idVol);
                option.setAttribute('value', element.idVol);
                option.appendChild(nodeID);
                updateID.appendChild(option);
              
            });
            tbody.innerHTML = child;
        })
}
var addVol = document.getElementById("addVol");
addVol.addEventListener('click', () => {

    var villeDepart = document.getElementById("villeDepart").value;
    var villeArrive = document.getElementById("villeArrive").value;
    var dateDepart = document.getElementById("dateDepart").value;
    var heureDepart = document.getElementById("heureDepart").value;
    var nbPlace = document.getElementById("nbPlaces").value;
    var escale = document.getElementById("escale").value;
    var prix = document.getElementById("prix").value;
    var data = {
        villeDepart: villeDepart,
        villeArrive: villeArrive,
        dateDepart: dateDepart,
        heureDepart: heureDepart,
        nbPlace: nbPlace,
        escale: escale,
        prix : prix
    }
    axios.post("http://localhost:3000/vols", data)
        .then(function (response) {
            getData();
            location.reload();

        })

})


var updateVol = document.getElementById("updateVol");
updateVol.addEventListener('click', () => {

    var updateID = document.getElementById("idVol").value;
    var villeDepart = document.getElementById("villeDepartUpd").value;
    var villeArrive = document.getElementById("villeArriveUpd").value;
    var dateDepart = document.getElementById("dateDepartUpd").value;
    var heureDepart = document.getElementById("heureDepartUpd").value;
    var nbPlace = document.getElementById("nbPlacesUpd").value;
    var escale = document.getElementById("escaleUpd").value;
    var prix = document.getElementById("prixUpd").value;

    var data = {
        villeDepart: villeDepart,
        villeArrive: villeArrive,
        dateDepart: dateDepart,
        heureDepart: heureDepart,
        nbPlace: nbPlace,
        escale: escale,
        prix : prix
    }
    axios.put(`http://localhost:3000/vols/${updateID}`, data)
        .then(function (response) {
            getData();
            console.log(response);
            location.reload();

        })

})

