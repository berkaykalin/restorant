document.addEventListener("DOMContentLoaded", function() {
  openMenu(event, 'cf', 'menu2-group');
  openMenu(event, 'wg', 'menu3-group');
});

function openMenu(evt, menuName, groupName) {
  var i, x, tablinks;
  x = document.getElementsByClassName(groupName); 
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-red";
}
