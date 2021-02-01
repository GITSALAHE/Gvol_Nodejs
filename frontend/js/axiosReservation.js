const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const place = parseInt(urlParams.get('nbPlace'));
var id = parseInt(urlParams.get('idVol'))
var prix = parseInt(urlParams.get('price'));
var selectAppend = document.getElementById('nbPlaceAppend');
var html = '';
for (let index = 1; index <= place; index++) {
    html += `<option value="${index}">${index}</option>`;
    
}
selectAppend.innerHTML = html;

var btnRes = document.getElementById("btnAddRes");

btnRes.addEventListener('click',  () => {
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var email = document.getElementById('email').value;
    var telephone = document.getElementById('telephone').value;
    var nbPlace = document.getElementById('nbPlaceAppend').value;
    var data = {
      nom : nom,
      prenom: prenom,
      email : email,
      telephone : telephone,
      idVol : id,
      nbPlace : nbPlace
    }

 axios.post('http://localhost:3000/reservation', data).then(function(success){
            location.replace("thankyou.html");
    });
});