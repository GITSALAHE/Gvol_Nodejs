var btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener('mousedown', () => {
    
    var villeDepart = document.getElementById("villeDepart").value;
    var villeArrive = document.getElementById("villeArrive").value;
    var dateDepart = document.getElementById("dateVol").value;
    axios.get(`http://localhost:3000/searchVol/${villeDepart}&${villeArrive}&${dateDepart}`).then(function(response){
        var html = '';       
    response.data.forEach(element => {
               html += `
               <div class='container' id="vols">
               <div class='row'>
                   <div class='card-body'>
                       <ul class='list-group mb-4' scope='row'>
                           <li class='list-group-item'>Vol Numéro: <strong>
                           ${element.idVol}
                               </strong></li>
                           <li class='list-group-item'>Lieu Départ: <strong>
                                    ${element.villeDepart}
                               </strong></li>
                           <li class='list-group-item'>Lieu Arrive: <strong>
                           ${element.villeArrive}
                               </strong></li>
                           <li class='list-group-item'>Date Départ: <strong>
                           ${element.dateDepart}  &nbsp;   ${element.heureDepart}
                               </strong></li>
                           <li class='list-group-item'>Date Arrive: <strong>
                               </strong></li>
                           <li class='list-group-item'>Numéro des Places Disponible: <strong>
                           ${element.nbPlace}
                               </strong></li>
                           <li class='list-group-item'>Prix: <strong>
                           ${element.prix}
                               </strong></li>
                           <div class='card-link'>
       
       
                               <a href='reservation.html?idVol=${element.idVol}&nbPlace=${element.nbPlace}&price=${element.prix}' class='c-link'>Réserver
                                   <i class='fa fa-angle-right'></i><i class='fa fa-angle-right'></i>
                               </a>
       
       
                           </div>
                   </div>
               </div>
           </div>`
           });

           document.getElementById("append").innerHTML = html; 
           var top = $("#vols").offset().top;
    $("html, body").animate({ scrollTop: top }, 1000);
    }).catch(function (err){
        var html = `
    <div class='container' id="vols">
        <div class='row'>
            <div class='card-body'>
                <h1>Not found </h1>
            
            </div>
        </div>
    </div>`;
    document.getElementById("append").innerHTML = html; 
    var top = $("#vols").offset().top;
$("html, body").animate({ scrollTop: top }, 1000);
    });
})