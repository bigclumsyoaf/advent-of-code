var day1 = {
  process: function( debug ) {

    document.write("<h2>Day 1 Results</h2>");
    document.write("<p>Part A - Times passed zero: " + day1A.process(debug) + "</p>");
    document.write("<p>Part B - Times passed zero: " + day1B.process(debug) + "</p>");
    document.write("<hr/>");
  }
}
var day1A = {
  zeros: 0,
  current: 50,
  data: day1input,
  process: function( debug ) {
    this.current = 50;
    this.zeros = 0;
    for ( var i = 0; i < this.data.length; i++ ) {
      var dir = this.data[i].substring(0,1);
      var dist = parseInt( this.data[i].substring(1) );
      var move = ( dir == "L" ) ? -1 : 1;
      for ( var j=0; j<dist; j++ ) {
        this.current += move;
        if ( this.current<0 ) this.current=99;
        if ( this.current>=100 ) this.current=0;
      }
      if ( this.current == 0 ) {
        this.zeros++;
      }
      if ( debug ) console.log( this.data[i] + " -> " + dir + " -> " + dist + " -> " + this.current );
    }
    return this.zeros;
  }
}
var day1B = {
  zeros: 0,
  current: 50,
  data: day1input,
  process: function( debug ) {
    this.current = 50;
    this.zeros = 0;
    for ( var i = 0; i < this.data.length; i++ ) {
      var dir = this.data[i].substring(0,1);
      var dist = parseInt( this.data[i].substring(1) );
      var move = ( dir == "L" ) ? -1 : 1;
      for ( var j=0; j<dist; j++ ) {
        this.current += move;
        if ( this.current<0 ) this.current=99;
        if ( this.current>=100 ) this.current=0;
        if ( this.current == 0 ) {
          this.zeros++;
        }
      }
      if ( debug ) console.log( this.data[i] + " -> " + dir + " -> " + dist + " -> " + this.current );
    }
    return this.zeros;
  }

}

