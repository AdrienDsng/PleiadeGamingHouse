/**
 * Created by Utilisateur on 21/03/2018.
 */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "0px";
  $("#main").css("opacity","0.7");
  $("#main").css("filter","blur(5px)");
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  $("#main").css("opacity","1");
  $("#main").css("filter","none");
}
