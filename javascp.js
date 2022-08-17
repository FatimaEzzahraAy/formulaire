 var date = new Date();
 d = document.getElementById("dat").innerHTML = "<p> Bonjour la date d'aujourd'hui: " + date.toLocaleDateString()+"</p>";

 function valideT(){  
    validenom();
    valideprenom();
    validecp();
    valideage();
    valideemail();
    validepays();
    validepass();
    validepassword();
    validegenre();  
    validepcontrat();
}
//fonction pour verification de nom:
function validenom(){
    n = document.getElementById("nom").value;
    if ( n.length < 3 ){
        document.getElementById("validnom").style.display="block";  
      }
      else{
      document.getElementById("validnom").style.display="none";
  }
}
//fonction pour verification de prenom:
function valideprenom(){
    p = document.getElementById("prenom").value;
    if ( p.length < 3 ){
        document.getElementById("validprenom").innerHTML = "non valide";
    }
    else{
        document.getElementById("validprenom").innerHTML = "valide";
    }
}
//fonction pour verification d'age:
function valideage(){
    d = document.getElementById("age").value;
    dd = new Date().getFullYear() - new Date(d).getFullYear();
     //pour verifier la date:
      if ( dd < 18 ){
            document.getElementById("validdate").innerHTML = "votre age doit être plus que 18";
      }
      else {
        document.getElementById("validdate").innerHTML = "valider";
      }
}
//fonction pour verification de code postal:
function validecp(){
    cdp = document.getElementById("cp").value;
    if ( cdp.length < 3 ){
        document.getElementById("validcp").innerHTML = "non valider";
    }
    else{
        document.getElementById("validcp").innerHTML = "valider";
    }
}
//fonction pour verification de mot de passe:
function validepass(){
    motp = document.getElementById("pass").value;
    if (motp.length < 6 || motp.length > 8){
        document.getElementById("validpass").innerHTML = "Entrez au minimal 6 caracteres et au maximal 8 caracteres";
    }
    else {
        document.getElementById("validpass").innerHTML = "mot de passe valider"
    }
}
//fonction pour verification de (verifier le mot de passe ):
function validepassword(){
    motvp = document.getElementById("vp").value;
    motp = document.getElementById("pass").value;
    if ( motvp == "" || motp != motvp ){
        document.getElementById("validevp").innerHTML = "ce n'est pas le même mot de passe";
    }
    else{
        document.getElementById("validevp").innerHTML = "valider";
    }
}
//fonction pour verification d'email:
function valideemail(){
    em = document.getElementById("email").value;
    regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
    testemail = regEmail.test(em);
    if(!testemail){
        document.getElementById("validem").innerHTML = "non valider";
    }
    else{
        document.getElementById("validem").innerHTML = "valider";
    }
}
//fonction pour pays::::
function validepays(){
    p = document.getElementById("pays").value;
    if (p == "please selected..."){
        document.getElementById("validp").innerHTML = "non valider";
    }
    else{
        document.getElementById("validp").innerHTML = "valider";
    }
}
//fonction pour le genre
function validegenre(){
    if ( document.getElementById("fem").checked == false && document.getElementById("mas").checked == false){
        document.getElementById("validg").innerHTML = "entrez votre genre";
    }
    else{
        document.getElementById("validg").innerHTML = "valider";
    }
}
function validepcontrat(){
    fax = document.getElementById("fax").checked;
    email = document.getElementById("emai").checked;
    tel = document.getElementById("tel").checked;
    if (fax == true || email == true || tel == true){
        document.getElementById("choix").innerHTML = "valider";
    }else {
        document.getElementById("choix").innerHTML = "non valider";
    } 
}
