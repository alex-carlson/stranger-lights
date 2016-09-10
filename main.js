var letters = {
  a: [60, 110],
  b: [100, 100],
  c: [130, 100],
  d: [183, 102],
  e: [236, 94],
  f: [282, 99],
  g: [321, 91],
  h: [371, 76],
  i: [15, 169],
  j: [69, 177],
  k: [105, 182],
  l: [147, 180],
  m: [190, 178],
  n: [228, 167],
  o: [273, 153],
  p: [318, 148],
  q: [422, 148],
  r: [44, 240],
  s: [81, 248],
  t: [113, 254],
  u: [157, 256],
  v: [202, 253],
  w: [244, 247],
  x: [284, 245],
  y: [337, 239],
  z: [411, 236],
}

$(document).ready(function() {

  var l = $('.light');
  var myText = '';

  $('.textEntry').submit(function(e){
    e.preventDefault();
    myText = '';
    var v = $('.words').val();

    for (var i = 0, len = v.length; i < len; i++) {
      myText += v[i];
    }
    doLetter();
  })

  function doLetter(){

    var i = 0;
    var t = myText.toLowerCase();
    t= t.replace(/\s/g, '');

    var thisI = setInterval(function(){

      var index = t.substring(i, i+1);

      if(i >= t.length){
        l.css({ left: "9999px", top: "9999px"});
        clearInterval(thisI);
        return;
      } else {
        l.css({ left: letters[index][0]+"px", top: letters[index][1]+"px"});

        i++;
      }

    }, 1000);
  }
});
