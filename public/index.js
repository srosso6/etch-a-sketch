window.onload = function() {

  console.log( "App started" );
  var canvas = document.getElementById( "main" );
  console.log( canvas );
  var context = canvas.getContext( "2d" );

  var drawLine = function( event ) {

    var x = JSON.parse( localStorage.getItem("x") );
    x = (x || x === 0) ? x : 20;

    var y = JSON.parse( localStorage.getItem("y") );
    y = (y || y === 0) ? y : 20;


    var endX = x;
    var endY = y;

    context.beginPath();
    context.moveTo( x, y );

    if( event.srcElement.id === "down" ) {
      if( y < 500 ) {
        var endY = y+10;
      } else {
      endY = 500;
      }
    }

    if( event.srcElement.id === "up" ) {
      if( y > 0 ) {
        var endY = y-10;
      } else {
        endY = 0;
      }
    }

    if( event.srcElement.id === "right" ) {
      if( x < 800 ) {
        var endX = x+10;
      } else {
        endX = 800;
      }
    }

    if( event.srcElement.id === "left" ) {
      if( x > 0 ) {
        var endX = x-10;
      } else {
        endX = 0;
      }
    }

    context.lineTo( endX, endY );

    context.stroke();
    context.closePath();

    localStorage.setItem( "x", endX );
    localStorage.setItem( "y", endY );
  }

  document.getElementById( "button" ).addEventListener("click", function() {
    drawLine( event );
  } );

}

window.onbeforeunload = function() {
  localStorage.clear();
}
