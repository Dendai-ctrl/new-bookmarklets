(function(){
  var sheet=document.createElement('style');
  sheet.innerHTML=('i, .fa, .glyphicon, .material-icons, [data-icon] { background-color: lime; }');
  document.body.appendChild(sheet);
  alert("Icon fonts will be highlighted if found.");
})();
