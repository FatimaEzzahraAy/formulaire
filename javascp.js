 var date = new Date();
 d = document.getElementById("dat").innerHTML = "<p> Bonjour la date d'aujourd'hui: " + date.toLocaleDateString()+"</p>";
 
// t = document.getElementById("txt");
// t.innerHTML="dssdv";

 function valideT(){
    n = document.getElementById("nom").value;
    p = document.getElementById("prenom").value;
    d = document.getElementById("age").value;
    cdp = document.getElementById("cp").value;
    em = document.getElementById("email").value;
   // varem = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,5}$','i');
    //testem = varem.test(em);
    
    motp = document.getElementById("pass").value;
    motvp = document.getElementById("vp").value;

    dd = new Date().getFullYear() - new Date(d).getFullYear();

        if ( n.length < 3 ){
          document.getElementById("validnom").style.display="block";  
        }
        else{
        document.getElementById("validnom").style.display="none";
    }
      if ( p.length < 3 ){
            document.getElementById("validprenom").innerHTML = "entrez votre prenom";
        }
        else{
            document.getElementById("validprenom").innerHTML = "";
        }
     
      if ( dd < 18 ){
            document.getElementById("validdate").innerHTML = "votre age doit être plus que 18";
      }
      else {
        document.getElementById("validdate").innerHTML = "";
      }
      if ( cdp.length < 3 ){
        document.getElementById("validcp").innerHTML = "entrez votre code postal";
    }
    else{
        document.getElementById("validcp").innerHTML = "";
    }
  /*  if ( p == "" ){
        document.getElementById("validp").innerHTML = "selectionez un pays";
    }
    else{
        document.getElementById("validp").innerHTML = "";
    }*/
    if ( document.getElementById("fem").checked == false && document.getElementById("mas").checked == false){
        document.getElementById("validg").innerHTML = "entrez votre genre";
    }
    else{
        document.getElementById("validg").innerHTML = "";
    }
    if ( motp != motvp ){
        document.getElementById("password").innerHTML = "ce n'est pas le même mot de passe";
    }
    else{
        document.getElementById("password").innerHTML = "";
    }
    if ( document.getElementById("fax").checked == false || document.getElementById("emai").checked == false || document.getElementById("tel").checked == false ){
        document.getElementById("choix").innerHTML = "selectionez au moin une";
    }
   /* else{ 
        if ( document.getElementById("fax").checked == true && document.getElementById("emai").checked == true && document.getElementById("tel").checked == true ){
        document.getElementById("choix").innerHTML = "";
    }}*/
   /* if (!testem){
        alert("email");
    }*/
}